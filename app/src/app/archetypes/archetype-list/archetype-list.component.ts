import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

import { Archetype } from "../models/archetype";
import { ArchetypeService } from '../services/archetype.service';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css']
})
export class ArchetypeListComponent implements OnInit {
  archetypes: Observable<Archetype[]> = this.service.get();

  constructor(private router:Router, private service:ArchetypeService ) { 
    
  }

  newArchetype(): void {
    this.router.navigate(['archetypes','create']);
  }

  editArchetype(archetype: Archetype): void {
    this.router.navigate(['archetypes','edit', archetype.id ]);
  }

  ngOnInit(): void {
  }

}
