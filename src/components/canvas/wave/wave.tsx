import React from "react";

import { useCanvas } from "../../../hooks/canvas";
import moveWave from "./canvas/moveWave";

import { CanSelectCanvas } from "../common/canvas";

const Wave = () => {
  const canvasRef = useCanvas(({ context, canvas }) => {
    window.requestAnimationFrame(() => moveWave({ context, canvas }));
  }, []);

  return <CanSelectCanvas ref={canvasRef} />;
};

export default Wave;
