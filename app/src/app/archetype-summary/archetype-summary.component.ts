import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Archetype } from '../models/Archetype';

@Component({
  selector: 'app-archetype-summary',
  templateUrl: './archetype-summary.component.html',
  styleUrls: ['./archetype-summary.component.css']
})
export class ArchetypeSummaryComponent implements OnInit {
  @Input() archetype: Archetype | null = null;
  @Output() edit = new EventEmitter<Archetype>();

  constructor() { }

  ngOnInit(): void {
  }

}
