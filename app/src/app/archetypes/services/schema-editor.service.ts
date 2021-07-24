import { Injectable } from '@angular/core';
import { PropertyNode } from "../models/property-node";
import { JsonSchema, JsonSchemaProperty } from "../../models/json-schema";
import { BehaviorSubject } from 'rxjs';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

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
    schema = this.convertToCurrentSchemaFormat(schema);
    let root = this.convertToPropertyNode(schema, 'schema');
    let data = [];
    data.push(root);
    this.dataChange.next(data);
  }

  getJsonSchema(nodes: PropertyNode[]): JsonSchema {
    let root = nodes[0];
    let schema: JsonSchema = { type: 'object', properties: {} }
    if (root.properties) {
      root.properties.forEach(propertyNode => {
        schema.properties[propertyNode.name] = this.getJsonSchemaProperty(propertyNode);
      })
    }
    return schema;
  }

  getJsonSchemaProperty(propertyNode: PropertyNode): JsonSchemaProperty {
    let property: JsonSchemaProperty = { type: propertyNode.type };

    if (propertyNode.properties && propertyNode.properties.length > 0) {
      property.properties = {}
      propertyNode.properties.forEach(childNode => {
        property.properties[childNode.name] = this.getJsonSchemaProperty(childNode);
      });
    }
    else if (propertyNode.items) {
      property.items = this.getJsonSchemaProperty(propertyNode.items);
    }

    return property;
  }

  convertToCurrentSchemaFormat(previous: any): JsonSchema {
    let current: JsonSchema;

    if (Array.isArray(previous)) {
      current = { type: 'object', properties: {} }
      previous.forEach(item => {
        current.properties[item] = { type: 'string' }
      });
    } else {
      current = previous;
    }
    return current;
  }

  convertToPropertyNode(schema: JsonSchema | JsonSchemaProperty, name: string): PropertyNode {
    let node: PropertyNode = {
      name: name,
      type: schema.type
    }

    if (schema.type === "object" && schema.properties) {
      node.properties = [];
      Object.keys(schema.properties).forEach(key => {
        let child = this.convertToPropertyNode(schema.properties[key], key)
        node.properties.push(child);
      });
    }
    else if (schema.type === "array" && schema.items) {
      node.items = this.convertToPropertyNode(schema.items, 'items')
    }

    return node;
  }

  defineItem(node: PropertyNode, childType: string): void {
    const child: PropertyNode = { name: 'items', type: childType };

    if(node.type === 'array'){
      node.items = child;
    }
    
    let next: PropertyNode = { name: this.data[0].name, type: this.data[0].type, properties: this.data[0].properties }
    let data: PropertyNode[] = [];
    data.push(next);
    this.dataChange.next(data);
  }

  addNewProperty(node: PropertyNode, childName: string, childType: string): void {
    const child: PropertyNode = { name: childName, type: childType };

    if (node.type === 'object') {
      if (!node.properties) {
        node.properties = []
      }
      node.properties.push(child);
    }

    let next: PropertyNode = { name: this.data[0].name, type: this.data[0].type, properties: this.data[0].properties }
    let data: PropertyNode[] = [];
    data.push(next);
    this.dataChange.next(data);
  }

  deleteProperty(node: PropertyNode, childNode: PropertyNode) {
    this.recursiveDeleteProperty(node, childNode);

    let next: PropertyNode = { name: this.data[0].name, type: this.data[0].type, properties: this.data[0].properties }
    let data: PropertyNode[] = [];
    data.push(next);
    this.dataChange.next(data);
  }

  recursiveDeleteProperty(node: PropertyNode, childNode: PropertyNode) {
    if (!node.properties && !node.items) { return; }

    if (node.properties) {
      if (node.properties.includes(childNode)) {
        node.properties = node.properties.filter(item => item !== childNode);
      }
      else {
        node.properties.forEach(property => this.deleteProperty(property, childNode));
      }
    }
    
    if(node.items) {
      if(node.items === childNode){
        node.items = null;
      }
      else{
        this.deleteProperty(node.items, childNode)
      }
    }
  }
}
