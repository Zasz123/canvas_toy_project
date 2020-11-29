import { ICanvasCallbackArguments } from "../../../hooks/canvas/interface";

import Mouse from "./mouse";
import Circle from "./circle";

class PointList {
  static instance: PointList;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  widthCount: number;
  heightCount: number;
  stageWidth: number = 0;
  stageHeight: number = 0;

  shapes: Circle[] = [];
  mouse: Mouse = new Mouse();

  constructor({ context, canvas }: ICanvasCallbackArguments) {
    PointList.instance = this;

    this.canvas = canvas;
    this.context = context;

    this.resize();

    this.widthCount = this.stageWidth / 100;
    this.heightCount = this.stageHeight / 100;

    this.canvas.addEventListener("resize", () => this.resize.bind(this));

    // add mouse event
    this.canvas.addEventListener("mousemove", (e: MouseEvent) =>
      this.mouse.resize(e)
    );

    console.log(this.widthCount);

    const columnWidth = this.stageWidth / this.widthCount;
    const columnHeight = this.stageHeight / this.heightCount;

    for (let h = 0; h < this.heightCount; h++) {
      for (let w = 0; w < this.widthCount; w++) {
        this.shapes.push(new Circle(columnWidth * w, columnHeight * h));
      }
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
  }

  animate() {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].update();
      this.shapes[i].draw(this.context);
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export default PointList;
