/**
 * Created by mm28969 on 4/22/17.
 */

import {toDataArray} from "./utility";

import {DimModel, DimModelData} from "./model";
import {DimFace} from "./face";

export class DimScene {

    bufferId;

    id: number;
    vertexSize: number;
    colorSize: number;
    normalSize: number;

    uTranslationMatrix: WebGLUniformLocation;
    uRotationMatrixX: WebGLUniformLocation;
    uRotationMatrixY: WebGLUniformLocation;
    uRotationMatrixZ: WebGLUniformLocation;
    uScaleMatrix: WebGLUniformLocation;

    uAmbient: WebGLUniformLocation;
    uDiffuse: WebGLUniformLocation;
    uSpecular: WebGLUniformLocation;
    uShininess: WebGLUniformLocation;

    aPosition;
    aColor;
    aNormal;

    modelArray: DimModel[];

    hasTransformation: boolean;
    hasMaterial: boolean;

    constructor(id = 1, vertexSize = 3) {

        this.id = id;

        this.vertexSize = vertexSize;
        this.colorSize = 0;
        this.normalSize = 0;

        this.modelArray = [];

        this.hasTransformation = false;
        this.hasMaterial = false;
    }

    get elementSize() {
        return this.vertexSize + this.colorSize + this.normalSize;
    }

    init(gl: WebGLRenderingContext, glProgram: WebGLProgram){

        let offset = 0,
            stride = Float32Array.BYTES_PER_ELEMENT * this.elementSize,
            sceneData = new DimSceneData(this.modelArray);

        if(this.hasTransformation){

            this.uTranslationMatrix = gl.getUniformLocation(glProgram, "u_TranslationMatrix_" + this.id);
            this.uRotationMatrixX = gl.getUniformLocation(glProgram, "u_RotationMatrixX_" + this.id);
            this.uRotationMatrixY = gl.getUniformLocation(glProgram, "u_RotationMatrixY_" + this.id);
            this.uRotationMatrixZ = gl.getUniformLocation(glProgram, "u_RotationMatrixZ_" + this.id);
            this.uScaleMatrix = gl.getUniformLocation(glProgram, "u_ScaleMatrix_" + this.id);
        }

        if(this.hasMaterial){

            this.uAmbient = gl.getUniformLocation(glProgram, "u_Ambient_" + this.id );
            this.uDiffuse = gl.getUniformLocation(glProgram, "u_Diffuse_" + this.id );
            this.uSpecular = gl.getUniformLocation(glProgram, "u_Specular_" + this.id );
            this.uShininess = gl.getUniformLocation(glProgram, "u_Shininess_" + this.id );
        }

        this.bufferId = gl.createBuffer();
        
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferId);
        gl.bufferData(gl.ARRAY_BUFFER, toDataArray(sceneData.elementDataArray), gl.STATIC_DRAW);

        this.aPosition = gl.getAttribLocation(glProgram, "a_Position_" + this.id);
        gl.vertexAttribPointer(this.aPosition, this.vertexSize, gl.FLOAT, false, stride, offset);

        offset = offset + this.vertexSize;

        if(this.colorSize > 0){

            this.aColor = gl.getAttribLocation(glProgram, "a_Color_" + this.id);
            gl.vertexAttribPointer(this.aColor, this.colorSize, gl.FLOAT, false, stride, Float32Array.BYTES_PER_ELEMENT * offset);

            offset = offset + this.colorSize;
        }

        if(this.normalSize > 0) {

            this.aNormal = gl.getAttribLocation(glProgram, "a_Normal_" + this.id);
            gl.vertexAttribPointer(this.aNormal, this.normalSize, gl.FLOAT, false, stride, Float32Array.BYTES_PER_ELEMENT * offset);

            offset = offset + this.normalSize;
        }
    }

    rotate(){

        let model: DimModel;
        for (model of this.modelArray) {
            model.matrix.rotationX = model.matrix.rotationX + 1;
        }
    }

    render(gl: WebGLRenderingContext) {

        let model: DimModel,
            face: DimFace,
            elementOffset = 0;

        gl.enableVertexAttribArray(this.aPosition);

        if(this.colorSize > 0) {
            gl.enableVertexAttribArray(this.aColor);
        }

        if(this.normalSize > 0){
            gl.enableVertexAttribArray(this.aNormal);
        }

        for (model of this.modelArray) {

            if(this.hasTransformation) {

                gl.uniformMatrix4fv(this.uTranslationMatrix, false, toDataArray(model.matrix.toTranslationArray()));
                gl.uniformMatrix4fv(this.uRotationMatrixX, false, toDataArray(model.matrix.toRotationArrayX()));
                gl.uniformMatrix4fv(this.uRotationMatrixY, false, toDataArray(model.matrix.toRotationArrayY()));
                gl.uniformMatrix4fv(this.uRotationMatrixZ, false, toDataArray(model.matrix.toRotationArrayZ()));
                gl.uniformMatrix4fv(this.uScaleMatrix, false, toDataArray(model.matrix.toScaleArray()));
            }

            for(face of model.faceArray) {

                if(this.hasMaterial && face.material){

                    let material = face.material;

                    gl.uniform4fv(this.uAmbient, toDataArray(material.ambient.toArray()));
                    gl.uniform4fv(this.uDiffuse, toDataArray(material.diffuse.toArray()));
                    gl.uniform4fv(this.uSpecular, toDataArray(material.specular.toArray()));
                    gl.uniform1f(this.uShininess, material.shininess);
                }

                gl.drawArrays(face.drawMode, elementOffset, face.elementCount);
                elementOffset = elementOffset + face.elementCount;
            }
        }
    }

}

export class DimSceneData {

    elementCount: number;
    elementDataArray: number[];

    constructor(modelArray: DimModel[]) {

        let model: DimModel,
            modelData: DimModelData;

        this.elementCount = 0;
        this.elementDataArray = [];

        for(model of modelArray){

            modelData = new DimModelData(model);

            this.elementDataArray = this.elementDataArray.concat(modelData.elementDataArray);
            this.elementCount = this.elementCount + modelData.elementCount;
        }
    }
}