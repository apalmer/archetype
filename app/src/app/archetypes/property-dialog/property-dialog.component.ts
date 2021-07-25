import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PropertyNode } from '../models/property-node';
import {  } from "@angular/material/form-field";
import { PropertyDialogData } from '../models/property-dialog-data';

@Component({
  selector: 'app-property-dialog',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.css']
})
export class PropertyDialogComponent implements OnInit {
  schemaTypes:string[] = ['object','string','number','boolean','array'];

  constructor( 
    public dialogRef: MatDialogRef<PropertyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PropertyDialogData
   ){}
  
  ngOnInit(): void {
    if(this.data.mode === 'items'){
      let arrayIndex = this.schemaTypes.indexOf('array');
      this.schemaTypes.splice(arrayIndex,1);
    }
  }
 
  onCancel(): void {
    this.dialogRef.close();
  }
}
