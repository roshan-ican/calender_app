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

// src/lib/logger/pino.logger.ts
import {
  pino
} from "pino";
var _logger;
var PinoLogger = class {
  constructor(level, prettyPrintEnabled, destStream) {
    this.level = level;
    this.prettyPrintEnabled = prettyPrintEnabled;
    this.destStream = destStream;
    __privateAdd(this, _logger, void 0);
    __privateSet(this, _logger, pino({
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
    var _a, _b;
    if (__privateGet(this, _underlyingLogger) === null || overrideIfExists) {
      __privateSet(this, _underlyingLogger, new PinoLogger(
        (_a = configuration.level) != null ? _a : "info",
        (_b = configuration.prettyPrint) != null ? _b : false
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

// src/domain/example/use-cases/create-example/create-example.usecase.ts
var createExampleUseCase = async (newExample) => {
  const newExampleCreated = "created";
  if (!newExampleCreated) {
    throw new Error("Error creating example");
  }
  throw new AppError("Error creating example", "Error creating example", 500);
};
var create_example_usecase_default = createExampleUseCase;
export {
  create_example_usecase_default as default
};
//# sourceMappingURL=create-example.usecase.js.map