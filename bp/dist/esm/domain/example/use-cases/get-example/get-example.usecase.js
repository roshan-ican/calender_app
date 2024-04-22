// src/data-access/models/example.model.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
var exampleSchema = new mongoose.Schema({
  exampleId: { type: String, default: uuidv4() },
  exampleName: { type: String, required: false }
});
var exampleModel = mongoose.model("example", exampleSchema);

// src/data-access/example.repo.ts
var getExample = async () => {
  const examples = await exampleModel.find();
  return examples;
};

// src/domain/example/use-cases/get-example/get-example.usecase.ts
var getExampleUseCase = async () => {
  const getAllExample = await getExample();
  return getAllExample;
};
var get_example_usecase_default = getExampleUseCase;
export {
  get_example_usecase_default as default
};
//# sourceMappingURL=get-example.usecase.js.map