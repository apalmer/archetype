import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { SchemaFormArray, SchemaFormGroup, SchemaPropertyControl } from '../models/schema-form-group';

@Component({
  selector: 'app-flexible-form',
  templateUrl: './flexible-form.component.html',
  styleUrls: ['./flexible-form.component.css']
})
export class FlexibleFormComponent implements OnInit {
  @Input() schemaPropertyFormGroup: SchemaFormGroup
  @Input() schemaPropertyControl: SchemaPropertyControl;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  getControlType(dataType:string){
    return (dataType === "number") ? "number":"text"
  }

  addArrayItem(schemaPropertyControl:SchemaFormArray){
    let schemaPropertyFormArray = schemaPropertyControl;
    schemaPropertyControl.addNewItem();
  }
}
