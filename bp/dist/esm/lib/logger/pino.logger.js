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
export {
  PinoLogger as default
};
//# sourceMappingURL=pino.logger.js.map