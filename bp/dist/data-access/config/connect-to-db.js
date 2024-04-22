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

// src/data-access/config/connect-to-db.ts
var connect_to_db_exports = {};
__export(connect_to_db_exports, {
  connectDb: () => connectDb
});
module.exports = __toCommonJS(connect_to_db_exports);
var import_mongoose = __toESM(require("mongoose"));
var connectDb = () => {
  import_mongoose.default.connect(
    process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/new_collection",
    {}
  ).then((res) => {
    console.log("mongodb connected successfully");
  }).catch((err) => {
    console.log(err, "-->");
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectDb
});
//# sourceMappingURL=connect-to-db.js.map