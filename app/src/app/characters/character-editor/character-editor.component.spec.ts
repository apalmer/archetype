import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { CharacterEditorComponent } from './character-editor.component';

const AngularFirestoreMocks = {
  collection: (path: string) => {
    return {
      valueChanges: (options: { idField: string }) => { }
    }
  }
};

describe('CharacterEditorComponent', () => {
  let component: CharacterEditorComponent;
  let fixture: ComponentFixture<CharacterEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ], providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks },
      ], 
      declarations: [CharacterEditorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
