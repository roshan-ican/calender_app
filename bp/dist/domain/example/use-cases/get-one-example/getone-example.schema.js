"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/domain/example/use-cases/get-one-example/getone-example.schema.ts
var getone_example_schema_exports = {};
__export(getone_example_schema_exports, {
  getOneExampleSchema: () => getOneExampleSchema
});
module.exports = __toCommonJS(getone_example_schema_exports);
var import_typebox = require("@sinclair/typebox");
var paramSchema = import_typebox.Type.Object({
  exampleId: import_typebox.Type.String()
});
var getOneExampleSchema = {
  summary: "Get one example schema",
  description: "Get one example schema",
  tags: ["Example"],
  params: paramSchema,
  security: [{}]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getOneExampleSchema
});
//# sourceMappingURL=getone-example.schema.js.map