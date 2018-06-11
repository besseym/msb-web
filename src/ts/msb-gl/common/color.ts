/**
 * Created on 11/13/16.
 */

import {
    createRandomRangeGenerator,
    createIntegerRandomRangeGenerator
} from "../../msb-math/index";

export class ColorHSL {

    static getRandom(min: number = 0.0, max: number = 1.0): ColorHSL {

        let generator = createRandomRangeGenerator(min, max);
        return new ColorHSL(generator(), generator(), generator());
    }

    static getRandomInteger(min: number = 0, max: number = 256): ColorHSL {

        let generator = createIntegerRandomRangeGenerator(min, max),
            percentGenerator = createIntegerRandomRangeGenerator(0, 100);
        return new ColorHSL(generator(), percentGenerator(), percentGenerator());
    }

    constructor(public h: number, public s: number, public l: number, public a = 1.0) {
    }

    toArray(): number[] {
        return [this.h, this.s, this.l, this.a];
    }

    toString(): string {

        let h = this.h, s = this.s, l = this.l, a = this.a;
        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
}

export function lerpColorHSL(a: ColorHSL, b: ColorHSL, t: number){

    // console.log(a.toString(), b.toString());

    return new ColorHSL(
        Math.floor(a.h + (b.h - a.h) * t),
        Math.floor(a.s + (b.s - a.s) * t),
        Math.floor(a.l + (b.l - a.l) * t),
        Math.floor(a.a + (b.a - a.a) * t)
    );
}

export class ColorRGB {

    static getRandom(min: number = 0.0, max: number = 1.0): ColorRGB {

        let generator = createRandomRangeGenerator(min, max);
        return new ColorRGB(generator(), generator(), generator());
    }

    static getRandomInteger(min: number = 0, max: number = 256): ColorRGB {

        let generator = createIntegerRandomRangeGenerator(min, max);
        return new ColorRGB(generator(), generator(), generator());
    }

    constructor(public r: number, public g: number, public b: number, public a = 1.0) {
    }

    toArray(): number[] {
        return [this.r, this.g, this.b, this.a];
    }

    toString(): string {

        let r = this.r, g = this.g, b = this.b, a = this.a;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

export function lerpColorRGB(a: ColorRGB, b: ColorRGB, t: number){

    // console.log(a.toString(), b.toString());

    return new ColorRGB(
        Math.floor(a.r + (b.r - a.r) * t),
        Math.floor(a.g + (b.g - a.g) * t),
        Math.floor(a.b + (b.b - a.b) * t),
        Math.floor(a.a + (b.a - a.a) * t)
    );
}