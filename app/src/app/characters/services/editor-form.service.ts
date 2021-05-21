import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Character } from '../models/character';
import { fromEventPattern, Observable, of } from 'rxjs';
import { JsonSchema } from 'src/app/models/json-schema';
import { Archetype } from 'src/app/models/archetype';

@Injectable({
  providedIn: 'root'
})
export class EditorFormService {

  constructor() { }

  createFormGroup(schema: JsonSchema): FormGroup {
    let form: FormGroup;
    form = new FormGroup({});
    return form;
  }

  populateFormGroup(form: FormGroup, character: Character) {

  }

  extractSchemaData(form: FormGroup): any {
    let data = {};
    return data;
  }

  convertToForm(archetype: Archetype, character: Character): FormGroup {

    let group = new FormGroup({
      name: new FormControl(character.name),
      description: new FormControl(character.description),
      archetype: new FormControl(character.archetypeId),
      data: this.convertPropertyToFormGroup(archetype.schema.properties)
    });

    return group;
  }

  updateForm(form:FormGroup, archetype: Archetype, character: Character){
    form.setControl('data',this.convertPropertyToFormGroup(archetype.schema.properties));
  }

  convertPropertyToFormGroup(properties: any): FormGroup {
    let group = new FormGroup({});

    if (properties) {
      Object.keys(properties).forEach(key => {
        let property: any = properties[key];
        let control: AbstractControl;
        let type = property.type;
        switch (type) {
          case "object":
            control = this.convertPropertyToFormGroup(property.properties);
            break;
          case "string":
          case "number":
          case "bigint":
          case "boolean":
          case "symbol":
            control = new FormControl(property)
            break;
          default:
            break;
        }
        group.addControl(key, control);
      });
    }

    return group;
  }
}
