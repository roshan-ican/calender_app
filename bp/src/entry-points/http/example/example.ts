import type {
  FastifyPluginAsyncTypebox,
  TypeBoxTypeProvider,
} from "@fastify/type-provider-typebox";

import getExample from "@/domain/example/use-cases/get-example";
import { getExampleSchema } from "@/domain/example/use-cases/get-example";

import createExample from "@/domain/example/use-cases/create-example";
import { createExampleSchema } from "@/domain/example/use-cases/create-example";

import updateExample from "@/domain/example/use-cases/update-example";
import { updateExampleSchema } from "@/domain/example/use-cases/update-example";

import deleteExample from "@/domain/example/use-cases/delete-example";
import { deleteExampleSchema } from "@/domain/example/use-cases/delete-example";

import getOneExample from "@/domain/example/use-cases/get-one-example";
import { getOneExampleSchema } from "@/domain/example/use-cases/get-one-example";

const example: FastifyPluginAsyncTypebox = async (
  fastify,
  opts,
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()

    .get("/", { schema: getExampleSchema }, async () => {
      const getAllexample = await getExample();
      return getAllexample;
    })

    .post("/", { schema: createExampleSchema }, async (request, reply) => {
      const example = await createExample(request.body);
      return example;
    })

    .put(
      "/:exampleId",
      { schema: updateExampleSchema },
      async (request, reply) => {
        const { exampleId } = request.params;
        const exampleBody = request.body;

        const updatedExample = await updateExample(exampleId, exampleBody);

        if (updatedExample) {
          await reply.code(200).send(updatedExample);
        }
      },
    )

    .delete(
      "/:exampleId",
      { schema: deleteExampleSchema },
      async (request, reply) => {
        const { exampleId } = request.params;
        const example = await deleteExample(exampleId);

        await reply.code(200).send(example);
      },
    )

    .get(
      "/:exampleId",
      { schema: getOneExampleSchema },
      async (request, reply) => {
        const { exampleId } = request.params;
        const example = await getOneExample(exampleId);
        return example;
      },
    );
};

export default example;
