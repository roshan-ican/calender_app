import { createExample } from "@/data-access/example.repo";
import { type createExampleRequestDTO } from "./create-example.schema";
import { AppError } from "@/lib/error-handeling";

const createExampleUseCase = async (newExample: createExampleRequestDTO) => {
  const newExampleCreated = "created";

  if (!newExampleCreated) {
    throw new Error("Error creating example");
  }

  throw new AppError("Error creating example", "Error creating example", 500);
  // const newExampleCreated = await createExample(newExample);

  // if (!newExampleCreated) {
  //   throw new Error("Error creating example");
  // }

  // return newExampleCreated;
};

export default createExampleUseCase;
