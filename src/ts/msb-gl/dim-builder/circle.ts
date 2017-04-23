/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";

import {DimElement, DimFace, DimModel} from "../dim";

import {ModelBuilder} from "./builder";

const TWO_PIE = Math.PI * 2;

export class DimCircleModelBuilder extends ModelBuilder {

    radius: number;
    divisions: number;

    constructor(radius: number = 1.0, divisions: number = 10) {

        super();

        this.radius = radius;
        this.divisions = divisions;
    }

    buildModel(gl: WebGLRenderingContext): DimModel {

        let model: DimModel,
            face: DimFace,
            element: DimElement,
            theta,
            slice = TWO_PIE / this.divisions;

        model = new DimModel();

        face = new DimFace();
        face.drawMode = gl.TRIANGLE_FAN;

        if(this.material){
            face.material = this.material;
        }

        element = new DimElement();
        element.vertex = new Vector();
        if(this.color){
            element.color = this.color;
        }
        if(this.hasNormals) {
            element.normal = new Vector(0, 0, 1);
        }
        face.elementArray.push(element);

        for(theta = 0.0; theta <= TWO_PIE; theta = theta + slice) {

            if(theta != TWO_PIE && (theta + slice) > TWO_PIE){
                theta = TWO_PIE - slice;
            }

            element = new DimElement();
            element.vertex = new Vector(this.radius * Math.cos(theta), this.radius * Math.sin(theta), 0);
            if(this.color){
                element.color = this.color;
            }
            if(this.hasNormals) {
                element.normal = new Vector(0, 0, 1);
            }

            face.elementArray.push(element);
        }

        model.faceArray.push(face);

        return model;
    }
}