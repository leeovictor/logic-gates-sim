export enum ToolName {
    Line = 'Line',
    Select = 'Select',
}

export class Toolbar {
    private toolbarEl: HTMLElement;
    private lineToolBtn!: HTMLButtonElement;
    private selectToolBtn!: HTMLButtonElement;
    private activeToolLabelEl!: HTMLDivElement;

    private listeners: Array<(toolName: ToolName) => void> = [];

    constructor(toolbarElement: HTMLElement) {
        this.toolbarEl = toolbarElement;

        this.initialize();
    }

    private initialize() {
        this.lineToolBtn = this.toolbarEl.querySelector(
            '#line-tool'
        ) as HTMLButtonElement;
        this.selectToolBtn = this.toolbarEl.querySelector(
            '#select-tool'
        ) as HTMLButtonElement;
        this.activeToolLabelEl = this.toolbarEl.querySelector(
            '#active-tool-label'
        ) as HTMLDivElement;

        this.lineToolBtn.addEventListener(
            'click',
            this.handleLineToolClick.bind(this)
        );
        this.selectToolBtn.addEventListener(
            'click',
            this.handleSelectToolClick.bind(this)
        );

        this.setActiveToolLabel('None');
    }

    private setActiveToolLabel(toolName: string) {
        this.activeToolLabelEl.textContent = `Active Tool: ${toolName}`;
    }

    private handleLineToolClick(ev: MouseEvent) {
        ev.stopPropagation();
        this.setActiveToolLabel('Line');
        this.notifyListeners(ToolName.Line);
    }

    private handleSelectToolClick(ev: MouseEvent) {
        ev.stopPropagation();
        this.setActiveToolLabel('Select');
        this.notifyListeners(ToolName.Select);
    }

    private notifyListeners(toolName: ToolName) {
        this.listeners.forEach((callback) => callback(toolName));
    }

    onToolButtonClicked(callback: (toolName: ToolName) => void) {
        this.listeners.push(callback);
    }
}
