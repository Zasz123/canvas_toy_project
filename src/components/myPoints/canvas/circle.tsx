import Vector, { IVectorProps } from "../../common/canvas/vector";

import { IRGBType } from "../../../hooks/canvas/interface";

interface IProps {
  position: IVectorProps;
  color: IRGBType;
}

class Circle extends Vector {
  color: IRGBType;
  radius: number = 10;
  constructor({ position, color }: IProps) {
    super(position);
    this.color = color;
  }

  update(opacity: number) {
    this.radius += 5;
    this.color.a = opacity;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();

    context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();

    context.closePath();
  }
}

export default Circle;
