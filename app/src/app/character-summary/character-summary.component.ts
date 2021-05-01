import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../models/Character';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {
  @Input() character: Character | null = null;
  @Output() edit = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

}
