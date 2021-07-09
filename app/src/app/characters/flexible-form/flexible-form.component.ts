import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { SchemaFormGroup } from '../models/schema-form-group';

@Component({
  selector: 'app-flexible-form',
  templateUrl: './flexible-form.component.html',
  styleUrls: ['./flexible-form.component.css']
})
export class FlexibleFormComponent implements OnInit {
  @Input() schemaFormGroup: SchemaFormGroup;
  
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.schemaFormGroup);
  }

  getControlType(dataType:string){
    return (dataType === "number") ? "number":"text"
  }
}
