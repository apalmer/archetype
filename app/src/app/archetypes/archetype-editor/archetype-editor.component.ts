import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { MatDialog } from '@angular/material/dialog';

import { Archetype } from '../../models/archetype';
import { PropertyNode } from '../models/property-node';
import { SchemaEditorService } from '../services/schema-editor.service';
import { ArchetypeService } from '../../services/archetype.service';
import { PropertyDialogComponent } from "../property-dialog/property-dialog.component";

@Component({
  selector: 'app-archetype-editor',
  templateUrl: './archetype-editor.component.html',
  styleUrls: ['./archetype-editor.component.css']
})
export class ArchetypeEditorComponent implements OnInit {
  archetype: Archetype;
  treeControl: NestedTreeControl<PropertyNode>;
  dataSource: MatTreeNestedDataSource<PropertyNode>;

  constructor(
    private archetypeService: ArchetypeService, 
    private schemaService: SchemaEditorService, 
    private dialog: MatDialog, 
    private route: ActivatedRoute
    ) {
    this.treeControl = new NestedTreeControl<PropertyNode>(this._getChildren);
    this.dataSource = new MatTreeNestedDataSource<PropertyNode>();

    this.schemaService.dataChange.subscribe(
      data => {
        this.dataSource.data = data
      });
  }

  ngOnInit(): void {

    let archetypeId: string = this.route.snapshot.paramMap.get('archetypeId');
    console.log(archetypeId);
    if(archetypeId){
    this.archetypeService.getArchetype(archetypeId).subscribe(
      archtype => {
        this.archetype = archtype.data();
        this.schemaService.loadFromJsonSchema(this.archetype.schema);
      });
    }else{
      this.archetype = this.archetypeService.newArchetype();
      this.schemaService.loadFromJsonSchema(this.archetype.schema);
    }
  }

  private _getChildren = (node: PropertyNode) => of(node.properties);

  hasChild(_: number, node: PropertyNode): Boolean {
    return !!node.properties && node.properties.length > 0;
  }

  nodeIsObject(_: number, node: PropertyNode): Boolean {
    return node.type === 'object'
  }

  addNewProperty(node): void {
    const dialogRef = this.dialog.open(PropertyDialogComponent, {
      width: '250px',
      data: { name: '', type: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.schemaService.addNewProperty(node, result.name, result.type);
        this.treeControl.expand(node);
      }
    });
  }

  saveArchetype():void{
    console.log('saving archetype');
    this.archetype.schema = this.schemaService.getJsonSchema(this.dataSource.data);
    this.archetypeService.save(this.archetype); 
  }
}
