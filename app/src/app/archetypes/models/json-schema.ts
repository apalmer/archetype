export interface JsonSchema {
    // $schema:string;
    // $id:string;
    // title:string;
    // description:string;
    type: "object",
    properties: any,
    // required:string[]
}

export interface JsonSchemaProperty {
    type:string,
    properties?: any
}