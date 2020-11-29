import Vector from "../../common/canvas/vector";
import App from "./index";

class Circle extends Vector {
  color: string;
  radius: number;
  constructor(x: number, y: number) {
    super({ x, y });

    this.color = "#000000";
    this.radius = 10;
  }

  update() {
    const distance = Math.max(App.instance.mouse.distance(this), 10);
    this.radius = 800 / distance;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

export default Circle;
