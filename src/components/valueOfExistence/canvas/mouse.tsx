import ValueOfExistenceCanvas from ".";
import { IRGBType } from "../../../hooks/canvas";
import Vector from "../../common/canvas/vector";
import Circle from "./circle";

class Mouse extends Vector {
  constructor() {
    super({ x: 0, y: 0 });
  }

  newCircle(e: MouseEvent, color: IRGBType) {
    ValueOfExistenceCanvas.instance.points.push(
      new Circle({ position: { x: e.clientX, y: e.clientY }, color })
    );
  }

  update(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}

export default Mouse;
