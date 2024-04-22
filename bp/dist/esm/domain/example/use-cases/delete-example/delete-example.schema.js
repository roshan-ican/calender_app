// src/domain/example/use-cases/delete-example/delete-example.schema.ts
import { Type } from "@sinclair/typebox";
var ParamSchema = Type.Object({
  exampleId: Type.String()
});
var deleteExampleSchema = {
  summary: "Delete example schema",
  tags: ["Example"],
  security: [{}],
  params: ParamSchema
  // response: {
  //   200: ExampleSchema,
  // },
};
export {
  ParamSchema,
  deleteExampleSchema
};
//# sourceMappingURL=delete-example.schema.js.map