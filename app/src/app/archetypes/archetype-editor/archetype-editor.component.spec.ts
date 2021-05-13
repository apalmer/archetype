import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { ArchetypeEditorComponent } from './archetype-editor.component';

const AngularFirestoreMocks = {
  collection: (path:string) => {
    return {
      valueChanges: (options:{ idField:string }) => {}
    }
  }
};

describe('ArchetypeEditorComponent', () => {
  let component: ArchetypeEditorComponent;
  let fixture: ComponentFixture<ArchetypeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks }
      ], 
      declarations: [ ArchetypeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchetypeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
