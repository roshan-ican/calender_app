"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/server.ts
var server_exports = {};
__export(server_exports, {
  app: () => server
});
module.exports = __toCommonJS(server_exports);
var import_close_with_grace = __toESM(require("close-with-grace"));
var dotenv = __toESM(require("dotenv"));
var import_fastify = __toESM(require("fastify"));

// src/lib/error-handeling/index.ts
var util = __toESM(require("util"));

// src/lib/logger/pino.logger.ts
var import_pino = require("pino");
var _logger;
var PinoLogger = class {
  constructor(level, prettyPrintEnabled, destStream) {
    this.level = level;
    this.prettyPrintEnabled = prettyPrintEnabled;
    this.destStream = destStream;
    __privateAdd(this, _logger, void 0);
    __privateSet(this, _logger, (0, import_pino.pino)({
      level,
      transport: prettyPrintEnabled ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          sync: true
        }
      } : void 0
    }));
  }
  debug(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).debug(metadata, message);
    } else {
      __privateGet(this, _logger).debug(message);
    }
  }
  error(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).error(metadata, message);
    } else {
      __privateGet(this, _logger).error(message);
    }
  }
  info(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).info(metadata, message);
    } else {
      __privateGet(this, _logger).info(message);
    }
  }
  warning(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).warn(metadata, message);
    } else {
      __privateGet(this, _logger).warn(message);
    }
  }
};
_logger = new WeakMap();

// src/lib/logger/index.ts
var _underlyingLogger, _getInitializeLogger, getInitializeLogger_fn;
var LoggerWrapper = class {
  constructor() {
    __privateAdd(this, _getInitializeLogger);
    // @ts-expect-error description: 'abcd'
    __privateAdd(this, _underlyingLogger, null);
  }
  configureLogger(configuration, overrideIfExists = true) {
    var _a2, _b2;
    if (__privateGet(this, _underlyingLogger) === null || overrideIfExists) {
      __privateSet(this, _underlyingLogger, new PinoLogger(
        (_a2 = configuration.level) != null ? _a2 : "info",
        (_b2 = configuration.prettyPrint) != null ? _b2 : false
      ));
    }
  }
  resetLogger() {
    __privateSet(this, _underlyingLogger, null);
  }
  debug(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).debug(message);
  }
  error(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).error(message);
  }
  info(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).info(message);
  }
  warning(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).warning(message);
  }
};
_underlyingLogger = new WeakMap();
_getInitializeLogger = new WeakSet();
getInitializeLogger_fn = function() {
  this.configureLogger({ prettyPrint: true }, false);
  return __privateGet(this, _underlyingLogger);
};
var logger = new LoggerWrapper();

// src/lib/error-handeling/index.ts
var httpServerRef;
var errorHandler = {
  // Listen to the global process-level error events
  listenToErrorEvents(httpServer) {
    httpServerRef = httpServer;
    process.on("uncaughtException", async (error) => {
      await errorHandler.handleError(error);
    });
    process.on("unhandledRejection", async (reason) => {
      await errorHandler.handleError(reason);
    });
    process.on("SIGTERM", async () => {
      logger.error(
        "App received SIGTERM event, try to gracefully close the server"
      );
      await terminateHttpServerAndExit();
    });
    process.on("SIGINT", async () => {
      logger.error(
        "App received SIGINT event, try to gracefully close the server"
      );
      await terminateHttpServerAndExit();
    });
  },
  async handleError(errorToHandle) {
    try {
      const appError = normalizeError(errorToHandle);
      logger.error(`AppError: ${appError.message}`);
      await metricsExporter.fireMetric("error", { errorName: appError.name });
      if (!appError.isTrusted) {
        await terminateHttpServerAndExit();
      }
    } catch (handlingError) {
      process.stdout.write(
        "The error handler failed, here are the handler failure and then the origin error that it tried to handle"
      );
      process.stdout.write(JSON.stringify(handlingError));
      process.stdout.write(JSON.stringify(errorToHandle));
    }
  }
};
var terminateHttpServerAndExit = async () => {
  if (httpServerRef) {
    httpServerRef.close();
  }
  process.exit();
};
var normalizeError = (errorToHandle) => {
  if (errorToHandle instanceof AppError) {
    return errorToHandle;
  }
  if (errorToHandle instanceof Error) {
    const appError = new AppError(errorToHandle.name, errorToHandle.message);
    appError.stack = errorToHandle.stack;
    return appError;
  }
  const inputType = typeof errorToHandle;
  return new AppError(
    "general-error",
    `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      errorToHandle
    )}`
  );
};
var AppError = class extends Error {
  constructor(name, message, HTTPStatus = 500, isTrusted = true, code = "ERR_GENERAL", cause) {
    super(message);
    this.name = name;
    this.message = message;
    this.HTTPStatus = HTTPStatus;
    this.isTrusted = isTrusted;
    this.code = code;
    this.cause = cause;
  }
};
var metricsExporter = {
  async fireMetric(name, labels) {
    console.log("In real production code I will really fire metrics", {
      name,
      labels
    });
  }
};

// src/app.ts
var import_path = require("path");
var import_autoload = __toESM(require("@fastify/autoload"));
var import_type_provider_typebox = require("@fastify/type-provider-typebox");
var app = async (fastify, opts) => {
  void fastify.setValidatorCompiler(import_type_provider_typebox.TypeBoxValidatorCompiler);
  void fastify.register(import_autoload.default, {
    dir: (0, import_path.join)(__dirname, "plugins"),
    options: opts
  });
  void fastify.register(import_autoload.default, {
    dir: (0, import_path.join)(__dirname, "./entry-points/http/"),
    options: opts
  });
};
var app_default = app;

// src/server.ts
dotenv.config();
var isProduction = process.env.NODE_ENV === "production";
var server = (0, import_fastify.default)({
  logger: !isProduction
});
void server.register(app_default);
var closeListeners = (0, import_close_with_grace.default)({ delay: 500 }, async (opts) => {
  if (opts.err) {
    logger.error(`${opts.err.message}, closing app...`);
  }
  await server.close();
});
server.addHook("onClose", (_instance, done) => {
  closeListeners.uninstall();
  done();
});
var _a, _b;
server.listen(
  {
    port: Number((_a = process.env.PORT) != null ? _a : 4200),
    host: (_b = process.env.SERVER_HOSTNAME) != null ? _b : "127.0.0.1"
  },
  (err, address) => {
    if (err) {
      logger.error(`Error listening server: ${err.message}`);
      process.exit(1);
    }
    errorHandler.listenToErrorEvents(server.server);
    logger.info(`Server listening at ${address}`);
  }
);
server.ready(async (err) => {
  var _a2;
  if (err) {
    await errorHandler.handleError(
      new AppError("startup-failure", err.message, 500, false, err)
    );
    logger.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
  logger.info("All routes loaded! Check your console for the route details.");
  console.log(server.printRoutes());
  logger.info(`Server listening on port ${Number((_a2 = process.env.PORT) != null ? _a2 : 4200)}`);
});
server.setErrorHandler(async (error, request, reply) => {
  var _a2;
  logger.info(JSON.stringify(error));
  const appError = normalizeError(error);
  const isValidationError = error.code === "FST_ERR_VALIDATION";
  if (appError.isTrusted === void 0 || appError.isTrusted === null) {
    appError.isTrusted = true;
  }
  if (isValidationError) {
    await reply.status((_a2 = error.statusCode) != null ? _a2 : 400).send({
      name: "The incoming request format incorrect",
      message: error.message || "The incoming request format incorrect",
      code: "VAL_ERR"
    });
    return;
  }
  if (!isValidationError) {
    await reply.status(appError.HTTPStatus || 500).send({
      name: appError.name,
      message: appError.message,
      code: appError.code
    });
  }
  await errorHandler.handleError(appError);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
//# sourceMappingURL=server.js.map