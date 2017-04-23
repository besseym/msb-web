/**
 * Created by michaelbessey on 8/27/16.
 */

import {constrain, Vector} from "../msb-math";
import {RasterShape, RasterCircle} from "../msb-gl";
import {NatureMover} from "./mover";

export class NatureRepeller {

    strength: number;
    body: RasterShape;

    constructor(public location: Vector) {

        this.strength = 500;
        this.body = new RasterCircle();
    }

    repel(mover: NatureMover){

        let direction: Vector = Vector.subtract(this.location, mover.location),
            m: number = direction.magnitude,
            f: number = 0.0;

        m = constrain(m, 5, 200);
        direction.normalize();
        f = -1 * this.strength / (m * m);

        direction.multiply(f);

        return direction;
    }

    draw(context: CanvasRenderingContext2D): void {

        this.body.location = this.location.clone();
        this.body.draw(context);
    }
}
