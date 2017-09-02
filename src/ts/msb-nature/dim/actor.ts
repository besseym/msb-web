
import {DimModel} from "../../msb-gl"
import {NatureMover} from "../mover";

export class NatureDimActor {

    constructor(public model: DimModel, public mover: NatureMover) {
    }

    update(): void {

        this.mover.update();

        this.model.matrix.translationX = this.mover.location.x;
        this.model.matrix.translationY = this.mover.location.y;
        this.model.matrix.translationZ = this.mover.location.z;
    }
}