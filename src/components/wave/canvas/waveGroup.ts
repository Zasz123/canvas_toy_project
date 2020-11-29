import { Wave } from "./wave";

export class WaveGroup {
  totalWaves: number = 0;
  totalPoints: number = 0;
  color: string[] = [];
  waves: Wave[] = [];

  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;

    this.color = [
      "rgba(0, 199, 235, 0.4)",
      "rgba(0, 146, 199, 0.4)",
      "rgba(0, 87, 158, 0.4)",
    ];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth: number, stageHieght: number) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHieght);
    }
  }

  draw(context: CanvasRenderingContext2D) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(context);
    }
  }
}
