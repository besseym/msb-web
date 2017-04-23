/**
 * Created by michaelbessey on 7/18/16.
 */

import {normalGaussianGenerator} from "../msb-math";
import {RasterCircle} from "../msb-gl";
import {NatureMover} from "./mover";

export class NatureWalker extends NatureMover {

    normalGaussianGenerator: Function;

    constructor(private _body: RasterCircle) {

        super();

        this.normalGaussianGenerator = normalGaussianGenerator(0, 15);
    }

    // set location(v: Vector) {
    //
    //     this._body.location = v;
    //     this.normalGaussianGenerator = normalGaussianGenerator(v.x, 55);
    // }
    //
    // get location() : Vector {
    //     return this._body.location;
    // }

    stepX(): void {

        let r = Math.random();
        if (r <= 0.4) {
            this.location.x = this.location.x + 1;
        }
        else if (r <= 0.9) {
            this.location.x = this.location.x - 1;
        }

        // let step = Math.floor((Math.random() * 3) - 1);

    }

    stepY(): void {

        let r = Math.random();
        if (r <= 0.4) {
            this.location.y = this.location.y + 1;
        }
        else if (r <= 0.9) {
            this.location.y = this.location.y - 1;
        }

        // let step = Math.floor((Math.random() * 3) - 1);
    }

    walk(): void {

        this.stepX();
        this.stepY();
    }

    place(): void {

        this.location.x = this.normalGaussianGenerator();
    }

    draw(context: CanvasRenderingContext2D): void {

        this._body.location = this.location.clone();
        this._body.draw(context);
    }
}
