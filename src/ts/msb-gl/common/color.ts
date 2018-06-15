/**
 * Created on 11/13/16.
 */

import {
    createRandomRangeGenerator,
    createIntegerRandomRangeGenerator,
    integerRandomRange,
    randomRange
} from "../../msb-math/index";

export class ColorHSL {

    static getRandom(h = [0, 256], s = [0, 100], l = [0, 100], a = 1): ColorHSL {

        let hue = integerRandomRange(h[0], h[1]),
            saturation = integerRandomRange(s[0], s[1]),
            lightness = integerRandomRange(l[0], l[1])
        ;

        return new ColorHSL(hue, saturation, lightness, a);
    }

    static getRandomInteger(h = [0, 256], s = [0, 100], l = [0, 100], a = 1): ColorHSL {

        let hue = integerRandomRange(h[0], h[1]),
            saturation = integerRandomRange(s[0], s[1]),
            lightness = integerRandomRange(l[0], l[1])
        ;

        return new ColorHSL(hue, saturation, lightness, a);
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

export function createFactoryColorHSL(h = [0, 1], s = [0, 1], l = [0, 1]): Function {

    let hueGenerator = createRandomRangeGenerator(h[0], h[1]),
        saturationGenerator = createRandomRangeGenerator(s[0], s[1]),
        brightnessGenerator = createRandomRangeGenerator(l[0], l[1])
    ;

    return function(a = 1){
        return new ColorHSL(hueGenerator(), saturationGenerator(), brightnessGenerator(), a);
    };
}

export function createFactoryIntegerColorHSL(h = [0, 256], s = [0, 100], l = [0, 100]): Function {

    let hueGenerator = createIntegerRandomRangeGenerator(h[0], h[1]),
        saturationGenerator = createIntegerRandomRangeGenerator(s[0], s[1]),
        brightnessGenerator = createIntegerRandomRangeGenerator(l[0], l[1])
    ;

    return function(a = 1){
        return new ColorHSL(hueGenerator(), saturationGenerator(), brightnessGenerator(), a);
    };
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

export function createFactoryColorRGB(r = [0, 1], g = [0, 1], b = [0, 1]): Function {

    let redGenerator = createRandomRangeGenerator(r[0], r[1]),
        greenGenerator = createRandomRangeGenerator(g[0], g[1]),
        blueGenerator = createRandomRangeGenerator(b[0], b[1])
    ;

    return function(a = 1){
        return new ColorRGB(redGenerator(), greenGenerator(), blueGenerator(), a);
    };
}

export function createFactoryIntegerColorRGB(r = [0, 256], g = [0, 256], b = [0, 256]): Function {

    let redGenerator = createIntegerRandomRangeGenerator(r[0], r[1]),
        greenGenerator = createIntegerRandomRangeGenerator(g[0], g[1]),
        blueGenerator = createIntegerRandomRangeGenerator(b[0], b[1])
    ;

    return function(a = 1){
        return new ColorRGB(redGenerator(), greenGenerator(), blueGenerator(), a);
    };
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