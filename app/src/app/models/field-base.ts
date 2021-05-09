export class FieldBase<T>{
    name:string;
    //value:T | null;

    constructor(options: {
         name: string;
         //value?: T;
    }) {

        this.name = options.name;
    }
}