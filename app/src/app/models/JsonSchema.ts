export interface JsonSchema{
    $schema:string;
    $id:string;
    title:string;
    description:string;
    type: "object" | "array",
    properties: object,
    required:string[]
}