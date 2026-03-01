import type { Board } from './Board';
import { Line } from './Line';
import type { Point } from './Point';

export class LineTool {
    private start: Point | null = null;
    private end: Point | null = null;
    private board: Board;
    private linePreview = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });

    isEnabled = false;

    constructor(board: Board) {
        this.board = board;
    }

    onEnabled() {
        if (this.isEnabled) return;

        document.addEventListener('click', this.handleClick);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('mousemove', this.handleMouseMove);
        this.start = null;
        this.end = null;
        this.isEnabled = true;
    }

    onDisabled() {
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.start = null;
        this.end = null;
        this.isEnabled = false;
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            this.start = null;
            this.end = null;
        }
    };

    private handleMouseMove = (event: MouseEvent) => {
        if (this.start !== null) {
            this.end = { x: event.offsetX, y: event.offsetY };
            return;
        }
    };

    private handleClick = (event: MouseEvent) => {
        if (this.start === null) {
            this.start = { x: event.offsetX, y: event.offsetY };
            return;
        }
        if (this.end === null) {
            this.end = { x: event.offsetX, y: event.offsetY };
        }
        this.board.addLine(new Line(this.start, this.end));
        this.start = null;
        this.end = null;
    };

    drawLinePreview() {
        if (this.start !== null && this.end !== null) {
            this.linePreview.setStart(this.start);
            this.linePreview.setEnd(this.end);
            this.board.getLineDrawer().draw(this.linePreview);
        }
    }
}
