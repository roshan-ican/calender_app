// @ts-nocheck

import closeWithGrace from "close-with-grace";
import * as dotenv from "dotenv";
import Fastify from "fastify";
import { AppError, errorHandler, normalizeError } from "@/lib/error-handeling";

import { logger } from "@/lib/logger";

import app from "./app";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const server = Fastify({
  logger: !isProduction,
});

// Register your application as a normal plugin.
void server.register(app);

// Delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async (opts: any) => {
  if (opts.err) {
    logger.error(`${opts.err.message}, closing app...`);
  }

  await server.close();
});

server.addHook("onClose", (_instance, done) => {
  closeListeners.uninstall();
  done();
});

// Start listening.
server.listen(
  {
    port: Number(process.env.PORT ?? 4300),
    host: process.env.SERVER_HOSTNAME ?? "0.0.0.0",
  },
  (err: Error | null, address: string) => {
    if (err) {
      logger.error(`Error listening server: ${err.message}`);
      process.exit(1);
    }

    // Here we integrate the error event listener
    errorHandler.listenToErrorEvents(server.server);

    logger.info(`Server listening at ${address}`);
  },
);

server.ready(async (err: Error) => {
  if (err) {
    await errorHandler.handleError(
      new AppError("startup-failure", err.message, 500, false, err),
    );

    logger.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }

  // server.swagger();

  logger.info("All routes loaded! Check your console for the route details.");

  console.log(server.printRoutes());

  logger.info(`Server listening on port ${Number(process.env.PORT ?? 4300)}`);
});

server.setErrorHandler(async (error, request, reply) => {
  logger.info(JSON.stringify(error));
  const appError = normalizeError(error);
  const isValidationError = error.code === "FST_ERR_VALIDATION";

  // Assign a default trusted status if not present
  if (appError.isTrusted === undefined || appError.isTrusted === null) {
    appError.isTrusted = true; // Error during a specific request is usually not fatal
  }

  if (isValidationError) {
    await reply.status(error.statusCode ?? 400).send({
      name: "The incoming request format incorrect",
      message: error.message || "The incoming request format incorrect",
      code: "VAL_ERR",
    });
    return;
  }

  if (!isValidationError) {
    await reply.status(appError.HTTPStatus || 500).send({
      name: appError.name,
      message: appError.message,
      code: appError.code,
    });
  }

  await errorHandler.handleError(appError);
});

export { server as app };
