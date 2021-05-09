import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../models/field-base';
import { ObjectField } from '../models/object-field';

@Component({
  selector: 'app-field-control',
  templateUrl: './field-control.component.html',
  styleUrls: ['./field-control.component.css']
})
export class FieldControlComponent implements OnInit {

  @Input() field!: FieldBase<any>;
  @Input() form!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  getType(obj:any){
    if(obj instanceof ObjectField){
      return 'object'
    }
    return 'number'
  }

}
