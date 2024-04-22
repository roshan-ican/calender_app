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

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app,
  default: () => app_default,
  options: () => options
});
module.exports = __toCommonJS(app_exports);
var import_path = require("path");
var import_autoload = __toESM(require("@fastify/autoload"));
var import_type_provider_typebox = require("@fastify/type-provider-typebox");
var options = {};
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app,
  options
});
//# sourceMappingURL=app.js.map