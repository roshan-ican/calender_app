// src/domain/example/example.schema.ts
import { Type } from "@sinclair/typebox";
var ExampleSchema = Type.Object({
  exampleId: Type.String(),
  exampleName: Type.String(),
  _id: Type.Optional(Type.String())
});
export {
  ExampleSchema
};
//# sourceMappingURL=example.schema.js.map