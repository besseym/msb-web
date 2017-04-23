
import {Vector} from "../../msb-math/index";

import {RasterShape} from "./shape";

export class RasterTriangle extends RasterShape {

    private _hWidth: number;
    private _hHeight: number;

    constructor(w = 50, h = 50) {

        super();

        this.width = w;
        this.height = h;
    }

    doDraw(context: CanvasRenderingContext2D): void {

        context.beginPath();
        context.moveTo(-this._hWidth, this._hHeight);
        context.lineTo(0, -this._hHeight);
        context.lineTo(this._hWidth, this._hHeight);
        context.closePath();

        if (this.fillStyle) {
            context.fill();
        }

        if (this.lineWidth > 0) {
            context.stroke();
        }
    }

    isHit(v: Vector): boolean {

        return false;
    }

    set width(w: number) {
        this._hWidth = w * 0.5;
    }

    set height(h: number) {
        this._hHeight = h * 0.5;
    }
}
