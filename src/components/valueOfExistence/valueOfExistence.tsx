import React from "react";

import { CantSelectCanvas } from "../common/canvas/canvas";

import { useCanvas } from "../../hooks/canvas";

import ValueOfExistenceCanvas from "./canvas";

const ValueOfExistence = () => {
  const canvasRef = useCanvas(({ canvas, context }) => {
    new ValueOfExistenceCanvas({ canvas, context });
  }, []);

  return <CantSelectCanvas ref={canvasRef} />;
};

export default ValueOfExistence;
