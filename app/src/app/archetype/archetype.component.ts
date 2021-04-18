import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Archetype } from './archetype';

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {
  @Input() archetype: Archetype | null = null;
  @Output() edit = new EventEmitter<Archetype>();

  constructor() { }

  ngOnInit(): void {
  }

}
