import { Point } from './point';

export class Wave {
    color: string;
    stageWidth: number = 0;
    stageHeight: number = 0;
    centerX: number = 0;
    centerY: number = 0;

    point: Point | null = null;
    constructor(color: string) {
        this.color = color;
    }

    resize(stageWidth: number, stageHeight: number) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.init();
    }

    init() {
        this.point = new Point(this.centerX, this.centerY);
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.point !== null) {
            context.beginPath();

            context.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);

            context.fillStyle = this.color;
            context.fill();
            context.closePath();

            this.point.update();
        }
    }
}