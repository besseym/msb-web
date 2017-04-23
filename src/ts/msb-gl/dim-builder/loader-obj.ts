/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";
import {Material} from "../common/index";

import {DimElement, DimFace, DimModel} from "../dim";

export class DimObjModelLoader {

    material: Material;

    constructor(){

    }

    parseModel(gl: WebGLRenderingContext, material: Material, data): DimModel {

        let i, j, f,
            r = /\s+/,
            fr = /\//,
            index,
            lArray, fArray,
            vertexArray: Vector[] = [],
            texCoordArray = [],
            normalArray: Vector[] = [],
            line,
            lineArray,
            face: DimFace,
            element: DimElement,
            model: DimModel;

        model = new DimModel();

        lineArray = data.split("\n");

        for(i = 0; i < lineArray.length; i++){

            line = lineArray[i];

            if(line.startsWith("vt")){

                lArray = line.split(r);
                texCoordArray.push([parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])]);
            }
            else if(line.startsWith("vn")){

                lArray = line.split(r);
                normalArray.push(new Vector(parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])));
            }
            else if(line.startsWith("v")){

                lArray = line.split(r);
                vertexArray.push(new Vector(parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])));
            }
            else if(line.startsWith("f")){

                lArray = line.split(r);
                if(lArray.length > 0){

                    face = new DimFace();
                    face.drawMode = gl.TRIANGLES;

                    if(material){
                        face.material = material;
                    }

                    for(j = 1; j < lArray.length; j++){

                        if(lArray[j] && lArray[j] !== ""){

                            fArray = lArray[j].split(fr);
                            if(fArray.length > 0 && vertexArray.length > 0){

                                index = parseInt(fArray[0]) - 1;

                                element = new DimElement();
                                element.vertex = vertexArray[index];

                                // if(texCoordArray.length > 0 && fArray.length > 1 && fArray[1] !== "") {
                                //
                                //     index = parseInt(fArray[1]) - 1;
                                //     element.texCoord = texCoordArray[index];
                                // }

                                if(normalArray.length > 0 && fArray.length > 2 && fArray[2] !== "") {

                                    index = parseInt(fArray[2]) - 1;
                                    element.normal = normalArray[index];
                                }

                                face.elementArray.push(element);
                            }
                        }
                    }

                    model.faceArray.push(face);
                }
            }

        }

        return model;
    }

    loadModel(gl: WebGLRenderingContext, url: string, callback: Function){

        let model, parseModel = this.parseModel,
            material: Material = this.material,
            xhttp: XMLHttpRequest = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                model = parseModel(gl, material, this.responseText);

                callback(model);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}