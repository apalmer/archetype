import { FieldBase } from "./field-base";

export class BooleanField extends FieldBase<boolean>{
    constructor(name: string) {
        super({ name: name, type: 'boolean' })
    }
}
