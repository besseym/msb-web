/**
 * Created by michaelbessey on 11/13/16.
 */

import {degrees2radians, Vector} from "../../msb-math";

export class DimMatrix {

    static identity() {

        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    }

    static orthographicProjection(left, right, bottom, top, near, far) {

        let w = right - left,
            h = top - bottom,
            d = far - near,
            matrix = DimMatrix.identity();

        // 0 0
        matrix[0] = 2.0 / w;
        // 1 1
        matrix[5] = 2.0 / h;
        // 2 2
        matrix[10] = -2.0 / d;
        // 0 3
        matrix[3] = (left + right) / w;
        // 3 1
        matrix[13] = (top + bottom) / h;
        // 3 2
        matrix[14] = (near + far) / d;

        return matrix;
    }

    static perspectiveProjection(fovy, aspect, near, far) {

        let f = 1.0 / Math.tan( degrees2radians(fovy) / 2.0),
            d = far - near,
            matrix = DimMatrix.identity();

        //column order first
        // 0 0
        matrix[0] = f / aspect;
        // 1 1
        matrix[5] = f;
        // 2 2
        matrix[10] = -(near + far) / d;
        // 3 2
        matrix[14] = -2.0 * near * far / d;
        // 2 3
        matrix[11] = -1.0;
        // 3 3
        matrix[15] = 0.0;

        return matrix;
    }

    static createLookAtViewMatrix(position: Vector, at: Vector, up: Vector) {

        var f: Vector, s: Vector, u: Vector,
            matrix = DimMatrix.identity();

        f = Vector.subtract(position, at);  // view direction vector
        f.normalize();
        s = Vector.cross(f, up); // perpendicular vector
        s.normalize();
        u = Vector.cross(s, f); // "new" up vector
        u.normalize();

        // f.negate();

        //column order first
        // 0 0
        matrix[0] = s.x;
        // 1 0
        matrix[4] = s.y;
        // 2 0
        matrix[8] = s.z;
        // 3 0
        matrix[12] = -Vector.dot(s, position);

        // 0 1
        matrix[1] = u.x;
        // 1 1
        matrix[5] = u.y;
        // 2 1
        matrix[9] = u.z;
        // 3 1
        matrix[13] = -Vector.dot(u, position);

        // 0 2
        matrix[2] = f.x;
        // 1 2
        matrix[6] = f.y;
        // 2 2
        matrix[10] = f.z;
        // 3 2
        matrix[14] = -Vector.dot(f, position);

        return matrix;
    }

    translationX;
    translationY;
    translationZ;

    rotationX;
    rotationY;
    rotationZ;

    scaleX;
    scaleY;
    scaleZ;

    constructor(){

        this.translationX = 0.0;
        this.translationY = 0.0;
        this.translationZ = 0.0;

        this.rotationX = 0.0;
        this.rotationY = 0.0;
        this.rotationZ = 0.0;

        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.scaleZ = 1.0;
    }

    toRotationArrayX(): number[] {

        let angle = degrees2radians(this.rotationX),
            cosAngle = Math.cos(angle),
            sinAngle = Math.sin(angle);

        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, cosAngle, sinAngle, 0.0,
            0.0, -sinAngle, cosAngle, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    }

    toRotationArrayY(): number[] {

        let angle = degrees2radians(this.rotationY),
            cosAngle = Math.cos(angle),
            sinAngle = Math.sin(angle);

        return [
            cosAngle, 0.0, -sinAngle, 0.0,
            0.0, 1.0, 0.0, 0.0,
            sinAngle, 0.0, cosAngle, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    }

    toRotationArrayZ(): number[] {

        let angle = degrees2radians(this.rotationZ),
            cosAngle = Math.cos(angle),
            sinAngle = Math.sin(angle);

        return [
            cosAngle, -sinAngle, 0.0, 0.0,
            sinAngle, cosAngle, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    }

    toScaleArray(): number[] {
        return [
            this.scaleX, 0.0, 0.0, 0.0,
            0.0, this.scaleY, 0.0, 0.0,
            0.0, 0.0, this.scaleZ, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    }

    toTranslationArray(): number[] {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            this.translationX, this.translationY, this.translationZ, 1.0
        ];
    }
}