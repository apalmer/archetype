import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { CharacterListComponent } from './character-list.component';

const AngularFirestoreMocks = {
  collection: (path:string) => {
    return {
      valueChanges: (options:{ idField:string }) => {}
    }
  }
};

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks }
      ],
      declarations: [ CharacterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
