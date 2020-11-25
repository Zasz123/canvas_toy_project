import { Point } from "./point";

export class Wave {
  color: string;
  stageWidth: number = 0;
  stageHeight: number = 0;
  centerX: number = 0;
  centerY: number = 0;
  index: number;
  totalPoints: number;
  pointGap: number = 0;

  points: Point[] = [];

  constructor(index: number, totalPoints: number, color: string) {
    this.color = color;
    this.index = index;
    this.totalPoints = totalPoints;
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    context.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      context.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    context.lineTo(prevX, prevY);
    context.lineTo(this.stageWidth, this.stageHeight);
    context.lineTo(this.points[0].x, this.stageHeight);
    context.fill();
    context.closePath();
  }
}
