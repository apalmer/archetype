import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Character } from '../models/character';
import { fromEventPattern, Observable, of } from 'rxjs';
import { JsonSchema } from 'src/app/models/json-schema';
import { Archetype } from 'src/app/models/archetype';
import { SchemaFormGroup } from '../models/schema-form-group';

@Injectable({
  providedIn: 'root'
})
export class EditorFormService {

  constructor() { }

  createSchemaFormGroup(archetype: Archetype, character: Character):SchemaFormGroup {

    let wrapperSchema = { 
      properties: {
        name: { type:'string'},
        description: {type:'string'},
        archetypeId: {type:'string'},
        data: archetype.schema
      }
    };

    let schemaFormGroup = new SchemaFormGroup('root', wrapperSchema, character );

    return schemaFormGroup;
  }

  updateSchemaFormGroup(schemaForm: SchemaFormGroup, archetype: Archetype, character: Character) {
    //let dataForm = new SchemaFormGroup('data',archetype.schema,character.data);
    schemaForm.update('data',archetype.schema,character.data);
  }

  extractSchemaFormGroupData(schemaForm: SchemaFormGroup): any {
    return schemaForm.getData();
  }
}
