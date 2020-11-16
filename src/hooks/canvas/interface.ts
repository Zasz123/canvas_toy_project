export interface ICanvasCallbackArguments {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
}

export type ICanvasCallback = ({
  context,
  canvas,
}: ICanvasCallbackArguments) => void;
