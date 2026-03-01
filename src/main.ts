import './ui/style.css';

import { Board } from './Board';
import { LineTool } from './LineTool';
import { Toolbar, ToolName } from './ui/Toolbar';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const toolbarEl = document.getElementById('toolbar') as HTMLElement;
const ctx = canvas.getContext('2d')!;

const board = new Board(ctx);
const lineTool = new LineTool(board);

const toolbar = new Toolbar(toolbarEl);

toolbar.onToolButtonClicked((toolName: ToolName) => {
    console.log(`Tool button clicked: ${toolName}`);
    switch (toolName) {
        case ToolName.Line:
            lineTool.onEnabled();
            canvas.style.cursor = 'crosshair';
            break;
        case ToolName.Select:
            lineTool.onDisabled();
            canvas.style.cursor = 'default';
            break;
    }
});

function mainLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    lineTool.drawLinePreview();
    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
