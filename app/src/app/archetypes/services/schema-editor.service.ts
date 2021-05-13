import { Injectable } from '@angular/core';
import { PropertyNode } from "../models/property-node";
import { JsonSchema, JsonSchemaProperty } from "../models/json-schema";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemaEditorService {
  dataChange: BehaviorSubject<PropertyNode[]> = new BehaviorSubject<PropertyNode[]>([]);

  get data(): PropertyNode[] {
    return this.dataChange.value;
  }

  constructor() { }

  loadFromJsonSchema(schema: JsonSchema | JsonSchemaProperty) {
    let root = this.convertToPropertyNode(schema, 'root');
    let data = [];
    data.push(root);
    this.dataChange.next(data);
  }

  convertToPropertyNode(schema: JsonSchema | JsonSchemaProperty, name: string): PropertyNode {
    let node: PropertyNode = {
      name: name,
      type: schema.type
    }

    if (schema.properties) {
      node.properties = [];
      Object.keys(schema.properties).forEach(key => {
        let child = this.convertToPropertyNode(schema.properties[key], key)
        node.properties.push(child);
      });
    }

    return node;
  }

  addNewProperty(node: PropertyNode, childName: string, childType: string): void {
    const child: PropertyNode = { name: childName, type: childType };

    if (node.type === 'object') {
      if (!node.properties) {
        node.properties = []
      }
      node.properties.push(child);
    }

    let prev = this.data;

    this.dataChange.next([this.data[0]]);
  }
}
