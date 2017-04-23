/**
 * Created by mm28969 on 4/22/17.
 */

import {DimMatrix} from "../math/index";

import {DimFace, DimFaceData} from "./face";

export class DimModel {

    faceArray: DimFace[];

    matrix: DimMatrix;

    constructor() {

        this.faceArray = [];
        this.matrix = new DimMatrix();
    }
}

export class DimModelData {

    elementCount: number;
    elementDataArray: number[];

    constructor(model: DimModel) {

        let face: DimFace,
            faceData: DimFaceData;

        this.elementCount = 0;
        this.elementDataArray = [];

        for (face of model.faceArray) {

            faceData = new DimFaceData(face);

            this.elementDataArray = this.elementDataArray.concat(faceData.elementDataArray);
            this.elementCount = this.elementCount + face.elementCount;
        }
    }
}