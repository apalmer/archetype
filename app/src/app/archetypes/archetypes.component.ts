import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { MatDialog } from '@angular/material/dialog';

import { Archetype } from '../models/darchetype';
import { ArchetypeDialogComponent, ArchetypeDialogResult } from '../archetype-dialog/archetype-dialog.component';
import { ArchetypeService } from "../services/archetype.service";

@Component({
  selector: 'app-archetypes',
  templateUrl: './archetypes.component.html',
  styleUrls: ['./archetypes.component.css']
})
export class ArchetypesComponent implements OnInit {
  archetypes = this.service.get();

  constructor(private router:Router, private service:ArchetypeService) { }

  newArchetype(): void {
    this.router.navigate(['/archetype']);
  }

  editArchetype(archetype: Archetype): void {
    this.router.navigate(['/archetype', archetype.id ]);
  }

  ngOnInit(): void {
    
  }

}
