import type * as Http from "http";
import * as util from "util";
import { logger } from "../logger";

let httpServerRef: Http.Server;

const errorHandler = {
  // Listen to the global process-level error events
  listenToErrorEvents(httpServer: Http.Server) {
    httpServerRef = httpServer;
    process.on("uncaughtException", async (error) => {
      await errorHandler.handleError(error);
    });

    process.on("unhandledRejection", async (reason) => {
      await errorHandler.handleError(reason);
    });

    process.on("SIGTERM", async () => {
      logger.error(
        "App received SIGTERM event, try to gracefully close the server",
      );
      await terminateHttpServerAndExit();
    });

    process.on("SIGINT", async () => {
      logger.error(
        "App received SIGINT event, try to gracefully close the server",
      );
      await terminateHttpServerAndExit();
    });
  },

  async handleError(errorToHandle: unknown) {
    try {
      const appError: AppError = normalizeError(errorToHandle);
      logger.error(`AppError: ${appError.message}`);
      await metricsExporter.fireMetric("error", { errorName: appError.name }); // fire any custom metric when handling error
      // A common best practice is to crash when an unknown error (non-trusted) is being thrown
      if (!appError.isTrusted) {
        await terminateHttpServerAndExit();
      }
    } catch (handlingError: unknown) {
      // Not using the logger here because it might have failed
      process.stdout.write(
        "The error handler failed, here are the handler failure and then the origin error that it tried to handle",
      );
      process.stdout.write(JSON.stringify(handlingError));
      process.stdout.write(JSON.stringify(errorToHandle));
    }
  },
};

const terminateHttpServerAndExit = async () => {
  // maybe implement more complex logic here (like using 'http-terminator' library)
  if (httpServerRef) {
    httpServerRef.close();
  }

  process.exit();
};

// The input might won't be 'AppError' or even 'Error' instance, the output of this function will be - AppError.
const normalizeError = (errorToHandle: unknown): AppError => {
  if (errorToHandle instanceof AppError) {
    return errorToHandle;
  }

  if (errorToHandle instanceof Error) {
    const appError = new AppError(errorToHandle.name, errorToHandle.message);
    appError.stack = errorToHandle.stack;
    return appError;
  }

  // meaning it could be any type,
  const inputType = typeof errorToHandle;
  return new AppError(
    "general-error",
    `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      errorToHandle,
    )}`,
  );
};

type ERR_CODES = "VAL_ERR" | "ERR_GENERAL";

class AppError extends Error {
  constructor(
    public name: string,
    public message: string,
    public HTTPStatus = 500,
    public isTrusted = true,
    public code: ERR_CODES = "ERR_GENERAL",
    public cause?: unknown,
  ) {
    super(message);
  }
}

// This simulates a typical monitoring solution that allow firing custom metrics when
// like Prometheus, DataDog, CloudWatch, etc
const metricsExporter = {
  async fireMetric(name: string, labels: Record<string, unknown>) {
    // TODO: use logger instead of conso.log

    console.log("In real production code I will really fire metrics", {
      name,
      labels,
    });
  },
};

export {
  errorHandler,
  metricsExporter,
  AppError,
  normalizeError,
  terminateHttpServerAndExit,
};
