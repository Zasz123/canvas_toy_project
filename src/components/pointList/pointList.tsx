import React from "react";

import PointListCanvas from "./canvas";

import { useCanvas } from "../../hooks/canvas";
import { CantSelectCanvas } from "../common/canvas/canvas";

const PointList = () => {
  const canvasRef = useCanvas(({ canvas, context }) => {
    new PointListCanvas({ context, canvas });
  }, []);

  return <CantSelectCanvas ref={canvasRef} />;
};

export default PointList;
