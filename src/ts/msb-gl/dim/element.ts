/**
 * Created by mm28969 on 4/22/17.
 */

import {Vector} from "../../msb-math/index";

import {ColorRGB} from "../common/index";

export class DimElement {

    vertex: Vector;
    color: ColorRGB;
    normal: Vector;

    constructor() {

        this.vertex = new Vector();
    }

    toArray(): number[] {

        let eArray: number[] = [];

        eArray = eArray.concat(this.vertex.toArray());

        if(this.color){
            eArray = eArray.concat(this.color.toArray());
        }

        if(this.normal){
            eArray = eArray.concat(this.normal.toArray());
        }

        return eArray;
    }
}