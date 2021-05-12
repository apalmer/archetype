import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AngularFirestore, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

import { ArchetypeListComponent } from './archetype-list.component';

const AngularFirestoreMocks = {
  collection: (path:string) => {
    return {
      valueChanges: (options:{ idField:string }) => {}
    }
  }
};


describe('ArchetypeListComponent', () => {
  let component: ArchetypeListComponent;
  let fixture: ComponentFixture<ArchetypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers:[
        { provide: AngularFirestore, useValue: AngularFirestoreMocks }
      ],
      declarations: [ ArchetypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
