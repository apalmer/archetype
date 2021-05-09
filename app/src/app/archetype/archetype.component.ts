import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Archetype } from "../models/archetype";
import { ArchetypeService } from "../services/archetype.service";
import { FieldControlComponent } from "../field-control/field-control.component";
import { FieldHelperService } from "../services/field-helper.service";
import { FieldBase } from '../models/field-base';
import { FieldDialogComponent,DialogData } from "../field-dialog/field-dialog.component";
import { NumberField } from '../models/number-field';
import { StringField } from '../models/string-field';
import { BooleanField } from '../models/boolean-field';
import { ObjectField } from '../models/object-field';

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {
  form: FormGroup | null = null;
  archetype: Archetype | null = null;
  root: ObjectField | null = null;
  //fields: FieldBase<any>[] = [];

  constructor(private route: ActivatedRoute, private service: ArchetypeService, private fieldService: FieldHelperService, private dialog:MatDialog ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const archetypeId = routeParams.get('archetypeId');
    if(archetypeId){ 
      this.service.getArchetype(archetypeId).subscribe( 
        doc => {
          if(doc.exists){
            this.archetype = doc.data();
            //this.fields = this.fieldService.toFields(this.archetype)
          }
        });

    }
    
    if(!this.archetype){
      this.archetype = this.service.newArchetype();
    }

    this.form = this.toFormGroup(this.archetype);

    this.root = new ObjectField({ name: 'root', value: this.archetype.schema.properties});
  }
  
  toFormGroup(archetype: Archetype): FormGroup {
    const group: any = {};
    group.name = new FormControl(archetype.name);
    group.description = new FormControl(archetype.description);
    // const schemaFields: Array<FormControl> = new Array<FormControl>();
    // const keys = Object.keys(archetype.schema?.properties);
    // keys.forEach(key => {
    //   schemaFields.push(new FormControl(key));
    // });
    // group.schemaFields = new FormArray(schemaFields);
    return new FormGroup(group);
  }

  onSubmit(): void {
  }

  // onAddField(): void{

  //   let dialogRef = this.dialog.open(FieldDialogComponent, {
  //     data:{ fieldType:"magic" }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {

  //     let field: FieldBase<any> | null = null;

  //     switch (result) {
  //       case 'String':
  //         field = new StringField();
  //         break;
  //       case 'Number': 
  //         field = new NumberField();
  //         break;
  //       case 'Boolean':
  //         field = new BooleanField();
  //         break;
  //       case 'Object':
  //         field = new ObjectField();
  //         break;
  //       default:
  //         field = new StringField();
  //         break;
  //     }

  //     if(field){
  //       //this.fields.push(field)
  //     }
  //   });

  //}

}
