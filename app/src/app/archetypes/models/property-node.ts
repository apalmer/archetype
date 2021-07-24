export interface PropertyNode {
    name: string;
    type: string;
    properties?: PropertyNode[];
    items?: PropertyNode;
}


