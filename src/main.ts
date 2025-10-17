import './style.css';

import { Board } from './Board';
import { LineTool } from './LineTool';
import { Toolbar } from './ui/Toolbar';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const toolbarEl = document.getElementById('toolbar') as HTMLElement;
const ctx = canvas.getContext('2d')!;

const board = new Board(ctx);
const lineTool = new LineTool(board);

const toolbar = new Toolbar(toolbarEl);
toolbar.onLineToolButtonClicked(() => {
    lineTool.onEnabled();
    canvas.style.cursor = 'crosshair';
});

function mainLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    lineTool.drawLinePreview();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
