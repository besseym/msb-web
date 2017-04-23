/**
 * Created by michaelbessey on 8/14/16.
 */

import {Vector} from "../msb-math";
import {NatureActor} from "./actor";

const k: number = 0.02;

export class NatureSpring {

    strokeStyle: string;

    minLength: number;
    maxLength: number;

    constructor(public anchor: NatureActor, public length: number) {

        this.minLength = 30;
        this.maxLength = 2 * this.length;
    }

    connect(actor: NatureActor): void{

        let force: Vector = Vector.subtract(actor.location, this.anchor.location),
            displacement = force.magnitude,
            stretch = displacement - this.length;

        force.normalize();

        force.multiply(-1 * k * stretch);

        actor.applyForce(force);
    }

    constrainLength(actor: NatureActor) {

        let direction: Vector = Vector.subtract(actor.location, this.anchor.location),
            displacement = direction.magnitude;

        if (displacement < this.minLength) {

            direction.normalize();
            direction.multiply(this.minLength);
            actor.location = Vector.add(this.anchor.location, direction);
            actor.velocity.multiply(0);
        }
        else if (displacement > this.maxLength) {

            direction.normalize();
            direction.multiply(this.maxLength);
            actor.location = Vector.add(this.anchor.location, direction);
            actor.velocity.multiply(0);
        }
    }

    draw(context: CanvasRenderingContext2D, actor: NatureActor): void {

        context.save();

        context.strokeStyle = this.strokeStyle;

        context.beginPath();
        context.moveTo(this.anchor.location.x, this.anchor.location.y);
        context.lineTo(actor.location.x, actor.location.y);
        context.stroke();
        context.closePath();

        context.restore();

        this.anchor.draw(context);
    }
}
