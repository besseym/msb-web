/**
 * Created by michaelbessey on 8/20/16.
 */

import {randomRange} from "../../msb-math";
import {
    ColorRGB,
    RasterCircle,
    RasterRectangle,
    RasterShape,
    RasterTriangle
} from "../../msb-gl";

import {NatureMover} from "../mover";

export class NatureParticle extends NatureMover {

    body: RasterShape;
    fillColor: ColorRGB;

    private _life: number;
    private _lifeSpan: number;

    constructor() {
        super();
        this.lifeSpan = 120;
        this.fillColor = ColorRGB.getRandomInteger();
    }

    isDead(): boolean {

        if (this._life <= 0) {
            return true;
        }

        return false;
    }

    update(): void {

        super.update();
        this._life = this._life - 1;
        this.fillColor.a = this._life / this._lifeSpan;
    }

    draw(context: CanvasRenderingContext2D): void {

        this.body.fillStyle = this.fillColor.toString();
        this.body.location = this.location.clone();
        this.body.angle = this.angle;
        this.body.draw(context);
    }

    set lifeSpan(v: number){

        this._life = v;
        this._lifeSpan = v;
    }
}

export class NatureParticleCircle extends NatureParticle {

    constructor() {
        super();
        this.body = new RasterCircle(randomRange(5, 10));
    }
}

export class NatureParticleSquare extends NatureParticle {

    constructor() {
        super();

        let side: number = randomRange(10, 15);
        this.body = new RasterRectangle(side, side);

        this.aVelocity = 2;
    }
}

export class NatureParticleTriangle extends NatureParticle {

    constructor() {
        super();

        let side: number = randomRange(5, 10);
        this.body = new RasterTriangle(side, side);

        this.aVelocity = 2;
    }
}
