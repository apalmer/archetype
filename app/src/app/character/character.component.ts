import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character | null = null;
  @Output() edit = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

}
