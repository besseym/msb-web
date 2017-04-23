/**
 * Created by besseym on 8/8/16.
 */

import {Vector} from "../msb-math";
import {RasterShape} from "../msb-gl/raster/shape";

export class NatureOscillator {

    location: Vector;

    angle: Vector;
    velocity: Vector;
    amplitude: Vector;

    body: RasterShape;

    constructor(){

        this.location = new Vector();

        this.angle = new Vector();
        this.velocity = new Vector();
        this.amplitude = new Vector();
    }

    oscillate(){

        this.angle.add(this.velocity);
    }

    draw(context: CanvasRenderingContext2D): void {

        let x: number = Math.sin(this.angle.x) * this.amplitude.x,
            y: number = Math.sin(this.angle.y) * this.amplitude.y;

        this.body.location.x = x;
        this.body.location.y = y;

        context.save();

        context.translate(this.location.x, this.location.y);

        this.body.draw(context);

        context.restore();
    }

}
