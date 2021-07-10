import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Archetype } from 'src/app/models/archetype';
import { ArchetypeService } from "src/app/services/archetype.service";

import { Character } from "../models/character";
import { SchemaFormGroup } from '../models/schema-form-group';
import { CharacterService } from '../services/character.service';
import { EditorFormService } from '../services/editor-form.service';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.css']
})
export class CharacterEditorComponent implements OnInit {
  character: Character;
  archetype: Archetype;
  archetypes: Observable<Archetype[]>;
  form: FormGroup;
  schemaForm: SchemaFormGroup;
  data: SchemaFormGroup;
  canDeleteCharacter: boolean;

  constructor(
    private characterService: CharacterService,
    private archetypeService: ArchetypeService,
    private editorFormService: EditorFormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let characterId: string = this.route.snapshot.paramMap.get('characterId');

    this.archetypes = this.archetypeService.get()


    if (characterId) {
      this.characterService.getCharacter(characterId).subscribe(
        character => {
          let data = character.data();
          data.id = characterId;
          this.onCharacterChange(data);
        });
    }
    else {
      this.onCharacterChange(this.characterService.newCharacter());
    }
  }

  onCharacterChange(character: Character) {
    this.character = character;
    if (this.character.id) {
      this.canDeleteCharacter = true;
    }

    if (this.character.archetypeId) {
      this.onArchetypeChange(this.character.archetypeId);
    }
    else {
      if (this.archetypes) {
        this.archetypes.subscribe(
          archetypes => {
            this.onArchetypeChange(archetypes[0].id);
          }
        )
      }
    }
  }

  onArchetypeChange(archetypeId: string) {
    this.archetypes.subscribe(archetypes => {
      this.archetype = archetypes.find(archetype => archetype.id === archetypeId);
      if (!this.form) {
        this.schemaForm = this.editorFormService.createSchemaFormGroup(this.archetype, this.character);
        this.form = this.schemaForm.control;
      }
      else {
        this.editorFormService.updateSchemaFormGroup(this.schemaForm, this.archetype, this.character);
      }
      this.data = this.schemaForm.getChild('data');
    });
  }

  onSubmit(): void {
    this.character.name = this.form.get('name').value;
    this.character.description = this.form.get('description').value;
    this.character.archetypeId = this.form.get('archetypeId').value;
    this.character.data = this.editorFormService.extractSchemaFormGroupData(this.data);
    this.characterService.save(this.character)
      .then(() => {
        this.router.navigate(['characters'])
      });
  }

  deleteCharacter(): void {
    this.characterService.delete(this.character)
      .then(() => {
        this.router.navigate(['characters'])
      });
  }
}
