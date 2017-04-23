/**
 * Created by besseym on 8/8/16.
 */

import {Vector} from "../msb-math";

export class NatureWave {

    location: Vector;

    lineWidth: number;
    strokeStyle: string;

    increment: number;
    aVelocity: number;

    private _startAngle: number;

    constructor(public amplitude = 100.0, public period = 100){

        this.location = new Vector();

        this.lineWidth = 30;

        this.aVelocity = 0.1;
        this.increment = this.period * 0.5;

        this._startAngle = 0.0;
    }

    draw(context: CanvasRenderingContext2D): void {

        context.save();

        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;

        context.translate(this.location.x, this.location.y);

        context.beginPath();

        let angle = this._startAngle;
        this._startAngle += this.aVelocity;

        let y = this.amplitude * Math.sin(angle);
        context.moveTo(0, y);

        angle += this.aVelocity;
        for (let x = this.increment; x <= this.period; x += this.increment) {

            y = this.amplitude * Math.sin(angle);
            context.lineTo(x, y);

            angle += this.aVelocity;
        }

        context.stroke();
        context.closePath();

        context.restore();
    }
}
