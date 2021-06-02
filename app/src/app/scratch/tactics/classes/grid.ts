import { Cell } from "./cell";

export class Grid extends Array<Array<Cell>>{
    constructor(width: number, height: number) {
        super();

        for (let y = 0; y < height; y++) {
            const row: Cell[] = [];
            for (let x = 0; x < width; x++) {
                const cell: Cell = new Cell();
                cell.x = x;
                cell.y = y;
                row.push(cell);
            }
            this.push(row);
        }
    }
}
