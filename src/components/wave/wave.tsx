import React from "react";

import { useCanvas } from "../../hooks/canvas";
import WaveCanvas from "./canvas";

import { CantSelectCanvas } from "../common/canvas/canvas";

const Wave = () => {
  const canvasRef = useCanvas(({ context, canvas }) => {
    window.requestAnimationFrame(() => new WaveCanvas({ context, canvas }));
  }, []);

  return <CantSelectCanvas ref={canvasRef} />;
};

export default Wave;
