import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

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
  canDeleteArchetype: boolean;

  constructor(
    private archetypeService: ArchetypeService, 
    private schemaService: SchemaEditorService, 
    private dialog: MatDialog, 
    private route: ActivatedRoute,
    private router: Router
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
        this.archetype.id = archetypeId;
        this.schemaService.loadFromJsonSchema(this.archetype.schema);
        this.canDeleteArchetype = true;
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

  addNewProperty(node:PropertyNode): void {
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

  canDeleteProperty(node:PropertyNode):boolean {
    let root = this.dataSource.data[0];
    return node !== root;
  }

  deleteProperty(node:PropertyNode): void{
    this.schemaService.deleteProperty(this.dataSource.data[0], node);
  }

  saveArchetype():void{
    console.log('saving archetype');
    this.archetype.schema = this.schemaService.getJsonSchema(this.dataSource.data);
    this.archetypeService.save(this.archetype); 
  }

  deleteArchetype():void{
    console.log('deleting archetype');
    this.archetypeService.delete(this.archetype)
      .then(() => {
        this.router.navigate(['archetypes'])
      }); 
  }
}
