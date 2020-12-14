import { normal } from "color-blend";

import { ICanvasCallbackArguments } from "../../../hooks/canvas";
import CircleGroup from "./circleGroup";
import Circle from "./circle";

import { IRGBType } from "../../../hooks/canvas";
import { randomNumber } from "../../../utils/randomNumber";

class MyPointsCanvas {
  static instance: MyPointsCanvas;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  points: Circle[] = [];
  circleGroup: CircleGroup;
  maxCircleNumber: number = 0;

  stageWidth: number = 0;
  stageHeight: number = 0;

  finalColor: IRGBType = { r: 0, g: 0, b: 0, a: 1 };
  opacity: number = 1;

  constructor({ canvas, context }: ICanvasCallbackArguments) {
    MyPointsCanvas.instance = this;

    this.context = context;
    this.canvas = canvas;

    this.maxCircleNumber = randomNumber({
      max: 10,
      min: 5,
      includeMax: true,
      includeMin: true,
    });

    this.circleGroup = new CircleGroup(this.maxCircleNumber);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.pointAnimate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
  }

  pointAnimate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.opacity <= 0) {
      let finalColor: IRGBType = this.circleGroup.circles[0].color;

      for (let i = 1; i < this.circleGroup.circles.length; i++) {
        finalColor = normal(finalColor, {
          ...this.circleGroup.circles[i].color,
          a: 1,
        });
      }

      this.finalColor = finalColor;

      window.requestAnimationFrame(this.finalAnimate.bind(this));
      return;
    }

    this.context.fillStyle = `rgba(226, 226, 226, ${this.opacity + 0.5})`;
    this.context.fillRect(0, 0, this.stageWidth, this.stageHeight);

    if (this.circleGroup.circles.length === this.maxCircleNumber) {
      this.opacity = Number((this.opacity - 0.005).toFixed(4));
      this.circleGroup.update(this.opacity);
    }

    this.circleGroup.draw(this.context);

    window.requestAnimationFrame(this.pointAnimate.bind(this));
  }

  finalAnimate() {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
    if (this.opacity < 1) {
      this.opacity = Number((this.opacity + 0.005).toFixed(5));
    }

    this.context.fillStyle = `rgba(${this.finalColor.r}, ${this.finalColor.g}, ${this.finalColor.b}, ${this.opacity})`;
    this.context.fillRect(0, 0, this.stageWidth, this.stageHeight);

    window.requestAnimationFrame(this.finalAnimate.bind(this));
  }
}

export default MyPointsCanvas;
