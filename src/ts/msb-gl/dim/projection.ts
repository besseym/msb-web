/**
 * Created by mm28969 on 4/22/17.
 */

import {DimMatrix} from "../math/index";

import {toDataArray} from "./utility";

abstract class DimProjection {

    uProjectionMatrixLocation: WebGLUniformLocation;

    constructor(public near, public far) {
        
    }

    abstract get projectionMatrix();

    init(gl: WebGLRenderingContext, glProgram: WebGLProgram){

        this.uProjectionMatrixLocation = gl.getUniformLocation(glProgram, "u_ProjectionMatrix" );
    }

    render(gl: WebGLRenderingContext){

        if(!this.uProjectionMatrixLocation){
            throw "GL uniform u_ProjectionMatrix location required."
        }

        gl.uniformMatrix4fv(this.uProjectionMatrixLocation, false, toDataArray(this.projectionMatrix));
    }
}

export class DimOrthographicProjection extends DimProjection {

    left;
    right;
    bottom;
    top;

    constructor(near = 5, far = -5) {

        super(near, far);

        this.left = -1;
        this.right = 1;
        this.bottom = -1;
        this.top = 1;
    }

    get projectionMatrix(){
        return DimMatrix.orthographicProjection(this.left, this.right, this.bottom, this.top, this.near, this.far);
    }
}

export class DimPerspectiveProjection extends DimProjection {

    angle: number;

    constructor(public aspect, near = 0.1, far = -10.0) {

        super(near, far);

        this.angle = 45.0;
    }

    get projectionMatrix(){
        return DimMatrix.perspectiveProjection(this.angle, this.aspect, this.near, this.far);
    }
}