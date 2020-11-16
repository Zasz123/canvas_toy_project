import { useEffect, useRef } from "react";

import { ICanvasCallback } from "./interface";

function useCanvas(callback: ICanvasCallback) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    const canvas = canvasRef.current;
    if (!!context && canvas !== null) {
      callback({ context, canvas });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return canvasRef;
}

export default useCanvas;
