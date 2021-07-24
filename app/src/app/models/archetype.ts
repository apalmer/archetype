import { JsonSchema } from "./json-schema";
export interface Archetype {
    id?: string;
    name: string;
    description: string;
    schema: JsonSchema;
  }
