import { Component } from '@angular/core';

import {Observable} from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

import { Archetype } from './archetype/archetype';
import { Character } from './character/character';
import { ArchetypeDialogComponent, ArchetypeDialogResult } from './archetype-dialog/archetype-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'archetype';
  archetypes = this.store.collection('archetypes').valueChanges({ idField: 'id' }) as Observable<Archetype[]>;
  characters : Character[] = [{ name:'char-1'}];
  
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
}
