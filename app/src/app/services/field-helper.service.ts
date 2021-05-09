import { Injectable } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { Archetype } from '../models/darchetype';
import { FieldBase } from '../models/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldHelperService {

  constructor() { }

  // toFields(archetype: Archetype): FieldBase<any>[] {
  //   let fields:FieldBase<any>[] = []
  //   Object.keys(archetype.schema.properties).forEach(key => {
  //     fields.push(new FieldBase<any>({name:''}))
  //   });
  //   return fields
  // }
}
