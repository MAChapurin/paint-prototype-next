import { makeAutoObservable } from 'mobx';

class CanvasState {
	canvas = null;

	constructor() {
		makeAutoObservable(this);
	}

	setCanvas() {
		// this.canvas = canvas;
	}
}

export default new CanvasState();
