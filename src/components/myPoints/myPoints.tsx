import React from "react";

import { CantSelectCanvas } from "../common/canvas/canvas";

import { useCanvas } from "../../hooks/canvas";

import MyPointsCanvas from "./canvas";

const MyPoints = () => {
  const canvasRef = useCanvas(({ canvas, context }) => {
    new MyPointsCanvas({ canvas, context });
  }, []);

  return <CantSelectCanvas ref={canvasRef} />;
};

export default MyPoints;
