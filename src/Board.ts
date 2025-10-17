import { Line, LineDrawer } from './Line';

export class Board {
    lines: Line[] = [];
    lineDrawer: LineDrawer;

    constructor(ctx: CanvasRenderingContext2D) {
        this.lineDrawer = new LineDrawer(ctx);
    }

    draw() {
        for (const line of this.lines) {
            this.lineDrawer.draw(line);
        }
    }

    getLineDrawer() {
        return this.lineDrawer;
    }

    addLine(line: Line) {
        this.lines.push(line);
    }
}
