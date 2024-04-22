// src/domain/example/use-cases/get-one-example/getone-example.schema.ts
import { Type } from "@sinclair/typebox";
var paramSchema = Type.Object({
  exampleId: Type.String()
});
var getOneExampleSchema = {
  summary: "Get one example schema",
  description: "Get one example schema",
  tags: ["Example"],
  params: paramSchema,
  security: [{}]
};
export {
  getOneExampleSchema
};
//# sourceMappingURL=getone-example.schema.js.map