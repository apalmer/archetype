import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Archetype } from "../models/Archetype";

@Component({
  selector: 'app-archetype-dialog',
  templateUrl: './archetype-dialog.component.html',
  styleUrls: ['./archetype-dialog.component.css']
})
export class ArchetypeDialogComponent implements OnInit {
  form: FormGroup = this.toFormGroup(this.data.archetype);
  shouldDelete: Boolean = false;
  shouldSave: Boolean = false;
  private backupArchetype: Partial<Archetype> = { ...this.data.archetype };

  constructor(
    public dialogRef: MatDialogRef<ArchetypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArchetypeDialogData
  ) {

  }

  get schemaFields(): FormArray {
    return this.form.get('schemaFields') as FormArray;
  }

  addSchemaField() {
    this.schemaFields.push(new FormControl(''));
  }

  onSubmit(): void {
    if (this.shouldSave || this.shouldDelete) {
      this.dialogRef.close({ archetype: this.data.archetype, delete: this.shouldDelete });
    }
    else {
      this.dialogRef.close();
    }
  }

  onSave(): void {
    this.data.archetype.name = this.form.get('name')?.value;
    this.data.archetype.description = this.form.get('description')?.value;
    this.data.archetype.schema = new Array<string>();
    this.schemaFields.controls.forEach(control => {
      this.data.archetype.schema?.push(control.value);
    });

    this.shouldSave = true;
  }

  onCancel(): void {
    this.data.archetype.name = this.backupArchetype.name;
    this.data.archetype.description = this.backupArchetype.description;
    if (this.backupArchetype.schema) {
      this.data.archetype.schema = this.backupArchetype.schema;
    }
  }

  onDelete(): void {
    this.shouldDelete = true;
  }

  toFormGroup(archetype: Partial<Archetype>): FormGroup {
    const group: any = {};
    group.name = new FormControl(archetype.name);
    group.description = new FormControl(archetype.description);
    const schemaFields: Array<FormControl> = new Array<FormControl>();
    archetype.schema?.forEach(key => {
      schemaFields.push(new FormControl(key));
    });
    group.schemaFields = new FormArray(schemaFields);
    return new FormGroup(group);
  }

  ngOnInit(): void {
  }

}

export interface ArchetypeDialogData {
  archetype: Partial<Archetype>;
  enableDelete: boolean;
}

export interface ArchetypeDialogResult {
  archetype: Archetype;
  delete?: boolean;
}
