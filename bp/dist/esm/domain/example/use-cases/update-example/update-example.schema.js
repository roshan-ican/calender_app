// src/domain/example/example.schema.ts
import { Type } from "@sinclair/typebox";
var ExampleSchema = Type.Object({
  exampleId: Type.String(),
  exampleName: Type.String(),
  _id: Type.Optional(Type.String())
});

// src/domain/example/use-cases/update-example/update-example.schema.ts
import { Type as Type2 } from "@sinclair/typebox";
var paramSchema = Type2.Object({
  exampleId: Type2.String()
});
var bodySchema = Type2.Partial(Type2.Omit(ExampleSchema, ["_id", "exampleId"]));
var updateExampleSchema = {
  summary: "Update example schema",
  tags: ["Example"],
  description: "Update example schema",
  security: [{}],
  body: bodySchema,
  params: paramSchema,
  response: {
    200: ExampleSchema
  }
};
export {
  updateExampleSchema
};
//# sourceMappingURL=update-example.schema.js.map