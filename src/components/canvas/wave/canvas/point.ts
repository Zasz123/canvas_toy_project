export class Point {
    x;
    y;
    fieldY;
    speed;
    cur;
    max;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.fieldY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;
    }

    update() {
        this.cur += this.speed;

        this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
}