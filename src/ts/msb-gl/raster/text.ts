/**
 * Created by michaelbessey on 8/6/16.
 */

import {Vector} from "../../msb-math/index";

import {RasterShape} from "./shape";

export class RasterText extends RasterShape {

    fontStyle: string;

    constructor(public value: string) {

        super();
    }

    doDraw(context: CanvasRenderingContext2D): void {

        context.font = this.fontStyle;

        if (this.fillStyle) {
            context.fillText(this.value, 0, 0);
        }

        if (this.lineWidth > 0) {
            context.strokeText(this.value, 0, 0);
        }
    }

    isHit(v: Vector): boolean {
        return false;
    }
}
