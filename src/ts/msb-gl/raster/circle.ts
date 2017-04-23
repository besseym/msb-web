/**
 * Created by michaelbessey on 8/6/16.
 */

import {Vector} from "../../msb-math/index";
import {RasterShape} from "./shape";

export class RasterCircle extends RasterShape {

    constructor(public radius = 50.0) {
        super();
    }

    doDraw(context: CanvasRenderingContext2D): void {

        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
        context.closePath();

        if (this.fillStyle) {
            context.fill();
        }

        if (this.lineWidth > 0) {
            context.stroke();
        }
    }

    isHit(v: Vector): boolean {

        let subX = v.x - this.location.x, subY = v.y - this.location.y;
        return ((Math.pow(subX, 2) + Math.pow(subY, 2)) < Math.pow(this.radius, 2));
    }
}
