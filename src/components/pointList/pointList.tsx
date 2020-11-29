import React from "react";

import PointListCanvas from "./canvas";

import { useCanvas } from "../../hooks/canvas";
import { CanSelectCanvas } from "../common/canvas/canvas";

const PointList = () => {
  const canvasRef = useCanvas(({ canvas, context }) => {
    new PointListCanvas({ context, canvas });
  }, []);

  return <CanSelectCanvas ref={canvasRef} />;
};

export default PointList;
