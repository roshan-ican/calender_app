import { type Example } from "@/domain/example/example.schema";
import { exampleModel } from "./models/example.model";

const getExample = async () => {
  const examples = await exampleModel.find();
  return examples;
};

const createExample = async (newExample: Omit<Example, "_id" | "exampleId">) =>
  exampleModel.create(newExample);

const updateExample = async (
  exampleId: string,
  example: Omit<Example, "_id" | "example_id">,
) => {
  const updatedExample = await exampleModel
    .findOneAndUpdate(
      { exampleId },
      {
        $set: {
          exampleName: example.exampleName,
        },
      },
      { new: true },
    )
    .lean();

  return updatedExample;
};

const deleteExample = async (exampleId: string) => {
  const example = await exampleModel
    .deleteOne({
      exampleId,
    })
    .lean();

  return example;
};

const getOneExample = async (exampleId: string) => {
  const example = await exampleModel.findOne({
    exampleId,
  });

  return example;
};

export {
  getExample,
  createExample,
  updateExample,
  deleteExample,
  getOneExample,
};
