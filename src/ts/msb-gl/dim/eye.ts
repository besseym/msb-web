/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";

import {DimMatrix} from "../math";
import {toDataArray} from "./utility";

export class DimEye {

    position: Vector;
    at: Vector;
    up: Vector;

    uViewMatrixLocation: WebGLUniformLocation;

    constructor() {
        
        this.position = new Vector(0, 0, 4.0);
        this.at = new Vector();
        this.up = new Vector(0, 1.0, 0);
    }

    get viewMatrix(){
        return DimMatrix.createLookAtViewMatrix(this.position, this.at, this.up);
    }

    init(gl: WebGLRenderingContext, glProgram: WebGLProgram){

        this.uViewMatrixLocation = gl.getUniformLocation(glProgram, "u_ViewMatrix" );
    }

    render(gl: WebGLRenderingContext){

        if(!this.uViewMatrixLocation){
            throw "GL uniform u_ViewMatrix location required."
        }

        gl.uniformMatrix4fv(this.uViewMatrixLocation, false, toDataArray(this.viewMatrix));
    }
}