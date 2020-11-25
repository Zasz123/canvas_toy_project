import React from "react";

import { useCanvas } from "../../../hooks/canvas";
import { MoveWave } from "./canvas/moveWave";

import { CanSelectCanvas } from "../common/canvas";

const Wave = () => {
  const canvasRef = useCanvas(({ context, canvas }) => {
    window.requestAnimationFrame(() => new MoveWave({ context, canvas }));
  }, []);

  return <CanSelectCanvas ref={canvasRef} />;
};

export default Wave;
