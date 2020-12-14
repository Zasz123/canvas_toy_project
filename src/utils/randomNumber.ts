import { IRGBType } from "../hooks/canvas";

interface IReturnRandomNumberArgs {
  max: number;
  min: number;
  includeMax: boolean;
  includeMin: boolean;
}

export function randomNumber({
  max,
  min,
  includeMax,
  includeMin,
}: IReturnRandomNumberArgs) {
  return (
    Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) +
    (includeMin ? min : 0)
  );
}

export function randomColor(opacity: number = 1): IRGBType {
  console.log(opacity);
  return {
    r: randomNumber({
      max: 255,
      min: 0,
      includeMax: true,
      includeMin: true,
    }),
    g: randomNumber({
      max: 255,
      min: 0,
      includeMax: true,
      includeMin: true,
    }),
    b: randomNumber({
      max: 255,
      min: 0,
      includeMax: true,
      includeMin: true,
    }),
    a: opacity,
  };
}
