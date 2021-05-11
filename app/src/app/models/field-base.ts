export class FieldBase<T>{
    name:string;
    type:string;
    //value:T | null;

    constructor(options: {
         name: string;
         type?: string;
         //value?: T;
    }) {

        this.name = options.name;
        this.type = options.type || 'any'
    }
}