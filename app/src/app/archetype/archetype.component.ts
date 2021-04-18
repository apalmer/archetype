import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

import { Archetype } from './archetype';
import { ArchetypeDialogComponent, ArchetypeDialogResult } from '../archetype-dialog/archetype-dialog.component';

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {
  archetypes = this.store.collection('archetypes').valueChanges({ idField: 'id' }) as Observable<Archetype[]>;

  constructor(private dialog: MatDialog, private store: AngularFirestore) { }

  newArchetype(): void {
    const dialogRef = this.dialog.open(ArchetypeDialogComponent, {
      width: '270px',
      data: {
        archetype: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ArchetypeDialogResult) => {
        if (!result) {
          return;
        }

        this.store.collection('archetypes').add(result.archetype)
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
        this.store.collection('archetypes').doc(archetype.id).delete();
      } else {
        this.store.collection('archetypes').doc(archetype.id).update(archetype);
      }
    });
  }

  ngOnInit(): void {
  }

}
