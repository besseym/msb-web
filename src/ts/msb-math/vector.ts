import {Container} from "./container";
import {mathDegrees2radians, mathRadians2degrees, randomRange} from "./utility";

export class Vector {

    static getRandom(c: Container): Vector {

        let x: number = randomRange(c.xMin, c.xMax),
            y: number = randomRange(c.yMin, c.yMax),
            z: number = 0;

        if (c.hasRangeZ()) {
            z = randomRange(c.zMin, c.zMax);
        }

        return new Vector(x, y, z);
    }

    static add(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    static subtract(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    static multiply(v: Vector, n: number): Vector {
        return new Vector(v.x * n, v.y * n, v.z * n);
    }

    static divide(v: Vector, n: number): Vector {
        return new Vector(v.x / n, v.y / n, v.z / n);
    }

    static magnitude(v: Vector): number {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }

    static cross(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }

    static dot(v1: Vector, v2: Vector): number {

        let sum = (v1.x * v2.x);
        sum = sum + (v1.y * v2.y);
        sum = sum + (v1.z * v2.z);

        return sum;
    }

    constructor(public x = 0, public y = 0, public z = 0) {
    }

    set magnitude(m: number) {

        this.normalize();
        this.multiply(m);
    }

    get magnitude(): number {
        return Vector.magnitude(this);
    }

    add(v: Vector): void {

        this.x = this.x + v.x;
        this.y = this.y + v.y;
        this.z = this.z + v.z;
    }

    subtract(v: Vector): void {

        this.x = this.x - v.x;
        this.y = this.y - v.y;
        this.z = this.z - v.z;
    }

    multiply(n: number): void {

        this.x = this.x * n;
        this.y = this.y * n;
        this.z = this.z * n;
    }

    divide(n: number): void {

        this.x = this.x / n;
        this.y = this.y / n;
        this.z = this.z / n;
    }

    normalize(): void {

        let m = this.magnitude;
        if (m > 0) {
            this.divide(m);
        }
    }

    negate(): void {

        this.x = -this.x;
        this.y = -this.y;
        this.y = -this.y;
    }

    setXY(theta: number, radius: number) {

        let thetaRadians = mathDegrees2radians(theta);
        this.setXYRadians(thetaRadians, radius);
    }

    setXYRadians(theta: number, radius: number) {

        this.x = radius * Math.sin(theta);
        this.y = radius * Math.cos(theta);
    }

    getAngleXY(): number {
        return mathRadians2degrees(this.getAngleXYRadians());
    }

    getAngleXYRadians(): number {
        return Math.atan2(this.y, this.x);
    }

    clone(): Vector {
        return new Vector(this.x, this.y, this.z);
    }

    toString(): string {

        let x = this.x,
            y = this.y,
            z = this.z;

        return `Vector (${x}, ${y}, ${z})`;
    }

    toArray(): number[] {
        return [this.x, this.y, this.z];
    }
}