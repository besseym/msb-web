/**
 * Created by michaelbessey on 8/7/16.
 */

import {RasterShape} from "../msb-gl";
import {NatureMover} from "./mover";

export class NatureActor extends NatureMover {

    constructor(public body: RasterShape) {

        super();
    }

    draw(context: CanvasRenderingContext2D): void {

        this.body.location = this.location.clone();
        this.body.angle = this.angle;
        this.body.draw(context);
    }
}
