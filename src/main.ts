import { Board } from './Board';
import { LineTool } from './LineTool';
import './style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const board = new Board(ctx);
const lineTool = new LineTool(board);
lineTool.onEnabled();

function mainLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    board.draw();
    lineTool.drawLinePreview();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
