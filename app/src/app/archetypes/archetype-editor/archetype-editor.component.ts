import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from "@angular/material/tree";

export class PropertyNode {
  name: string;
  type: string;
  properties?: PropertyNode[]
}

const TREE_DATA: PropertyNode[] = [{
  name: 'root',
  type: 'object',
  properties: [
    {
      name: 'one',
      type: 'string'
    },
    {
      name: 'two',
      type: 'number'
    },
    {
      name: 'three',
      type: 'object',
      properties: [
        {
          name: 'four',
          type: 'string'
        }
      ]
    },
    {
      name: 'four',
      type: 'object'
    }
  ]
}]

@Component({
  selector: 'app-archetype-editor',
  templateUrl: './archetype-editor.component.html',
  styleUrls: ['./archetype-editor.component.css']
})
export class ArchetypeEditorComponent implements OnInit {
  treeControl = new NestedTreeControl<PropertyNode>(node => node.properties);
  dataSource = new MatTreeNestedDataSource<PropertyNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild(_: number, node: PropertyNode): Boolean {
    return !!node.properties && node.properties.length > 0;
  }

  nodeIsObject(_: number, node: PropertyNode): Boolean {
    return node.type === 'object'
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node) {
    let child:PropertyNode = new PropertyNode();
    child.name = 'wutang'
    node.properties.push(child)
    console.log(node.properties.length)
    this.dataSource.data = []
  }
}
