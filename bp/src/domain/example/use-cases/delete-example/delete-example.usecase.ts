import { deleteExample } from "@/data-access/example.repo";

const deleteExampleUseCase = async (exampleId: string) => {
  const data = await deleteExample(exampleId);
  return data;
};

export default deleteExampleUseCase;
