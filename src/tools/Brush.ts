import Tool from './Tool';

export default class Brush extends Tool {
	mouseDown: boolean;
	constructor(canvas: HTMLCanvasElement) {
		super(canvas);
		this.listen();
		this.mouseDown = false;
	}

	listen() {
		this.canvas.onmousemove = this.onMouseMove.bind(this);
		this.canvas.onmousedown = this.onMouseDown.bind(this);
		this.canvas.onmouseup = this.onMouseUp.bind(this);
	}

	onMouseUp() {
		this.mouseDown = false;
	}
	onMouseDown(e: any) {
		console.log(e.target?.offsetTop);
		this.mouseDown = true;
		this.ctx?.beginPath();
		this.ctx?.moveTo(
			e.pageX - e.target.offsetLeft,
			e.pageY - e.target.offsetTop
		);
	}
	onMouseMove(e: any) {
		if (this.mouseDown) {
			this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
		}
	}

	draw(x: number, y: number) {
		this.ctx?.lineTo(x, y);
		this.ctx?.stroke();
	}
}
