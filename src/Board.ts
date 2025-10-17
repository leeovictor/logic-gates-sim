import { Line } from './Line';
import type { Point } from './Point';

export class Board {
    lines: Line[] = [];

    draw(ctx: CanvasRenderingContext2D) {
        for (const line of this.lines) {
            line.draw(ctx);
        }
    }

    createLine(start: Point, end: Point) {
        const line = new Line(start, end);
        this.lines.push(line);
    }
}
