import { type FastifySchema } from "fastify";

export const getExampleSchema: FastifySchema = {
  summary: "Get all products",
  tags: ["Example"],
  security: [{}],
  response: {},
} satisfies FastifySchema;
