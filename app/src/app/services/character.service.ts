import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Character } from '../models/dcharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  get() {
    return this.store.collection('characters').valueChanges({ idField: 'id' }) as Observable<Character[]>;
  }

  newCharacter(): Character {
    return { name: '', description: '', archetypeId: '', schema: new Array<string>() };
  }

  add(character: Character) {
    return this.store.collection('characters').add(character);
  }

  delete(character: Character) {
    return this.store.collection('characters').doc(character.id).delete();
  }

  update(character: Character) {
    return this.store.collection('characters').doc(character.id).update(character);
  }

  constructor(private store: AngularFirestore) { }
}
