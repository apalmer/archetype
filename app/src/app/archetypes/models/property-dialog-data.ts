import { PropertyNode } from "./property-node";

export interface PropertyDialogData {
    name: string;
    type: string;
    mode?: "property"|"items"
}
