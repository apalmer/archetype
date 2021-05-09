import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Character } from '../models/character';
import { CharacterDialogComponent, CharacterDialogResult } from '../character-dialog/character-dialog.component';
import { CharacterService } from "../services/character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters = this.service.get();

  constructor(private dialog: MatDialog, private service:CharacterService) { }

  newCharacter(): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      width: '270px',
      data: {
        character: this.service.newCharacter()
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: CharacterDialogResult) => {
        if (!result) {
          return;
        }
        this.service.add(result.character);
      });
  }

  editCharacter(character: Character): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      width: '270px',
      data: {
        character,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: CharacterDialogResult) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        this.service.delete(character);
      } else {
        this.service.update(character);
      }
    });
  }

  ngOnInit(): void {
  }

}
