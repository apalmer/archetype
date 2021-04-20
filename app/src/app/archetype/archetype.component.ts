import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Archetype } from './archetype';
import { ArchetypeDialogComponent, ArchetypeDialogResult } from '../archetype-dialog/archetype-dialog.component';
import { ArchetypeService } from "../services/archetype.service";

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {
  archetypes = this.service.get();

  constructor(private dialog: MatDialog, private service:ArchetypeService) { }

  newArchetype(): void {
    const dialogRef = this.dialog.open(ArchetypeDialogComponent, {
      width: '270px',
      data: {
        archetype: this.service.newArchetype()
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ArchetypeDialogResult) => {
        if (!result) {
          return;
        }
        this.service.add(result.archetype);
      });
  }

  editArchetype(archetype: Archetype): void {
    const dialogRef = this.dialog.open(ArchetypeDialogComponent, {
      width: '270px',
      data: {
        archetype,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: ArchetypeDialogResult) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        this.service.delete(archetype);
      } else {
        this.service.update(archetype);
      }
    });
  }

  ngOnInit(): void {
  }

}
