import { updateExample } from "@/data-access/example.repo";
import { type UpdateExampleDTO } from "./update-example.schema";

const updateExampleUseCase = async (
  exampleId: string,
  example: UpdateExampleDTO,
) => {
  const updatedExample = await updateExample(exampleId, example);
  return updatedExample;
};

export default updateExampleUseCase;
