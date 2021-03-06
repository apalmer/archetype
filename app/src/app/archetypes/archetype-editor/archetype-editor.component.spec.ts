import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { ArchetypeEditorComponent } from './archetype-editor.component';

const AngularFirestoreMocks = {
  collection: (path:string) => {
    return {
      valueChanges: (options:{ idField:string }) => {}
    }
  }
};

const MatDialogMocks = {
}


describe('ArchetypeEditorComponent', () => {
  let component: ArchetypeEditorComponent;
  let fixture: ComponentFixture<ArchetypeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([])
      ],
      providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks },
        { provide: MatDialog, useValue: MatDialogMocks}
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
