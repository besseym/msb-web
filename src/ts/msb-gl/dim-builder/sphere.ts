/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";

import {DimElement, DimFace, DimModel} from "../dim";

import {ModelBuilder} from "./builder";

const TWO_PIE = Math.PI * 2;

export class DimSphereModelBuilder extends ModelBuilder {

    radius: number;
    divisions: number;

    constructor(radius: number = 0.5, divisions: number = 20) {

        super();

        this.radius = radius;
        this.divisions = divisions;
    }

    buildModel(gl: WebGLRenderingContext): DimModel {

        let model: DimModel,
            face: DimFace,
            element: DimElement,
            phi = 0.0,
            theta = 0.0,
            thetaSlice = TWO_PIE / this.divisions,
            phiSlice = Math.PI / this.divisions;

        model = new DimModel();

        face = new DimFace();
        face.drawMode = gl.TRIANGLE_STRIP;

        if(this.material){
            face.material = this.material;
        }

        for (phi = 0; phi < Math.PI; phi = phi + phiSlice) {

            if(phi != Math.PI && (phi + phiSlice) > Math.PI){
                phi = Math.PI - phiSlice;
            }

            for(theta = 0.0; theta <= TWO_PIE; theta = theta + thetaSlice) {

                if (theta != TWO_PIE && (theta + thetaSlice) > TWO_PIE) {
                    theta = TWO_PIE - thetaSlice;
                }

                element = new DimElement();
                element.vertex = new Vector(this.radius * Math.sin(phi) * Math.cos(theta), this.radius * Math.cos(phi), this.radius * Math.sin(phi) * Math.sin(theta));
                if(this.color){
                    element.color = this.color;
                }
                if(this.hasNormals) {
                    element.normal = element.vertex.clone();
                    element.normal.normalize();
                }
                face.elementArray.push(element);

                element = new DimElement();
                element.vertex = new Vector(this.radius * Math.sin(phi + phiSlice) * Math.cos(theta), this.radius * Math.cos(phi + phiSlice), this.radius * Math.sin(phi + phiSlice) * Math.sin(theta));
                if(this.color){
                    element.color = this.color;
                }
                if(this.hasNormals) {
                    element.normal = element.vertex.clone();
                    element.normal.normalize();
                }
                face.elementArray.push(element);
            }
        }
        
        model.faceArray.push(face);

        return model;
    }

}