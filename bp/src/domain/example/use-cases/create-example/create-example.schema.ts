import { type FastifySchema } from "fastify";
import { type Static, Type } from "@sinclair/typebox";

import { ExampleSchema } from "@/domain/example/example.schema";

export const createExampleRequest = Type.Omit(ExampleSchema, [
  "_id",
  "exampleId",
]);

export type createExampleRequestDTO = Static<typeof createExampleRequest>;

export const createExampleSchema = {
  summary: "Create example schema",
  tags: ["Example"],
  description: "Create example schema",
  security: [{}],
  body: createExampleRequest,
  response: {
    200: ExampleSchema,
  },
} satisfies FastifySchema;
