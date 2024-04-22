import { getExample } from "@/data-access/example.repo"

const getExampleUseCase = async() => {
  const getAllExample = await getExample()
  return getAllExample
}

export default getExampleUseCase
