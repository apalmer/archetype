import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from '../models/character';
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorFormService {

  constructor() { }

  convertToForm(character: Character): FormGroup {
    let group = new FormGroup({
      'name': new FormControl(character.name),
      'description': new FormControl(character.description)
    });
    
    return group;
  }
}
