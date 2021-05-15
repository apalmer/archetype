import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDialogComponent } from './property-dialog.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

const MatDialogRefMocks = {
}
const MAT_DIALOG_DATAMocks = {

}

describe('PropertyDialogComponent', () => {
  let component: PropertyDialogComponent;
  let fixture: ComponentFixture<PropertyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [
        { provide: MatDialogRef, useValue: MatDialogRefMocks },
        { provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATAMocks }
      ],
      declarations: [ PropertyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
