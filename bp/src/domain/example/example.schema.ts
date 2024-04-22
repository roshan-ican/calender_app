import { type Static, Type } from "@sinclair/typebox";

export const ExampleSchema = Type.Object({
  exampleId: Type.String(),
  exampleName: Type.String(),
  _id: Type.Optional(Type.String()),
});

export type Example = Static<typeof ExampleSchema>;
