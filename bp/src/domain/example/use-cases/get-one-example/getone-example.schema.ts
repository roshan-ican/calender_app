import { Type } from "@sinclair/typebox";
import { type FastifySchema } from "fastify";

const paramSchema = Type.Object({
  exampleId: Type.String(),
});

export const getOneExampleSchema = {
  summary: "Get one example schema",
  description: "Get one example schema",
  tags: ["Example"],
  params: paramSchema,
  security: [{}],
} satisfies FastifySchema;
