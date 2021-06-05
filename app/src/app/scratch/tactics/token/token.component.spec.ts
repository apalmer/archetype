import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenData } from '../classes/token-data';

import { TokenComponent } from './token.component';

describe('TokenComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    component.data = new TokenData();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
