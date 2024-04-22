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
export {
  update_example_usecase_default as default
};
//# sourceMappingURL=update-example.usecase.js.map