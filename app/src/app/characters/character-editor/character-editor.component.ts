import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Archetype } from 'src/app/models/archetype';
import { ArchetypeService } from "src/app/services/archetype.service";

import { Character } from "../models/character";
import { CharacterService } from '../services/character.service';
import { EditorFormService } from '../services/editor-form.service';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.css']
})
export class CharacterEditorComponent implements OnInit {
  character: Character;
  archetype: Observable<Archetype>;
  archetypes: Observable<Archetype[]>;
  form: FormGroup;

  constructor(
    private characterService: CharacterService,
    private archetypeService: ArchetypeService,
    private editorFormService: EditorFormService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let characterId: string = this.route.snapshot.paramMap.get('characterId');

    this.archetypes = this.archetypeService.get();

    

    console.log(characterId);
    if (characterId) {
      this.characterService.getCharacter(characterId).pipe().

      this.characterService.getCharacter(characterId).subscribe(
        character => {
          this.character = character.data();
          this.archetypeService.getArchetype(this.character.archetypeId).subscribe(
            archetype => {
              this.archetype = of(archetype.data());
              this.archetype.subscribe(
                archetype => {
                  this.form = this.editorFormService.convertToForm(archetype, this.character);
                }
              )
            }
          )
        });
    } 
    else {
      this.character = this.characterService.newCharacter();
      this.archetypes.subscribe( 
        archetypes =>{
          this.archetype = of(archetypes[0]);
          this.archetype.subscribe(
            archetype => {
              this.form = this.editorFormService.convertToForm(archetype, this.character);
            }
          )
        }
      )
      
    }
  }

  onSubmit(): void {
    this.character.name = this.form.get('name').value;
    this.character.description = this.form.get('description').value;
    this.character.archetypeId =  this.form.get('archetype').value;
    this.character.data = this.editorFormService.extractSchemaData(this.form);
    this.characterService.save(this.character);
  }
}
