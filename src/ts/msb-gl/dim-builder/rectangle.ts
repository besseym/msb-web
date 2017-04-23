/**
 * Created on 11/13/16.
 */

import {Vector} from "../../msb-math/index";

import {DimElement, DimFace, DimModel} from "../dim";

import {ModelBuilder} from "./builder";

export class DimRectangleModelBuilder extends ModelBuilder {

    width: number;
    height: number;

    constructor(w: number = 1.0, h: number = 1.0) {

        super();

        this.width = w;
        this.height = h;
    }

    buildModel(gl: WebGLRenderingContext): DimModel {

        let model: DimModel,
            face: DimFace,
            element: DimElement,
            normal: Vector,
            wHalf = this.width * 0.5,
            hHalf = this.height * 0.5;
        // x1 = this.origin.x - wHalf,
        // y1 = this.origin.y - hHalf,
        // x2 = this.origin.x - wHalf,
        // y2 = this.origin.y + hHalf,
        // x3 = this.origin.x + wHalf,
        // y3 = this.origin.y - hHalf;

        model = new DimModel();

        face = new DimFace();
        face.drawMode = gl.TRIANGLE_FAN;

        if(this.material){
            face.material = this.material;
        }

        element = new DimElement();
        element.vertex = new Vector(this.origin.x - wHalf, this.origin.y - hHalf, 0);
        if(this.color){
            element.color = this.color;
        }
        if(this.hasNormals){
            element.normal = new Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);

        element = new DimElement();
        element.vertex = new Vector(this.origin.x - wHalf, this.origin.y + hHalf, 0);
        if(this.color){
            element.color = this.color;
        }
        if(this.hasNormals) {
            element.normal = new Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);

        element = new DimElement();
        element.vertex = new Vector(this.origin.x + wHalf, this.origin.y + hHalf, 0);
        if(this.color){
            element.color = this.color;
        }
        if(this.hasNormals) {
            element.normal = new Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);

        element = new DimElement();
        element.vertex = new Vector(this.origin.x + wHalf, this.origin.y - hHalf, 0);
        if(this.color){
            element.color = this.color;
        }
        if(this.hasNormals) {
            element.normal = new Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        
        model.faceArray.push(face);

        return model;
    }

}