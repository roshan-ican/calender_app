// src/data-access/models/example.model.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
var exampleSchema = new mongoose.Schema({
  exampleId: { type: String, default: uuidv4() },
  exampleName: { type: String, required: false }
});
var exampleModel = mongoose.model("example", exampleSchema);

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
import { Type } from "@sinclair/typebox";
var ExampleSchema = Type.Object({
  exampleId: Type.String(),
  exampleName: Type.String(),
  _id: Type.Optional(Type.String())
});

// src/domain/example/use-cases/update-example/update-example.schema.ts
import { Type as Type2 } from "@sinclair/typebox";
var paramSchema = Type2.Object({
  exampleId: Type2.String()
});
var bodySchema = Type2.Partial(Type2.Omit(ExampleSchema, ["_id", "exampleId"]));
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
export {
  update_example_usecase_default as default,
  updateExampleSchema
};
//# sourceMappingURL=index.js.map