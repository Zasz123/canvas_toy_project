import { randomColor } from "../../../utils/randomNumber";
import Circle from "./circle";

class CircleGroup {
  maxCircleNumber: number;
  circles: Circle[] = [];

  constructor(maxCircleNumber: number) {
    this.maxCircleNumber = maxCircleNumber;

    window.addEventListener("click", (e: MouseEvent) =>
      this.maxCircleNumber !== this.circles.length ? this.newCircle(e) : null
    );
  }

  newCircle(e: MouseEvent) {
    this.circles.push(
      new Circle({
        position: { x: e.clientX, y: e.clientY },
        color: randomColor(),
      })
    );
  }

  update(opacity: number) {
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].update(opacity);
    }
  }

  draw(context: CanvasRenderingContext2D) {
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].draw(context);
    }
  }
}

export default CircleGroup;
