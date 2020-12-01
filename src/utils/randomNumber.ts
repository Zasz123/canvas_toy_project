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
