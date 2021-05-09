import { BooleanField } from "./boolean-field";
import { FieldBase } from "./field-base";
import { JsonSchemaProperty } from "./json-schema";
import { NumberField } from "./number-field";
import { StringField } from "./string-field";

export class ObjectField extends FieldBase<object>{
    fields: FieldBase<any>[];

    constructor(options: {
        name: string;
        value?: any;
    }) {
        super({ name: options.name });
        this.fields = [];
        if (options.value) {
            Object.keys(options.value).forEach(key => {
                let property = options.value[key] as JsonSchemaProperty;
                if (property) {
                    let field: FieldBase<any>;
                    switch (property.type) {
                        case "boolean":
                            field = new BooleanField({ name: key });
                            break;
                        case "number":
                            field = new NumberField({ name: key });
                            break;
                        case "string":
                            field = new StringField({ name: key });
                            break;
                        case "object":
                            field = new ObjectField({ name: key });
                            break;
                        case "array":
                        case "null":
                        case "integer":
                        default:
                            //not supported
                            field = new FieldBase<any>({ name: key });
                            break;
                    }
                    this.fields.push(field);
                }
            });
        }
    }
}
