import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from "../models/Character";
import { Archetype } from "../models/Archetype";
import { ArchetypeService } from '../services/archetype.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {
  form: FormGroup = this.toFormGroup(this.data.character);
  shouldDelete: Boolean = false;
  shouldSave: Boolean = false;
  archetypes: Observable<Archetype[]> = this.archetypeService.get();
  selectedValue: string = 'dog';

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterDialogData,
    private archetypeService: ArchetypeService
  ) {

  }

  get schemaFields(): FormGroup {
    return this.form.get('schemaFields') as FormGroup;
  }

  onSubmit(): void {
    if (this.shouldSave || this.shouldDelete) {
      this.dialogRef.close({ character: this.data.character, delete: this.shouldDelete });
    }
    else {
      this.dialogRef.close();
    }
  }

  onSave(): void {
    this.data.character.name = this.form.get('name')?.value;
    this.data.character.description = this.form.get('description')?.value;
    this.data.character.archetypeId = this.form.get('archetypes')?.value;
    this.data.character.schema = {};
    
    Object.keys(this.schemaFields.controls).forEach(key => {
      this.data.character.schema[key] = this.schemaFields.controls[key].value;
    });

    this.shouldSave = true;
  }

  onCancel(): void {

  }

  onDelete(): void {
    this.shouldDelete = true;
  }

  onChange(){
    const archetypeId = this.form.get('archetypes')?.value;
    this.archetypes.subscribe(archetypes => {
      let archetype = archetypes.find(a => a.id == archetypeId);
      let keys = Object.keys(this.schemaFields.controls);
      keys.forEach(key =>{
        this.schemaFields.removeControl(key);
      });
      if(archetype?.schema.properties != null){
        Object.keys(archetype?.schema.properties).forEach(key => {
          this.schemaFields.addControl(key,new FormControl(''));
        });
      }

    });
  }

  toFormGroup(character: Partial<Character>): FormGroup {
    const group: any = {};
    group.name = new FormControl(character.name);
    group.description = new FormControl(character.description);
    group.archetypes = new FormControl(character.archetypeId);
    const schemaFields:any = {};
    Object.keys(character.schema).forEach(key => {
      schemaFields[key] = new FormControl(character.schema[key]);
    });
    group.schemaFields = new FormGroup(schemaFields);
    return new FormGroup(group);
  }

  ngOnInit(): void {
  }

}

export interface CharacterDialogData {
  character: Partial<Character>;
  enableDelete: boolean;
}

export interface CharacterDialogResult {
  character: Character;
  delete?: boolean;
}
