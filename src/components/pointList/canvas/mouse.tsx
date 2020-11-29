import Vector from "../../common/canvas/vector";

class Mouse extends Vector {
  constructor() {
    super({ x: 0, y: 0 });
  }

  resize(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    console.log(this.x, this.y);
    context.fillStyle = "#000000";
    context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    context.fill();

    context.closePath();
  }
}

export default Mouse;
