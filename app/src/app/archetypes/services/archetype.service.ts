import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { Archetype } from '../models/archetype';
import { JsonSchema } from '../models/json-schema';

@Injectable({
  providedIn: 'root'
})
export class ArchetypeService {

  get() : Observable<Archetype[]> {
    return this.store.collection('archetypes').valueChanges({ idField: 'id' }) as Observable<Archetype[]>;
  }

  getArchetype(archetypeId:string) : Observable<DocumentSnapshot<Archetype>> {
    return this.store.collection('archetypes').doc(archetypeId).get()  as Observable<DocumentSnapshot<Archetype>>;
  }

  getMockArchetype(archetypeId:string) : Observable<Archetype> {

    let mocked:Archetype = {
      id: archetypeId,
      name: 'MockArchetype',
      description: 'MockDescription',
      schema:{
        type:'object',
        properties:{
          alpha:{
            type:'string'
          },
          beta:{
            type:'number'
          },
          gamma:{
            type:'boolean'
          },
          delta:{
            type:'object',
            properties:{
              epsilon:{
                type:'string'
              },
              zeta:{
                type:'number'
              }
            }
          }
        }
      }  
    };

    return of(mocked);
  }

  newArchetype(): Archetype {
    return { name: '', description: '', schema: this.newSchema() };
  }

  newSchema(): JsonSchema {
    return { type:'object', properties : {}};
  }

  add(archetype: Archetype) : Promise<DocumentReference<Archetype>>{
    return this.store.collection('archetypes').add(archetype) as Promise<DocumentReference<Archetype>>;
  }

  delete(archetype: Archetype) : Promise<void> {
    return this.store.collection('archetypes').doc(archetype.id).delete();
  }

  update(archetype: Archetype) : Promise<void> {
    return this.store.collection('archetypes').doc(archetype.id).update(archetype);
  }
  
  save(archetype: Archetype) : Promise<unknown> {
    return archetype.id ? this.update(archetype) : this.add(archetype);
  }

  constructor(private store: AngularFirestore) { }
}