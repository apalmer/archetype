import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';

import { Archetype } from '../models/darchetype';
import { JsonSchema } from '../models/json-schema';

@Injectable({
  providedIn: 'root'
})
export class ArchetypeService {

  get() {
    return this.store.collection('archetypes').valueChanges({ idField: 'id' }) as Observable<Archetype[]>;
  }

  getArchetype(archetypeId:string) {
    return this.store.collection('archetypes').doc(archetypeId).get()  as Observable<DocumentSnapshot<Archetype>>;
  }

  newArchetype(): Archetype {
    return { name: '', description: '', schema: this.newSchema() };
  }

  newSchema(): JsonSchema {
    return { properties : {}};
  }

  add(archetype: Archetype) {
    return this.store.collection('archetypes').add(archetype);
  }

  delete(archetype: Archetype) {
    return this.store.collection('archetypes').doc(archetype.id).delete();
  }

  update(archetype: Archetype) {
    return this.store.collection('archetypes').doc(archetype.id).update(archetype);
  }

  constructor(private store: AngularFirestore) { }
}
