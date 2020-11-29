export class Point {
  x;
  y;
  fieldY;
  speed;
  cur;
  max;
  constructor(index: number, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.01;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;

    this.y = this.fieldY + Math.sin(this.cur) * this.max;
  }
}
