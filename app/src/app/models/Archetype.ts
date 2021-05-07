import { JsonSchema } from "./JsonSchema";

export interface Archetype {
    id?: string;
    name: string;
    description: string;
    schema: JsonSchema;
  }