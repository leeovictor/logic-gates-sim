import type { Point } from './Point';

export class Line {
    start: Point;
    end: Point;
    color: string;
    strokeWidth: number;
    lineCap: CanvasLineCap = 'round';

    constructor(
        start: Point,
        end: Point,
        color: string = '#000000',
        strokeWidth: number = 4
    ) {
        this.start = start;
        this.end = end;
        this.color = color;
        this.strokeWidth = strokeWidth;
    }

    setColor(color: string) {
        this.color = color;
    }

    setStart(start: Point) {
        this.start = start;
    }

    setEnd(end: Point) {
        this.end = end;
    }
}

export class LineDrawer {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    draw(line: Line) {
        this.ctx.lineWidth = line.strokeWidth;
        this.ctx.strokeStyle = line.color;
        this.ctx.lineCap = line.lineCap;
        this.ctx.beginPath();
        this.ctx.moveTo(line.start.x, line.start.y);
        this.ctx.lineTo(line.end.x, line.end.y);
        this.ctx.stroke();
    }
}
