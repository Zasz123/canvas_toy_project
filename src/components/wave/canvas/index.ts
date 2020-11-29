import { WaveGroup } from "./waveGroup";

import { IMoveWave } from "../interface";

class MoveWave {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  waveGroup: WaveGroup;
  stageWidth: number = 0;
  stageHeight: number = 0;
  constructor({ context, canvas }: IMoveWave) {
    this.context = context;
    this.canvas = canvas;

    this.waveGroup = new WaveGroup();

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.context.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.context);

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default MoveWave;
