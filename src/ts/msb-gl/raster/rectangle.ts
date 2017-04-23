/**
 * Created by michaelbessey on 8/6/16.
 */

import {Vector, Container} from "../../msb-math/index";

import {RasterShape} from "./shape";

export class RasterRectangle extends RasterShape {

    private _width: number;
    private _height: number;
    private _hWidth: number;
    private _hHeight: number;

    constructor(w: number, h: number) {

        super();

        this.width = w;
        this.height = h;
    }

    populate(container: Container) {

        this.width = container.width;
        this.height = container.height;
        this._hWidth = container.width * 0.5;
        this._hHeight = container.height * 0.5;

        this.location.x = container.xMin + this._hWidth;
        this.location.y = container.yMin + this._hHeight;
    }

    isHit(v: Vector): boolean {
        return (v.x >= this.x) && (v.x <= this.limitX) && (v.y >= this.y) && (v.y <= this.limitY);
    }

    getArea(): number {
        return this.width * this.height;
    }

    doDraw(context: CanvasRenderingContext2D): void {

        context.beginPath();
        context.rect(-this._hWidth, -this._hHeight, this._width, this._height);
        context.closePath();

        if (this.fillStyle) {
            context.fill();
        }

        if (this.lineWidth > 0) {
            context.stroke();
        }
    }

    get x(): number {
        return this.location.x - this._hWidth;
    }

    get y(): number {
        return this.location.y - this._hHeight;
    }

    set width(w: number) {
        this._width = w;
        this._hWidth = w * 0.5;
    }

    set height(h: number) {
        this._height = h;
        this._hHeight = h * 0.5;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get limitX(): number {
        return (this.x + this.width);
    }

    get limitY(): number {
        return (this.y + this.height);
    }
}
