// src/domain/example/use-cases/create-example/create-example.schema.ts
import { Type as Type2 } from "@sinclair/typebox";

// src/domain/example/example.schema.ts
import { Type } from "@sinclair/typebox";
var ExampleSchema = Type.Object({
  exampleId: Type.String(),
  exampleName: Type.String(),
  _id: Type.Optional(Type.String())
});

// src/domain/example/use-cases/create-example/create-example.schema.ts
var createExampleRequest = Type2.Omit(ExampleSchema, [
  "_id",
  "exampleId"
]);
var createExampleSchema = {
  summary: "Create example schema",
  tags: ["Example"],
  description: "Create example schema",
  security: [{}],
  body: createExampleRequest,
  response: {
    200: ExampleSchema
  }
};
export {
  createExampleRequest,
  createExampleSchema
};
//# sourceMappingURL=create-example.schema.js.map