import { getOneExample } from "@/data-access/example.repo";

const getOneExampleUseCase = async (exampleId: string) => {
  const data = await getOneExample(exampleId);
  return data;
};

export default getOneExampleUseCase;
