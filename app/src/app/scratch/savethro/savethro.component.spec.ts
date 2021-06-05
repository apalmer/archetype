import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavethroComponent } from './savethro.component';

describe('SavethroComponent', () => {
  let component: SavethroComponent;
  let fixture: ComponentFixture<SavethroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavethroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavethroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
