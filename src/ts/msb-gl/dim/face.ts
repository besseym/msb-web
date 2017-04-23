/**
 * Created by mm28969 on 4/22/17.
 */

import {Material} from "../common/index";

import {DimElement} from "./element";

export class DimFace {

    drawMode: number;
    elementArray: DimElement[];

    material: Material;

    constructor() {

        this.elementArray = [];
    }

    get elementCount(): number {
        return this.elementArray.length;
    }
}

export class DimFaceData {

    elementDataArray: number[];

    constructor(face: DimFace) {

        let element: DimElement,
            eDataArray: number[] = [];

        this.elementDataArray = [];

        for (element of face.elementArray) {
            this.elementDataArray = this.elementDataArray.concat(element.toArray());
        }
    }
}