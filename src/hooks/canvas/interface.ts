export interface ICanvasCallbackArguments {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
}

export type ICanvasCallback = ({
  context,
  canvas,
}: ICanvasCallbackArguments) => void;

export type IRGBType = {
  r: number;
  g: number;
  b: number;
  a: number;
};
