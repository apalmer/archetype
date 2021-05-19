import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { Character } from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private store: AngularFirestore) { }

  get() : Observable<Character[]> {
    return this.store.collection('characters').valueChanges({ idField: 'id' }) as Observable<Character[]>;
  }

  getCharacter(characterId:string) : Observable<DocumentSnapshot<Character>> {
    return this.store.collection('characters').doc(characterId).get()  as Observable<DocumentSnapshot<Character>>;
  }
  
  newCharacter(): Character {
    return { name:'', description:'' };
  }

  add(character: Character) : Promise<DocumentReference<Character>>{
    return this.store.collection('characters').add(character) as Promise<DocumentReference<Character>>;
  }

  delete(character: Character) : Promise<void> {
    return this.store.collection('characters').doc(character.id).delete();
  }

  update(character: Character) : Promise<void> {
    return this.store.collection('characters').doc(character.id).update(character);
  }
  
  save(character: Character) : Promise<unknown> {
    return character.id ? this.update(character) : this.add(character);
  }
  
}
