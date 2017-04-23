/**
 * Created by michaelbessey on 7/18/16.
 */

import {degrees2radians, Vector} from "../../msb-math/index";

export abstract class RasterShape {

    angle: number;
    location: Vector;

    lineWidth: number;
    strokeStyle: string;
    fillStyle: string;

    constructor() {

        this.angle = 0;
        this.location = new Vector(0, 0);

        this.lineWidth = 0;
        this.strokeStyle = "#000000";
    }

    abstract isHit(v: Vector): boolean;

    draw(context: CanvasRenderingContext2D): void {

        context.save();

        context.translate(this.location.x, this.location.y);
        context.rotate(degrees2radians(this.angle));

        context.fillStyle = this.fillStyle;
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;

        this.doDraw(context);

        context.restore();
    }

    protected abstract doDraw(context: CanvasRenderingContext2D): void;
}
