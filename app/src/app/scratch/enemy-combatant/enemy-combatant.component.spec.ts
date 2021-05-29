import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyCombatantComponent } from './enemy-combatant.component';

describe('EnemyCombatantComponent', () => {
  let component: EnemyCombatantComponent;
  let fixture: ComponentFixture<EnemyCombatantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyCombatantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyCombatantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
