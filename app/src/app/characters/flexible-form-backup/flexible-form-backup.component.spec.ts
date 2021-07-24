import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleFormBackupComponent } from './flexible-form-backup.component';

describe('FlexibleFormBackupComponent', () => {
  let component: FlexibleFormBackupComponent;
  let fixture: ComponentFixture<FlexibleFormBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleFormBackupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleFormBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
