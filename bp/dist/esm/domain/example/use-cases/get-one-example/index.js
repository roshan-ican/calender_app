// src/data-access/models/example.model.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
var exampleSchema = new mongoose.Schema({
  exampleId: { type: String, default: uuidv4() },
  exampleName: { type: String, required: false }
});
var exampleModel = mongoose.model("example", exampleSchema);

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

// src/domain/example/use-cases/get-one-example/getone-example.schema.ts
import { Type } from "@sinclair/typebox";
var paramSchema = Type.Object({
  exampleId: Type.String()
});
var getOneExampleSchema = {
  summary: "Get one example schema",
  description: "Get one example schema",
  tags: ["Example"],
  params: paramSchema,
  security: [{}]
};
export {
  getone_example_usecase_default as default,
  getOneExampleSchema
};
//# sourceMappingURL=index.js.map