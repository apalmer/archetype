import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

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
  form: FormGroup;

  constructor(
    private characterService:CharacterService,
    private editorFormService:EditorFormService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let characterId: string = this.route.snapshot.paramMap.get('characterId');
    console.log(characterId);
    if(characterId){
    this.characterService.getCharacter(characterId).subscribe(
      character => {
        this.character = character.data();
        this.form = this.editorFormService.convertToForm(this.character);
      });
    }else{
      this.character = this.characterService.newCharacter();
      this.form = this.editorFormService.convertToForm(this.character);
    }
  }

  onSubmit():void{
    
  }
}
