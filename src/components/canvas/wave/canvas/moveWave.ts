import { Wave } from './wave';

import { IMoveWave } from "../interface";

export class MoveWave {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  wave: Wave;
  stageWidth: number = 0;
  stageHeight: number = 0;
  constructor({ context, canvas }: IMoveWave) {
    this.context = context;
    this.canvas = canvas;

    this.wave = new Wave("#330066");

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    // this.context.scale(2, 2);

    this.wave.resize(this.stageWidth, this.stageWidth);
  }

  animate() {
    console.log("dsa");
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.context);

    requestAnimationFrame(this.animate.bind(this));
  }
}