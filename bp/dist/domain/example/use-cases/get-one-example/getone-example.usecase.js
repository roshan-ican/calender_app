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

// src/domain/example/use-cases/get-one-example/getone-example.usecase.ts
var getone_example_usecase_exports = {};
__export(getone_example_usecase_exports, {
  default: () => getone_example_usecase_default
});
module.exports = __toCommonJS(getone_example_usecase_exports);

// src/data-access/models/example.model.ts
var import_mongoose = __toESM(require("mongoose"));
var import_uuid = require("uuid");
var exampleSchema = new import_mongoose.default.Schema({
  exampleId: { type: String, default: (0, import_uuid.v4)() },
  exampleName: { type: String, required: false }
});
var exampleModel = import_mongoose.default.model("example", exampleSchema);

// src/data-access/example.repo.ts
var getOneExample = async (exampleId) => {
  const example = await exampleModel.findOne({
    exampleId
  });
  return example;
};

// src/domain/example/use-cases/get-one-example/getone-example.usecase.ts
var getOneExampleUseCase = async (exampleId) => {
  const data = await getOneExample(exampleId);
  return data;
};
var getone_example_usecase_default = getOneExampleUseCase;
//# sourceMappingURL=getone-example.usecase.js.map