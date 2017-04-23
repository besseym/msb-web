/**
 * Created on 11/13/16.
 */

import {createRandomRangeGenerator} from "../../msb-math/index";

export class ColorHSL {

    // static getRandom(): ColorHSL {
    //
    //     let integerRandomRangeGenerator = createIntegerRandomRangeGenerator(0, 101);
    //     return new ColorHSL(getIntegerRandomRange(0, 256),
    //         integerRandomRangeGenerator(), integerRandomRangeGenerator());
    // }

    constructor(public h: number, public s: number, public l: number, public a = 1.0) {
    }

    toArray(): number[] {
        return [this.h, this.s, this.l];
    }

    toString(): string {

        let h = this.h, s = this.s, l = this.l, a = this.a;
        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
}

export class ColorRGB {

    static getRandom(min: number = 0.0, max: number = 1.0): ColorRGB {

        let rangeRandomGenerator = createRandomRangeGenerator(min, max);
        return new ColorRGB(rangeRandomGenerator(),
            rangeRandomGenerator(), rangeRandomGenerator());
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