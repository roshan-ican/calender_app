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

// src/domain/example/use-cases/update-example/index.ts
var update_example_exports = {};
__export(update_example_exports, {
  default: () => update_example_usecase_default,
  updateExampleSchema: () => updateExampleSchema
});
module.exports = __toCommonJS(update_example_exports);

// src/data-access/models/example.model.ts
var import_mongoose = __toESM(require("mongoose"));
var import_uuid = require("uuid");
var exampleSchema = new import_mongoose.default.Schema({
  exampleId: { type: String, default: (0, import_uuid.v4)() },
  exampleName: { type: String, required: false }
});
var exampleModel = import_mongoose.default.model("example", exampleSchema);

// src/data-access/example.repo.ts
var updateExample = async (exampleId, example) => {
  const updatedExample = await exampleModel.findOneAndUpdate(
    { exampleId },
    {
      $set: {
        exampleName: example.exampleName
      }
    },
    { new: true }
  ).lean();
  return updatedExample;
};

// src/domain/example/use-cases/update-example/update-example.usecase.ts
var updateExampleUseCase = async (exampleId, example) => {
  const updatedExample = await updateExample(exampleId, example);
  return updatedExample;
};
var update_example_usecase_default = updateExampleUseCase;

// src/domain/example/example.schema.ts
var import_typebox = require("@sinclair/typebox");
var ExampleSchema = import_typebox.Type.Object({
  exampleId: import_typebox.Type.String(),
  exampleName: import_typebox.Type.String(),
  _id: import_typebox.Type.Optional(import_typebox.Type.String())
});

// src/domain/example/use-cases/update-example/update-example.schema.ts
var import_typebox2 = require("@sinclair/typebox");
var paramSchema = import_typebox2.Type.Object({
  exampleId: import_typebox2.Type.String()
});
var bodySchema = import_typebox2.Type.Partial(import_typebox2.Type.Omit(ExampleSchema, ["_id", "exampleId"]));
var updateExampleSchema = {
  summary: "Update example schema",
  tags: ["Example"],
  description: "Update example schema",
  security: [{}],
  body: bodySchema,
  params: paramSchema,
  response: {
    200: ExampleSchema
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateExampleSchema
});
//# sourceMappingURL=index.js.map