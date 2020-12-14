import { ICanvasCallbackArguments } from "../../../hooks/canvas";

class HappyBirthdayCanvas {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  stageWidth: number = 0;
  stageHeight: number = 0;

  constructor({ canvas, context }: ICanvasCallbackArguments) {
    this.context = context;
    this.canvas = canvas;

    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
  }

  animate() {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.stageWidth, this.stageHeight);

    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export default HappyBirthdayCanvas;
