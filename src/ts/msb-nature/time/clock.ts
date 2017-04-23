/**
 * Created by michaelbessey on 7/19/16.
 */

import {Vector} from "../../msb-math";
import {ColorRGB, RasterCircle} from "../../msb-gl";

class NatureClockHand {

    value: number;
    length: number;
    lineWidth: number;
    startLocation: Vector;

    constructor() {
        this.lineWidth = 1;
    }

    draw(context: CanvasRenderingContext2D) : void {

        let angle = (Math.PI*2) * this.value - Math.PI/2;

        context.save();
        context.lineWidth = this.lineWidth;
        context.moveTo(this.startLocation.x, this.startLocation.y);
        context.lineTo(this.startLocation.x + Math.cos(angle) * this.length, this.startLocation.y + Math.sin(angle) * this.length);
        context.stroke();
        context.restore();
    }
}

class NatureClockNumerals {

    private _font: string;
    private _fontHeight: number;
    center: Vector;
    radius: number;

    _numerals: number[];

    constructor() {

        this.setFont(25, "Arial");
        this._numerals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
    }

    setFont(height: number, typeface: string){

        this._fontHeight = height;
        this._font = height.toString() + "px " + typeface;
    }

    draw(context: CanvasRenderingContext2D) : void {

        let angle: number = 0,
            numeralWidth: number = 0,
            nStr: string = "",
            x: number = 0, y: number = 0;

        for(let n of this._numerals){

            angle = Math.PI/6 * (n - 3);

            nStr = n.toString();

            context.save();
            context.font = this._font;

            numeralWidth = context.measureText(nStr).width;
            x = this.center.x + Math.cos(angle) * (this.radius) - numeralWidth/2;
            y = this.center.x + Math.sin(angle) * (this.radius) + this._fontHeight/3;

            context.fillText(nStr, x, y);
            context.restore();
        }
    }
}

export class NatureClock {

    date: Date;

    private _radius: number;
    private _center: Vector;

    private _innerCircle: RasterCircle;
    private _outerCircle: RasterCircle;

    private _hourHand: NatureClockHand;
    private _minuteHand: NatureClockHand;
    private _secondHand: NatureClockHand;

    private _numerals: NatureClockNumerals;

    constructor(v: Vector, r: number) {

        let color = new ColorRGB(255, 255, 255, 1);

        this._innerCircle = new RasterCircle();
        this._outerCircle = new RasterCircle();

        this._outerCircle.lineWidth = 5;
        this._outerCircle.fillStyle = color.toString();

        this._hourHand = new NatureClockHand();
        this._minuteHand = new NatureClockHand();
        this._secondHand = new NatureClockHand();

        this._numerals = new NatureClockNumerals();

        this.center = v;
        this.radius = r;
    }

    set center(c: Vector) {

        this._center = c;

        this._innerCircle.location = c;
        this._outerCircle.location = c;

        this._hourHand.startLocation = c;
        this._minuteHand.startLocation = c;
        this._secondHand.startLocation = c;

        this._numerals.center = c;
    }

    set radius(r: number){

        this._radius = r;

        this._outerCircle.radius = r;
        this._innerCircle.radius = r * 0.05;

        this._hourHand.length = this._radius * 0.7;
        this._hourHand.lineWidth = 10;

        this._minuteHand.length = this._radius * 0.8;
        this._minuteHand.lineWidth = 5;

        this._secondHand.length = this._radius * 0.9;

        this._numerals.radius = this._radius * 0.85;
    }

    draw(context: CanvasRenderingContext2D) : void {

        let hours = this.date.getHours(),
            minutes = this.date.getMinutes(),
            seconds = this.date.getSeconds();

        this._outerCircle.draw(context);
        this._innerCircle.draw(context);

        this._hourHand.value = (hours / 12);
        this._hourHand.draw(context);

        this._minuteHand.value = (minutes / 60);
        this._minuteHand.draw(context);

        this._secondHand.value = (seconds / 60);
        this._secondHand.draw(context);

        this._numerals.draw(context);
    }
}
