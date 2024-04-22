// src/data-access/models/example.model.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
var exampleSchema = new mongoose.Schema({
  exampleId: { type: String, default: uuidv4() },
  exampleName: { type: String, required: false }
});
var exampleModel = mongoose.model("example", exampleSchema);

// src/data-access/example.repo.ts
var deleteExample = async (exampleId) => {
  const example = await exampleModel.deleteOne({
    exampleId
  }).lean();
  return example;
};

// src/domain/example/use-cases/delete-example/delete-example.usecase.ts
var deleteExampleUseCase = async (exampleId) => {
  const data = await deleteExample(exampleId);
  return data;
};
var delete_example_usecase_default = deleteExampleUseCase;
export {
  delete_example_usecase_default as default
};
//# sourceMappingURL=delete-example.usecase.js.map