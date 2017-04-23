/**
 * Created on 11/13/16.
 */

import {Vector} from "../../msb-math/index";

import {ColorRGB, Material} from "../common/index";

export abstract class ModelBuilder {

    origin: Vector;
    color: ColorRGB;
    material: Material;
    
    hasNormals: boolean;

    constructor() {
        this.origin = new Vector();
        this.hasNormals = false;
    }

    abstract buildModel(gl: WebGLRenderingContext);

}