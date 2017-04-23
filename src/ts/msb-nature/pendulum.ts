/**
 * Created by besseym on 8/12/16.
 */

import {Vector} from "../msb-math";
import {RasterCircle} from "../msb-gl";

import {NatureActor} from "./actor";

const gravity = 0.4;

export class NaturePendulum {

    angle: number;
    aVelocity: number;
    _aAcceleration: number;

    damping: number;

    bob: NatureActor;

    private _strokeStyle: string;

    constructor(public anchor: Vector, public radius: number) {

        this.angle = Math.PI / 4;
        this.aVelocity = 0;
        this._aAcceleration = 0;

        this.damping = 0.9995;

        let circle: RasterCircle = new RasterCircle();
        this.bob = new NatureActor(circle);

        this.updateBobLocation();
    }

    update(){

        this._aAcceleration = (-1 * gravity / this.radius) * Math.sin(this.angle);
        this.aVelocity = this.aVelocity + this._aAcceleration;

        this.angle = this.angle + this.aVelocity;
        this.aVelocity = this.aVelocity * this.damping;

        this.updateBobLocation();
    }

    draw(context: CanvasRenderingContext2D): void {

        context.save();

        context.strokeStyle = this._strokeStyle;

        context.beginPath();
        context.moveTo(this.anchor.x, this.anchor.y);
        context.lineTo(this.bob.location.x, this.bob.location.y);
        context.stroke();
        context.closePath();

        context.restore();

        this.bob.draw(context);
    }

    private updateBobLocation(){

        this.bob.location.setXYRadians(this.angle, this.radius);
        this.bob.location.add(this.anchor);
    }

    set strokeStyle(s: string){

        this._strokeStyle = s;
        this.bob.body.strokeStyle = s;
    }

    set fillStyle(s: string){

        this.bob.body.fillStyle = s;
    }
}
