export interface IVectorProps {
  x: number;
  y: number;
}

class Vector {
  x: number = 0;
  y: number = 0;

  constructor({ x, y }: IVectorProps) {
    this.x = x;
    this.y = y;
  }

  distance(otherVector: Vector) {
    // 피타고라스 정리
    // a^2 + b^2 = c^2
    return Math.sqrt(
      Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2)
    );
  }
}

export default Vector;
