import { FieldBase } from "./field-base";

export class NumberField extends FieldBase<number> {
    constructor(name:string){
        super({name:name,type:'number'})
    }
}
