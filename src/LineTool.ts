import type { Board } from './Board';
import { Line } from './Line';
import type { Point } from './Point';

export class LineTool {
    private start: Point | null = null;
    private end: Point | null = null;
    private board: Board;
    private linePreview = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });

    constructor(board: Board) {
        this.board = board;
    }

    onEnabled() {
        document.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.start = null;
            this.end = null;
        }
    }

    onDisabled() {
        this.start = null;
        this.end = null;
        document.removeEventListener('click', this.handleClick.bind(this));
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
        document.removeEventListener(
            'mousemove',
            this.handleMouseMove.bind(this)
        );
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
        this.board.addLine(new Line(this.start, this.end));
        this.start = null;
        this.end = null;
    }

    drawLinePreview() {
        if (this.start !== null && this.end !== null) {
            this.linePreview.setStart(this.start);
            this.linePreview.setEnd(this.end);
            this.board.lineDrawer.draw(this.linePreview);
        }
    }
}
