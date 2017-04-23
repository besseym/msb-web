/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";
import {ColorRGB} from "../common/index";

import {toDataArray} from "./utility";

export class DimLight {

    static starter(): DimLight {

        let light: DimLight = new DimLight();

        light.position = new Vector(2.0, 2.0, 2.0);

        light.ambient = new ColorRGB(0.2, 0.2, 0.2);
        light.diffuse = new ColorRGB(1.0, 1.0, 1.0);
        light.specular = new ColorRGB(0.5, 0.5, 0.5);
        
        // light.ambient = ColorRGB.getRandom();
        // light.diffuse = ColorRGB.getRandom();
        // light.specular = ColorRGB.getRandom();

        return light;
    }

    position: Vector;
    ambient: ColorRGB;
    diffuse: ColorRGB;
    specular: ColorRGB;

    uLightPositionLocation: WebGLUniformLocation;
    uLightAmbientLocation: WebGLUniformLocation;
    uLightDiffuseLocation: WebGLUniformLocation;
    uLightSpecularLocation: WebGLUniformLocation;

    constructor(public id = 1) {

    }

    init(gl: WebGLRenderingContext, glProgram: WebGLProgram){

        this.uLightPositionLocation = gl.getUniformLocation(glProgram, "u_LightPosition_" + this.id);
        
        this.uLightAmbientLocation = gl.getUniformLocation(glProgram, "u_LightAmbient_" + this.id);
        this.uLightDiffuseLocation = gl.getUniformLocation(glProgram, "u_LightDiffuse_" + this.id);
        this.uLightSpecularLocation = gl.getUniformLocation(glProgram, "u_LightSpecular_" + this.id);
    }

    render(gl: WebGLRenderingContext){

        if(!this.uLightPositionLocation){
            throw "GL uniform u_LightPosition location required.";
        }

        if(!this.uLightAmbientLocation){
            throw "GL uniform u_LightAmbient location required.";
        }

        if(!this.uLightDiffuseLocation){
            throw "GL uniform u_LightDiffuse location required.";
        }

        if(!this.uLightSpecularLocation){
            throw "GL uniform u_LightSpecular location required.";
        }
        
        gl.uniform3fv(this.uLightPositionLocation, toDataArray(this.position.toArray()));

        gl.uniform4fv(this.uLightAmbientLocation, toDataArray(this.ambient.toArray()));
        gl.uniform4fv(this.uLightDiffuseLocation, toDataArray(this.diffuse.toArray()));
        gl.uniform4fv(this.uLightSpecularLocation, toDataArray(this.specular.toArray()));
    }
}