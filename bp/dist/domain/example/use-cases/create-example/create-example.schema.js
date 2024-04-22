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

// src/domain/example/use-cases/create-example/create-example.schema.ts
var create_example_schema_exports = {};
__export(create_example_schema_exports, {
  createExampleRequest: () => createExampleRequest,
  createExampleSchema: () => createExampleSchema
});
module.exports = __toCommonJS(create_example_schema_exports);
var import_typebox2 = require("@sinclair/typebox");

// src/domain/example/example.schema.ts
var import_typebox = require("@sinclair/typebox");
var ExampleSchema = import_typebox.Type.Object({
  exampleId: import_typebox.Type.String(),
  exampleName: import_typebox.Type.String(),
  _id: import_typebox.Type.Optional(import_typebox.Type.String())
});

// src/domain/example/use-cases/create-example/create-example.schema.ts
var createExampleRequest = import_typebox2.Type.Omit(ExampleSchema, [
  "_id",
  "exampleId"
]);
var createExampleSchema = {
  summary: "Create example schema",
  tags: ["Example"],
  description: "Create example schema",
  security: [{}],
  body: createExampleRequest,
  response: {
    200: ExampleSchema
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createExampleRequest,
  createExampleSchema
});
//# sourceMappingURL=create-example.schema.js.map