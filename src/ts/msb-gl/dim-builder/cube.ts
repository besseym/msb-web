/**
 * Created by mm28969 on 12/26/16.
 */

import {Vector} from "../../msb-math/index";

import {DimElement, DimFace, DimModel} from "../dim";

import {ModelBuilder} from "./builder";

export class DimCubeModelBuilder extends ModelBuilder {

    private _quadArray;
    private _vertexArray: Vector[];
    private _normalArray: Vector[];

    constructor(width: number = 1.0, height: number = 1.0, depth: number = 1.0) {

        super();

        this._quadArray = [
            [1, 0, 3, 2],
            [2, 3, 7, 6],
            [3, 0, 4, 7],
            [6, 5, 1, 2],
            [4, 5, 6, 7],
            [5, 4, 0, 1]
        ];

        this.dimensions = {
            width: width,
            height: height,
            depth: depth
        };
    }

    set dimensions(d){

        let wHalf = d.width * 0.5,
            hHalf = d.height * 0.5,
            dHalf = d.depth * 0.5;

        this._vertexArray = [

            new Vector( -wHalf, -hHalf,  dHalf ),
            new Vector( -wHalf,  hHalf,  dHalf ),
            new Vector(  wHalf,  hHalf,  dHalf ),
            new Vector(  wHalf, -hHalf,  dHalf ),

            new Vector( -wHalf, -hHalf, -dHalf ),
            new Vector( -wHalf,  hHalf, -dHalf ),
            new Vector(  wHalf,  hHalf, -dHalf ),
            new Vector(  wHalf, -hHalf, -dHalf )
        ];

        this._normalArray = [

            new Vector(0.0, 0.0, 1.0),
            new Vector(1.0, 0.0, 0.0),
            new Vector(0.0, -1.0, 0.0),
            new Vector(0.0, 1.0, 0.0),
            new Vector(0.0, 0.0, -1.0),
            new Vector(-1.0, 0.0, 0.0)
        ];
    }

    buildModel(gl: WebGLRenderingContext): DimModel {

        let model: DimModel,
            face: DimFace,
            element: DimElement,
            i, j,
            indexArray;

        model = new DimModel();

        for(i = 0; i < this._quadArray.length; i++) {

            face = new DimFace();
            face.drawMode = gl.TRIANGLE_FAN;

            if(this.material){
                face.material = this.material;
            }

            indexArray = this._quadArray[i];

            for (j = 0; j < indexArray.length; ++j ) {

                element = new DimElement();
                element.vertex = this._vertexArray[indexArray[j]];
                if(this.color){
                    element.color = this.color;
                }
                if(this.hasNormals) {
                    element.normal = this._normalArray[i];
                }

                face.elementArray.push(element);
            }
            
            model.faceArray.push(face);
        }

        return model;
    }
}