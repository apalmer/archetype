import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Archetype } from "../archetype/archetype";

@Component({
  selector: 'app-archetype-dialog',
  templateUrl: './archetype-dialog.component.html',
  styleUrls: ['./archetype-dialog.component.css']
})
export class ArchetypeDialogComponent implements OnInit {
  private backupArchetype: Partial<Archetype> = { ...this.data.archetype }

  constructor(
    public dialogRef: MatDialogRef<ArchetypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArchetypeDialogData
  ) { }

  cancel(): void {
    this.data.archetype.name = this.backupArchetype.name;
    this.data.archetype.description = this.backupArchetype.description;
    this.dialogRef.close(this.data);
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
