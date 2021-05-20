import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';
import { CharacterEditorComponent } from './character-editor/character-editor.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterSummaryComponent,
    CharacterEditorComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
