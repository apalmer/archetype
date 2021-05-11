import { FieldBase } from "./field-base";

export class StringField extends FieldBase<string>{
    constructor(name:string){
        super({name:name,type:'string'})
    }

}
