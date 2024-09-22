import { MouseEvent } from 'react';
import Tool from './Tool';

export default class Rectangle extends Tool {
	mouseDown: boolean;
	width!: number;
	height!: number;
	startX!: number;
	startY!: number;
	saved: string;
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
		this.mouseDown = true;
		this.ctx?.beginPath();
		this.startX = e.pageX - e.target.offsetLeft;
		this.startY = e.pageY - e.target.offsetTop;
		this.saved = this.canvas.toDataURL();
	}

	onMouseMove(e: any) {
		if (this.mouseDown) {
			const currentX = e.pageX - e.target.offsetLeft;
			const currentY = e.pageY - e.target.offsetTop;
			this.width = currentX - this.startX;
			this.height = currentY - this.startY;
			this.draw(this.startX, this.startY, this.width, this.height);
		}
	}

	draw(x: number, y: number, w: number, h: number) {
		const img = new Image();
		img.src = this.saved;
		img.onload = async () => {
			if (this.ctx) {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
				this.ctx.beginPath();
				this.ctx.rect(x, y, w, h);
				this.ctx.fill();
				this.ctx.stroke();
			}
		};
	}
}
