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
var createExample = async (newExample) => exampleModel.create(newExample);
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
var deleteExample = async (exampleId) => {
  const example = await exampleModel.deleteOne({
    exampleId
  }).lean();
  return example;
};
var getOneExample = async (exampleId) => {
  const example = await exampleModel.findOne({
    exampleId
  });
  return example;
};
export {
  createExample,
  deleteExample,
  getExample,
  getOneExample,
  updateExample
};
//# sourceMappingURL=example.repo.js.map