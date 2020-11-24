import { IMoveWave } from "../interface";

function moveWave({ context, canvas }: IMoveWave) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  console.log("dsa");

  context.fillStyle = "#89ef8a";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //   window.requestAnimationFrame(() => moveWave({ context, canvas }));
}

export default moveWave;
