
import {DimModel} from "../../msb-gl"
import {NatureMover} from "../mover";

export class NatureDimActor extends NatureMover {

    constructor(public body: DimModel) {

        super();
    }

    update(): void {

        super.update();

        this.body.matrix.translationX = this.location.x;
        this.body.matrix.translationY = this.location.y;
        this.body.matrix.translationZ = this.location.z;
    }
}