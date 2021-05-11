import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../models/field-base';
import { ObjectField } from '../models/object-field';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldDialogComponent } from '../field-dialog/field-dialog.component';
import { StringField } from '../models/string-field';
import { NumberField } from '../models/number-field';
import { BooleanField } from '../models/boolean-field';
@Component({
  selector: 'app-field-control',
  templateUrl: './field-control.component.html',
  styleUrls: ['./field-control.component.css']
})
export class FieldControlComponent implements OnInit {
  fields: FieldBase<any>[] = []
  @Input() field!: FieldBase<any>;
  @Input() form!: FormGroup;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddField(): void {

    let dialogRef = this.dialog.open(FieldDialogComponent, {
      data: { fieldType: "magic" }
    });

    dialogRef.afterClosed().subscribe(result => {

      let field: FieldBase<any> | null = null;

      switch (result) {
        case 'String':
          field = new StringField('');
          break;
        case 'Number':
          field = new NumberField('');
          break;
        case 'Boolean':
          field = new BooleanField('');
          break;
        case 'Object':
          field = new ObjectField({ name: '' });
          break;
        default:
          field = new StringField('');
          break;
      }

      if (field) {
        this.fields.push(field)
      }
    });

  }
}
