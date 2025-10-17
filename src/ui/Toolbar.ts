export class Toolbar {
    private toolbarEl: HTMLElement;
    private lineToolBtn!: HTMLButtonElement;
    private selectToolBtn!: HTMLButtonElement;
    private activeToolLabelEl!: HTMLDivElement;

    private listeners: Array<() => void> = [];

    constructor(toolbarElement: HTMLElement) {
        this.toolbarEl = toolbarElement;

        // TODO: usar o ToolManager para gerenciar as ferramentas
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

        this.updateActiveToolLabel('None');
    }

    private updateActiveToolLabel(toolName: string) {
        this.activeToolLabelEl.textContent = `Active Tool: ${toolName}`;
    }

    private handleLineToolClick(ev: MouseEvent) {
        ev.stopPropagation();

        // TODO: melhorar listeners para eventos de outros ferramentas (onToolClicked(toolName) ???)
        this.updateActiveToolLabel('Line');
        this.listeners.forEach((callback) => callback());
    }

    private handleSelectToolClick() {
        console.log('Select tool selected');
    }

    onLineToolButtonClicked(callback: () => void) {
        // TODO: melhorar listeners para eventos de outros ferramentas (onToolClicked(toolName) ???)
        this.listeners.push(callback);
    }
}
