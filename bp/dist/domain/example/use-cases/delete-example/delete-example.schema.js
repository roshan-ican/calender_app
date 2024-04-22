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

// src/domain/example/use-cases/delete-example/delete-example.schema.ts
var delete_example_schema_exports = {};
__export(delete_example_schema_exports, {
  ParamSchema: () => ParamSchema,
  deleteExampleSchema: () => deleteExampleSchema
});
module.exports = __toCommonJS(delete_example_schema_exports);
var import_typebox = require("@sinclair/typebox");
var ParamSchema = import_typebox.Type.Object({
  exampleId: import_typebox.Type.String()
});
var deleteExampleSchema = {
  summary: "Delete example schema",
  tags: ["Example"],
  security: [{}],
  params: ParamSchema
  // response: {
  //   200: ExampleSchema,
  // },
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParamSchema,
  deleteExampleSchema
});
//# sourceMappingURL=delete-example.schema.js.map