import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Archetype } from '../archetype/archetype';

@Injectable({
  providedIn: 'root'
})
export class ArchetypeService {

  get() {
    return this.store.collection('archetypes').valueChanges({ idField: 'id' }) as Observable<Archetype[]>;
  }

  newArchetype(): Archetype {
    return { name: '', description: '', schema: new Array<string>() };
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
