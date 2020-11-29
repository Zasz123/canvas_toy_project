import React from "react";

import { useCanvas } from "../../hooks/canvas";
import MoveWave from "./canvas";

import { CanSelectCanvas } from "../common/canvas/canvas";

const Wave = () => {
  const canvasRef = useCanvas(({ context, canvas }) => {
    window.requestAnimationFrame(() => new MoveWave({ context, canvas }));
  }, []);

  return <CanSelectCanvas ref={canvasRef} />;
};

export default Wave;
