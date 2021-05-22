import { Component, Input, OnInit } from '@angular/core';
import { Enemy } from '../classes/enemy';

@Component({
  selector: 'app-enemy-combatant',
  templateUrl: './enemy-combatant.component.html',
  styleUrls: ['./enemy-combatant.component.css']
})
export class EnemyCombatantComponent implements OnInit {
  @Input() enemy:Enemy;

  constructor() { }

  ngOnInit(): void {
  }

}
