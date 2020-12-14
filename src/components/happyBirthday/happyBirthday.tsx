import React from "react";

import { useCanvas } from "../../hooks/canvas";
import { CantSelectCanvas } from "../common/canvas/canvas";

import HappyBirthdayCanvas from "./canvas";

const HappyBirthday = () => {
  const canvasRef = useCanvas(({ context, canvas }) => {
    new HappyBirthdayCanvas({ canvas, context });
  }, []);

  return <CantSelectCanvas ref={canvasRef} />;
};

export default HappyBirthday;
