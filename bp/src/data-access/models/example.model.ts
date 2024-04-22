import mongoose from "mongoose";
import { type Example } from "@/domain/example/example.schema";
import { v4 as uuidv4 } from "uuid";

// Define the example schema
const exampleSchema = new mongoose.Schema<Example>({
  exampleId: { type: String, default: uuidv4() },
  exampleName: { type: String, required: false },
});

export const exampleModel = mongoose.model<Example>("example", exampleSchema);
