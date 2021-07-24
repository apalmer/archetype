import { Component, Input, OnInit } from '@angular/core';
import { SchemaFormGroup } from '../models/schema-form-group';

@Component({
  selector: 'app-flexible-form-backup',
  templateUrl: './flexible-form-backup.component.html',
  styleUrls: ['./flexible-form-backup.component.css']
})
export class FlexibleFormBackupComponent implements OnInit {
  @Input() schemaFormGroup: SchemaFormGroup;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  getControlType(dataType:string){
    return (dataType === "number") ? "number":"text"
  }
}
