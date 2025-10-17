import type { Point } from './Point';

export class Line {
    start: Point;
    end: Point;
    color: string;

    constructor(start: Point, end: Point, color: string = '#000000') {
        this.start = start;
        this.end = end;
        this.color = color;
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

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
}
