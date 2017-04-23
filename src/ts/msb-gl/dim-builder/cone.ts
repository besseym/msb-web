/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";

import {DimElement, DimFace, DimModel} from "../dim";

import {ModelBuilder} from "./builder";

const TWO_PIE = Math.PI * 2;

export class DimConeModelBuilder extends ModelBuilder {

    radius: number;
    height: number;
    divisions: number;
    
    constructor(radius: number = 0.5, height: number = 1.0, divisions: number = 20) {

        super();

        this.radius = radius;
        this.height = height;
        this.divisions = divisions;
    }

    buildModel(gl: WebGLRenderingContext): DimModel {

        let model: DimModel,
            face: DimFace,
            element: DimElement,
            i,
            theta, slice = TWO_PIE / this.divisions,
            hHalf = this.height * 0.5,
            v: Vector, vArray: Vector[] = [];

        model = new DimModel();

        //create circle
        for(theta = 0.0; theta <= TWO_PIE; theta = theta + slice) {

            if(theta != TWO_PIE && (theta + slice) > TWO_PIE){
                theta = TWO_PIE - slice;
            }

            v = new Vector(this.radius * Math.cos(theta), 0, this.radius * Math.sin(theta));
            vArray.push(v);
        }

        //cone face
        face = new DimFace();
        face.drawMode = gl.TRIANGLE_FAN;

        if(this.material){
            face.material = this.material;
        }

        //top point
        element = new DimElement();
        element.vertex = new Vector(0.0, hHalf, 0.0);
        face.elementArray.push(element);

        for(i = 0; i < vArray.length; i++) {

            v = vArray[i];

            element = new DimElement();
            element.vertex = new Vector(v.x, -hHalf, v.z);

            face.elementArray.push(element);
        }

        model.faceArray.push(face);

        //bottom face
        face = new DimFace();
        face.drawMode = gl.TRIANGLE_FAN;

        if(this.material){
            face.material = this.material;
        }

        //bottom point
        element = new DimElement();
        element.vertex = new Vector(0, -hHalf, 0);
        face.elementArray.push(element);
        
        for(i = 0; i < vArray.length; i++) {

            v = vArray[i];

            element = new DimElement();
            element.vertex = new Vector(v.x, -hHalf, v.z);

            face.elementArray.push(element);
        }

        model.faceArray.push(face);

        return model;
    }
}