import { makeAutoObservable } from 'mobx';

class ToolsState {
	tool: HTMLCanvasElement | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setTool(tool: HTMLCanvasElement) {
		this.tool = tool;
	}
}

export default new ToolsState();
