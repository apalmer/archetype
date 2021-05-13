import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { ArchetypeService } from '../services/archetype.service';
import { SchemaEditorService } from '../services/schema-editor.service';
import { PropertyNode } from '../models/property-node';
import { of } from 'rxjs';

@Component({
  selector: 'app-archetype-editor',
  templateUrl: './archetype-editor.component.html',
  styleUrls: ['./archetype-editor.component.css']
})
export class ArchetypeEditorComponent implements OnInit {
  treeControl: NestedTreeControl<PropertyNode>;
  dataSource: MatTreeNestedDataSource<PropertyNode>;

  constructor(private archetypeService: ArchetypeService, private schemaService: SchemaEditorService) {
    this.treeControl = new NestedTreeControl<PropertyNode>(this._getChildren);
    this.dataSource = new MatTreeNestedDataSource<PropertyNode>();

    this.schemaService.dataChange.subscribe(
      data => {
        this.dataSource.data = data
      });
  }

  ngOnInit(): void {

    this.archetypeService.getMockArchetype('archetypeId').subscribe(
      archtype => {
        this.schemaService.loadFromJsonSchema(archtype.schema);
      });
  }
   
  private _getChildren = (node: PropertyNode) => of(node.properties);

  hasChild(_: number, node: PropertyNode): Boolean {
    return !!node.properties && node.properties.length > 0;
  }

  nodeIsObject(_: number, node: PropertyNode): Boolean {
    return node.type === 'object'
  }

  addNewItem(node): void {
    this.schemaService.addNewProperty(node, 'shoalin', 'number');

    this.treeControl.expand(node);
  }
}
