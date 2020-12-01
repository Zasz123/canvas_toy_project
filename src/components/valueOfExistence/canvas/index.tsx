import { normal } from "color-blend";

import { ICanvasCallbackArguments } from "../../../hooks/canvas";
import Mouse from "./mouse";
import Circle from "./circle";

import { IRGBType } from "../../../hooks/canvas";
import { randomNumber } from "../../../utils/randomNumber";

class ValueOfExistenceCanvas {
  static instance: ValueOfExistenceCanvas;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  mouse: Mouse = new Mouse();
  points: Circle[] = [];
  maxPoint: number = 0;

  stageWidth: number = 0;
  stageHeight: number = 0;

  colors: IRGBType[] = [];
  finalColor: IRGBType = { r: 0, g: 0, b: 0, a: 1 };
  opacity: number = 1;
  constructor({ canvas, context }: ICanvasCallbackArguments) {
    ValueOfExistenceCanvas.instance = this;

    this.context = context;
    this.canvas = canvas;

    this.maxPoint = randomNumber({
      max: 10,
      min: 4,
      includeMax: true,
      includeMin: true,
    });

    for (let i = 0; i < this.maxPoint; i++) {
      this.colors.push({
        r: randomNumber({
          max: 255,
          min: 0,
          includeMax: true,
          includeMin: true,
        }),
        g: randomNumber({
          max: 255,
          min: 0,
          includeMax: true,
          includeMin: true,
        }),
        b: randomNumber({
          max: 255,
          min: 0,
          includeMax: true,
          includeMin: true,
        }),
        a: 1,
      });
    }

    window.addEventListener("mousemove", (e: MouseEvent) =>
      this.maxPoint !== this.points.length ? this.mouse.update(e) : null
    );
    window.addEventListener("click", (e: MouseEvent) =>
      this.maxPoint !== this.points.length
        ? this.mouse.newCircle(e, this.colors[this.points.length])
        : null
    );
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

    if (this.opacity < 0) {
      let finalColor: IRGBType = this.colors[0];

      for (let i = 1; i < this.colors.length; i++) {
        finalColor = normal(finalColor, this.colors[i]);
      }

      this.finalColor = finalColor;

      window.requestAnimationFrame(this.finalAnimate.bind(this));
      return;
    }

    this.context.fillStyle = `rgba(0, 0, 0, ${this.opacity + 0.5})`;
    this.context.fillRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.points.length; i++) {
      if (this.points.length === this.maxPoint) {
        this.opacity -= 0.001;
        this.points[i].update(this.opacity);
      }
      this.points[i].draw(this.context);
    }

    window.requestAnimationFrame(this.pointAnimate.bind(this));
  }

  finalAnimate() {
    if (this.opacity < 1) {
      this.opacity += 0.001;
    }

    this.context.fillStyle = `rgba(${this.finalColor.r}, ${this.finalColor.g}, ${this.finalColor.b}, ${this.opacity})`;
    this.context.fillRect(0, 0, this.stageWidth, this.stageHeight);

    window.requestAnimationFrame(this.finalAnimate.bind(this));
  }
}

export default ValueOfExistenceCanvas;
