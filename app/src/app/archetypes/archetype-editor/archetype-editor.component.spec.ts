import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeEditorComponent } from './archetype-editor.component';

describe('ArchetypeEditorComponent', () => {
  let component: ArchetypeEditorComponent;
  let fixture: ComponentFixture<ArchetypeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
