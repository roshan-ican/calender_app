import { Type } from "@sinclair/typebox";
import { type FastifySchema } from "fastify";
// import { ExampleSchema } from "@/domain/example/example.schema";

export const ParamSchema = Type.Object({
  exampleId: Type.String(),
});

export const deleteExampleSchema = {
  summary: "Delete example schema",
  tags: ["Example"],
  security: [{}],
  params: ParamSchema,
  // response: {
  //   200: ExampleSchema,
  // },
} satisfies FastifySchema;
