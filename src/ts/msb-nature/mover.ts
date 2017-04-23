/**
 * Created by michaelbessey on 8/6/16.
 */

import {constrain, Container, Vector} from "../msb-math";

// const G: number = 0.0000000000667428;
const G: number = 0.5;

export class NatureMover {

    speedLimit: number;
    angularLimit: number;

    angle: number;
    aVelocity: number;

    location: Vector;
    velocity: Vector;

    damping: number;

    private _aAcceleration: number;
    private _acceleration: Vector;

    constructor(public mass = 1.0) {

        this.location = new Vector(0, 0);
        this.velocity = new Vector(0, 0);
        this._acceleration = new Vector(0, 0);

        this.angle = 0;
        this.aVelocity = 0;
        this._aAcceleration = 0;

        this.speedLimit = 10;
        this.angularLimit = 10;

        this.damping = 1.0;
    }

    update(): void {

        this.velocity.add(this._acceleration);
        this.velocity.multiply(this.damping);
        this.aVelocity = this.aVelocity + this._aAcceleration;

        this.applySpeedLimit();

        this.location.add(this.velocity);
        this.angle = this.angle + this.aVelocity;

        this._acceleration.multiply(0);
        this._aAcceleration = 0;
    }

    applyAngularForce(a: number): void {
        this._aAcceleration = this._aAcceleration + a;
    }

    applyForce(f: Vector): void {
        this._acceleration.add(Vector.divide(f, this.mass));
    }

    applyFriction(c: number): void {

        let friction: Vector = this.velocity.clone();
        friction.normalize();
        friction.multiply(-1);
        friction.multiply(c);
        this.applyForce(friction);
    }

    applyDrag(c: number, p = 1, a = 1): void {

        let drag = this.velocity.clone(),
            speed = drag.magnitude,
            dragMagnitude = -0.5 * p * speed * speed * a * c;

        drag.normalize();
        drag.multiply(dragMagnitude);
        this.applyForce(drag);
    }

    getAttraction(m: NatureMover, minDistance = 5.0, maxDistance = 25.0): Vector {

        let attraction: Vector = Vector.subtract(m.location, this.location),
            distance = attraction.magnitude,
            attractionStrength = 1;

        // console.log(distance);

        if (distance >= minDistance && distance <= maxDistance) {

            attractionStrength = (G * this.mass * m.mass) / (distance * distance);
            // console.log(attractionStrength);

            attraction.normalize();
            attraction.multiply(attractionStrength);

        }
        else {
            attraction.multiply(0);
        }

        return attraction;
    }

    applyRepellent(m: NatureMover, minDistance = 5.0, maxDistance = 25.0){

        let repellent: Vector = this.getAttraction(m, minDistance, maxDistance);
        repellent.multiply(-1);
        this.applyForce(repellent);
    }

    applyAttraction(m: NatureMover, minDistance = 5.0, maxDistance = 25.0){

        let attraction: Vector = this.getAttraction(m, minDistance, maxDistance);
        this.applyForce(attraction);
    }

    applyGravity(g: number): void {

        let gravity: Vector = new Vector(0.0, g);

        gravity.multiply(this.mass);
        this.applyForce(gravity);
    }

    applyPassThrough(container: Container): void {

        if (this.location.x < container.xMin) {
            this.location.x = container.xMax;
        }

        if (this.location.x > container.xMax) {
            this.location.x = container.xMin;
        }

        if (this.location.y < container.yMin) {
            this.location.y = container.yMax;
        }

        if (this.location.y > container.yMax) {
            this.location.y = container.yMin;
        }
    }

    applyBounce(container: Container): void {

        if ((this.location.x < container.xMin) || (this.location.x > container.xMax)) {
            this.velocity.x = this.velocity.x * -1;
        }

        if ((this.location.y < container.yMin) || (this.location.y > container.yMax)) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    private applySpeedLimit(): void {

        if (this.speedLimit && this.speedLimit > 0) {

            let m = this.velocity.magnitude;
            if (m > this.speedLimit) {
                this.velocity.magnitude = this.speedLimit;
            }
        }

        this.aVelocity = constrain(this.aVelocity, -this.angularLimit, this.angularLimit);
    }
}
