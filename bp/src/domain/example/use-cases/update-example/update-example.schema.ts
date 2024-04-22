import { type FastifySchema } from "fastify";
import { ExampleSchema } from "@/domain/example/example.schema";
import { type Static, Type } from "@sinclair/typebox";

const paramSchema = Type.Object({
  exampleId: Type.String(),
});

const bodySchema = Type.Partial(Type.Omit(ExampleSchema, ["_id", "exampleId"]));

export type UpdateExampleDTO = Static<typeof bodySchema>;

export const updateExampleSchema = {
  summary: "Update example schema",
  tags: ["Example"],
  description: "Update example schema",
  security: [{}],
  body: bodySchema,
  params: paramSchema,
  response: {
    200: ExampleSchema,
  },
} satisfies FastifySchema;
