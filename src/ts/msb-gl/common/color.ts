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

    return function(alpha = 1.0){
        return new ColorHSL(hueGenerator(), saturationGenerator(), brightnessGenerator(), alpha);
    };
}

export function createFactoryIntegerColorHSL(h = [0, 256], s = [0, 100], l = [0, 100]): Function {

    let hueGenerator = createIntegerRandomRangeGenerator(h[0], h[1]),
        saturationGenerator = createIntegerRandomRangeGenerator(s[0], s[1]),
        brightnessGenerator = createIntegerRandomRangeGenerator(l[0], l[1])
    ;

    return function(alpha = 1.0){
        return new ColorHSL(hueGenerator(), saturationGenerator(), brightnessGenerator(), alpha);
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

    return function(alpha = 1.0){
        return new ColorRGB(redGenerator(), greenGenerator(), blueGenerator(), alpha);
    };
}

export function createFactoryIntegerColorRGB(r = [0, 256], g = [0, 256], b = [0, 256]): Function {

    let redGenerator = createIntegerRandomRangeGenerator(r[0], r[1]),
        greenGenerator = createIntegerRandomRangeGenerator(g[0], g[1]),
        blueGenerator = createIntegerRandomRangeGenerator(b[0], b[1])
    ;

    return function(alpha = 1.0){
        return new ColorRGB(redGenerator(), greenGenerator(), blueGenerator(), alpha);
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

//palettes

export function createPaletteGenerator(
    hueRange = [0, 360],
    saturationRange = [0, 100],
    brightnessRange = [0, 100]
){

    let i = 0,
        hueValueGenerator = createIntegerRandomRangeGenerator(hueRange[0], hueRange[1]),
        saturationValueGenerator = createIntegerRandomRangeGenerator(saturationRange[0], saturationRange[1]),
        brightnessValueGenerator = createIntegerRandomRangeGenerator(brightnessRange[0], brightnessRange[1])
    ;

    return function(alpha = 1.0){
        return new ColorHSL(hueValueGenerator(), saturationValueGenerator(), brightnessValueGenerator(), alpha);
    }
}

export function createPaletteGeneratorBright(lightness = 50){

    let paletteGenerator = createPaletteGenerator([0, 360], [25, 75], [lightness, lightness]);

    return function(alpha = 1.0){
        return paletteGenerator(alpha);
    }
}

export function createPaletteGeneratorVivid(saturation = 100){

    let paletteGenerator = createPaletteGenerator([0, 360], [saturation, saturation], [0, 50]);

    return function(alpha = 1.0){
        return paletteGenerator(alpha);
    }
}

export function createPaletteGeneratorMonochromaticSaturated(hue = 195){

    let saturationValueGenerator = createIntegerRandomRangeGenerator(50, 100);

    return function(){
        return new ColorHSL(hue, saturationValueGenerator(), 50);
    }
}

export function createPaletteGeneratorMonochromaticLightness(hue = 195){

    let brightnessValueGenerator = createIntegerRandomRangeGenerator(25, 50);

    return function(){
        return new ColorHSL(hue, 100, brightnessValueGenerator());
    }
}

export function createPaletteGeneratorGreyscale(){

    let brightnessValueGenerator = createIntegerRandomRangeGenerator(0, 100);

    return function(){
        return new ColorHSL(0, 0, brightnessValueGenerator());
    }
}

export function createPaletteGeneratorWarm(){

    let hueValueGenerator = createIntegerRandomRangeGenerator(0, 180);

    return function(){
        return new ColorHSL(hueValueGenerator(), 100, 50);
    }
}

export function createPaletteGeneratorCool(){

    let hueValueGenerator = createIntegerRandomRangeGenerator(180, 360);

    return function(){
        let hue = hueValueGenerator();
        return new ColorHSL(hue, 100, 50);
    }
}

export function createPaletteGeneratorCombo(count = 3, start = 45){

    let i = 0,
        indexGenerator,
        offset = 0,
        gap = Math.floor(360 / count),
        generators = []
    ;

    for(i = 0; i < count; i++){
        offset = i * gap + start;
        // generators.push(createMonochromaticSaturatedPaletteGenerator(offset));
        generators.push(createPaletteGeneratorMonochromaticLightness(offset));
    }

    indexGenerator = createIntegerRandomRangeGenerator(0, generators.length - 1);

    return function(){

        let index = indexGenerator(),
            color = generators[index]();

        return color;
    }
}