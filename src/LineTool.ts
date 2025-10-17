import type { Board } from './Board';
import { Line } from './Line';
import type { Point } from './Point';

export class LineTool {
    private start: Point | null = null;
    private end: Point | null = null;
    private board: Board;
    private linePreview = new Line({ x: 0, y: 0 }, { x: 0, y: 0 }, 'red');

    constructor(board: Board) {
        this.board = board;
    }

    onEnabled() {
        document.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener(
            'contextmenu',
            this.handleContextMenu.bind(this)
        );
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    onDisabled() {
        this.start = null;
        this.end = null;
        document.removeEventListener('click', this.handleClick.bind(this));
        document.removeEventListener(
            'contextmenu',
            this.handleContextMenu.bind(this)
        );
        document.removeEventListener(
            'mousemove',
            this.handleMouseMove.bind(this)
        );
    }

    private handleContextMenu(event: MouseEvent) {
        event.preventDefault();
        this.start = null;
        this.end = null;
    }

    private handleMouseMove(event: MouseEvent) {
        if (this.start !== null) {
            this.end = { x: event.offsetX, y: event.offsetY };
            return;
        }
    }

    private handleClick(event: MouseEvent) {
        if (this.start === null) {
            this.start = { x: event.offsetX, y: event.offsetY };
            return;
        }
        if (this.end === null) {
            this.end = { x: event.offsetX, y: event.offsetY };
        }
        this.board.createLine(this.start, this.end);
        this.start = null;
        this.end = null;
    }

    drawPreview(ctx: CanvasRenderingContext2D) {
        if (this.start !== null && this.end !== null) {
            this.linePreview.setStart(this.start);
            this.linePreview.setEnd(this.end);
            this.linePreview.draw(ctx);
        }
    }
}
