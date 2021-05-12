import { TestBed } from '@angular/core/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { ArchetypeService } from './archetype.service';

const AngularFirestoreMocks = {
};

describe('ArchetypeService', () => {
  let service: ArchetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks }
      ]
    });
    service = TestBed.inject(ArchetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
