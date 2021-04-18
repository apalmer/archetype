import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeDialogComponent } from './archetype-dialog.component';

describe('ArchetypeDialogComponent', () => {
  let component: ArchetypeDialogComponent;
  let fixture: ComponentFixture<ArchetypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchetypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchetypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
