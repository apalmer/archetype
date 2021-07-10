import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, flatMap, mergeMap} from 'rxjs/operators';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Character } from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  //really to be 100% correct should never use this
  //we really cant tell when this has resolved
  //because it is asynchronous
  //currrently using it to avoid complexities with promises
  userId;
  user_id:Observable<string>;

  constructor(private store: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
        if(user){
          this.userId = user.uid
        }
      })

    this.user_id = this.afAuth.authState.pipe(map(user => user.uid));
   }

  get() : Observable<Character[]> {
    return this.user_id.pipe(mergeMap(user_id =>{
      return this.store.collection('characters', ref => ref.where('user_id', '==', user_id)).valueChanges({ idField: 'id' }) as Observable<Character[]>;
    }));
  }

  getAll() : Observable<Character[]> {
    return this.store.collection('characters').valueChanges({ idField: 'id' }) as Observable<Character[]>;
  }

  getCharacter(characterId:string) : Observable<DocumentSnapshot<Character>> {
    return this.store.collection('characters').doc(characterId).get()  as Observable<DocumentSnapshot<Character>>;
  }
  
  newCharacter(): Character {
    return { 
      name:'',
      user_id: this.userId, 
      description:'', 
      archetypeId:'', 
      data: {} 
    };
  }

  add(character: Character) : Promise<DocumentReference<Character>>{
    if(!character.user_id){
      character.user_id = this.userId
    }
    return this.store.collection('characters').add(character) as Promise<DocumentReference<Character>>;
  }

  delete(character: Character) : Promise<void> {
    return this.store.collection('characters').doc(character.id).delete();
  }

  update(character: Character) : Promise<void> {
    if(!character.user_id){
      character.user_id = this.userId
    }

    return this.store.collection('characters').doc(character.id).update(character);
  }
  
  save(character: Character) : Promise<unknown> {
    if(!character.user_id){
      character.user_id = this.userId
    }

    return character.id ? this.update(character) : this.add(character);
  }
  
}
