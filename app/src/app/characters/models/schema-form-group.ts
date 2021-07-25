import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { JsonSchemaProperty } from "src/app/models/json-schema";

export interface SchemaPropertyControl {
    name: string;
    type: string;
    control: AbstractControl;
    getData(): any;
}

export class SchemaPropertyFormControl implements SchemaPropertyControl {
    name: string;
    type: string;
    control: FormControl;

    constructor(name: string, type: string, data) {
        this.name = name;
        this.type = type;
        this.control = new FormControl(data)
    }

    getData() {
        return this.control.value;
    }
}

export class SchemaFormArray implements SchemaPropertyControl {
    name: string;
    type: string;
    control: FormArray;
    controls: SchemaPropertyControl[];
    items: JsonSchemaProperty;

    constructor(name: string, items:JsonSchemaProperty, data:any[]){
        this.name = name;
        this.type = 'array';
        this.items = items;
        this.controls = new Array<SchemaPropertyControl>()
        let children = new Array<AbstractControl>();
        
        if(Array.isArray(data)){ 
            data.forEach((datum,index) => {
                let child: SchemaPropertyControl;
                let itemsType:string = items ? items.type : typeof datum
                let childItems:JsonSchemaProperty = items? items.items : null;
                switch (itemsType) {
                    case "object":
                        child = new SchemaFormGroup(index.toString(), items, datum);
                        break;
                    //Nested Arrays are not supported by firebase
                    //case "array":
                    //    child = new SchemaFormArray(index.toString(), childItems, datum);
                    //    break;
                    case "string":
                    case "number":
                    case "bigint":
                    case "boolean":
                    case "symbol":
                        child = new SchemaPropertyFormControl(index.toString(), itemsType, datum);
                        break;
                    default:
                        break;
                }
                this.controls.push(child);
                children.push(child.control);
            });
        }

        this.control = new FormArray(children);
    }

    getData(){
        return this.control.value;
    }

    registerChild(child : SchemaPropertyControl){
        this.control.push(child.control);
        this.controls.push(child);
    }
    
    addNewItem(){
        let newItem = this.convertSchemaPropertyControl(this.items)
        this.registerChild(newItem);
    }

    convertSchemaPropertyControl(items:JsonSchemaProperty):SchemaPropertyControl{
        let child: SchemaPropertyControl;
        let itemsType:string = items.type;
        let childItems:JsonSchemaProperty = items? items.items : null;
        let itemName = this.name + "_item_" + this.controls.length.toString();

        switch (itemsType) {
            case "object":
                child = new SchemaFormGroup(itemName, items, {});
                break;
            //Nested Array are not supported by firebase
            //case "array":
            //    child = new SchemaFormArray(itemName, childItems, []);
            //    break;
            case "string":
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
                child = new SchemaPropertyFormControl(itemName, itemsType, '');
                break;
            default:
                break;
        }
        return child;
    }
    
}

export class SchemaFormGroup implements SchemaPropertyControl {

    name: string;
    type: string;
    control: FormGroup;
    controls: SchemaPropertyControl[];

    constructor(name: string, schema: any, data: any) {
        this.name = name;
        this.type = 'object';
        this.control = new FormGroup({});
        this.controls = new Array<SchemaPropertyControl>();

        if (schema && schema.properties) {
            Object.keys(schema.properties).forEach(key => {
                let child: SchemaPropertyControl;
                let property: any = schema.properties[key];
                let datum: any = data[key] || '';

                switch (property.type) {
                    case "object":
                        child = new SchemaFormGroup(key, property, datum);
                        break;
                    case "array":
                        child = new SchemaFormArray(key, property.items, datum);
                        break;
                    case "string":
                    case "number":
                    case "bigint":
                    case "boolean":
                    case "symbol":
                        child = new SchemaPropertyFormControl(key, property.type, datum);
                        break;
                    default:
                        break;
                }
                this.registerChild(child);
            });
        }
    }

    getChild(childName: string): SchemaFormGroup {
        let child: SchemaFormGroup = this.controls.find(child => child.name === childName) as SchemaFormGroup;
        return child;
    }

    unregisterChild(childName) {
        let controlsFound = this.controls.find(control => control.name === childName);
        let formsFound = this.control.get(childName);
        if (controlsFound && formsFound) {
            this.control.removeControl(childName);
            let removeIndex = this.controls.indexOf(controlsFound);
            this.controls.splice(removeIndex, 1);
        }
    }

    registerChild(child: SchemaPropertyControl): void {
        this.controls.push(child);
        this.control.addControl(child.name, child.control);
    }

    update(childName: string, schema: any, data: any) {
        let child = new SchemaFormGroup(childName, schema, data);
        this.unregisterChild(childName);
        this.registerChild(child);
    }

    getData(): any {
        let data: any = {};
        this.controls.forEach(control => {
            data[control.name] = control.getData();
        });
        return data;
    }
}
