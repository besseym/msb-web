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

    static isEqual(c1: ColorHSL, c2: ColorHSL, checkAlpha=true){

        let hasSameValues = (c1.h == c2.h && c1.s == c2.s && c1.l == c2.l);
        if(checkAlpha){
            hasSameValues && (c1.a == c2.a);
        }
        return hasSameValues;
    }

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

    clone(): ColorHSL {
        return new ColorHSL(this.h, this.s, this.l, this.a);
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

export function rgbColorToHex(r, g, b) {

    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color components";

    if(r === 0 && g === 0 && b === 0){
        return "000000";
    }

    return ((r << 16) | (g << 8) | b).toString(16);
}

export class ColorRGB {

    static isEqual(c1: ColorRGB, c2: ColorRGB, checkAlpha=true){

        let hasSameValues = (c1.r == c2.r && c1.g == c2.g && c1.b == c2.b);
        if(checkAlpha){
            hasSameValues && (c1.a == c2.a);
        }
        return hasSameValues;
    }

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

    clone(): ColorRGB {
        return new ColorRGB(this.r, this.g, this.b, this.a);
    }

    toArray(): number[] {
        return [this.r, this.g, this.b, this.a];
    }

    toString(): string {

        let r = this.r, g = this.g, b = this.b, a = this.a;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    toHex(){
        return rgbColorToHex(this.r, this.g, this.b);
    }
}

export function colorFactoryRGB(type="black"): ColorRGB {

    let color: ColorRGB;

    switch(type){

        //red colors
        case "indianred":
            color = new ColorRGB(205, 92, 92); //#CD5C5C
            break;

        case "lightcoral":
            color = new ColorRGB(240, 128, 128); //#F08080
            break;

        case "salmon":
            color = new ColorRGB(250, 128, 114); //#FA8072
            break;

        case "darksalmon":
            color = new ColorRGB(233, 150, 122); //#E9967A
            break;

        case "lightsalmon":
            color = new ColorRGB(255, 160, 122); //#FFA07A
            break;

        case "crimson":
            color = new ColorRGB(220, 20, 60); //#DC143C
            break;

        case "red":
            color = new ColorRGB(255, 0, 0); //#FF0000
            break;

        case "firebrick":
            color = new ColorRGB(178, 34, 34); //#B22222
            break;

        case "darkred":
            color = new ColorRGB(139, 0, 0); //#8B0000
            break;


        //pink colors
        case "pink":
            color = new ColorRGB(255, 192, 203); //#FFC0CB
            break;

        case "lightpink":
            color = new ColorRGB(255, 182, 193); //#FFB6C1
            break;

        case "hotpink":
            color = new ColorRGB(255, 105, 180); //#FF69B4
            break;

        case "deeppink":
            color = new ColorRGB(255, 20, 147); //#FF1493
            break;

        case "mediumvioletred":
            color = new ColorRGB(199, 21, 133); //#C71585
            break;

        case "palevioletred":
            color = new ColorRGB(219, 112, 147); //#DB7093
            break;

        //orange colors
        case "coral":
            color = new ColorRGB(255, 127, 80); //#FF7F50
            break;

        case "tomato":
            color = new ColorRGB(255, 99, 71); //#FF6347
            break;

        case "orangered":
            color = new ColorRGB(255, 69, 0); //#FF4500
            break;

        case "darkorange":
            color = new ColorRGB(255, 140, 0); //#FF8C00
            break;

        case "orange":
            color = new ColorRGB(255, 165, 0); //#FFA500
            break;

        //yellow colors
        case "gold":
            color = new ColorRGB(255, 215, 0); //#FFD700
            break;

        case "yellow":
            color = new ColorRGB(255, 255, 0); //#FFFF00
            break;

        case "khaki":
            color = new ColorRGB(240, 230, 140); //#F0E68C
            break;

        case "darkkhaki":
            color = new ColorRGB(189, 183, 107); //#BDB76B
            break;

        //purple colors
        case "lavender":
            color = new ColorRGB(230, 230, 250); //#E6E6FA
            break;

        case "fuchsia":
            color = new ColorRGB(255, 0, 255); //#FF00FF
            break;

        case "blueviolet":
            color = new ColorRGB(138, 43, 226); //#8A2BE2
            break;

        case "purple":
            color = new ColorRGB(128, 0, 128); //#800080
            break;

        case "indigo":
            color = new ColorRGB(75, 0, 130); //#4B0082
            break;

        //green colors
        case "chartreuse":
            color = new ColorRGB(127, 255, 0); //#7FFF00
            break;

        case "lime":
            color = new ColorRGB(0, 255, 0); //#00FF00
            break;

        case "seagreen":
            color = new ColorRGB(46, 139, 87); //#2E8B57
            break;

        case "forestgreen":
            color = new ColorRGB(34, 139, 34); //#228B22
            break;

        case "green":
            color = new ColorRGB(0, 128, 0); //#008000
            break;

        case "olive":
            color = new ColorRGB(128, 128, 0); //#808000
            break;

        case "darkseagreen":
            color = new ColorRGB(143, 188, 139); //#8FBC8B
            break;

        case "teal":
            color = new ColorRGB(0, 128, 128); //#008080
            break;

        //blue colors
        case "cyan":
            color = new ColorRGB(0, 255, 255); //#00FFFF
            break;

        case "turquoise":
            color = new ColorRGB(64, 224, 208); //#40E0D0
            break;

        case "steelblue":
            color = new ColorRGB(70, 130, 180); //#4682B4
            break;

        case "powderblue":
            color = new ColorRGB(176, 224, 230); //#B0E0E6
            break;

        case "skyblue":
            color = new ColorRGB(135, 206, 235); //#87CEEB
            break;

        case "cornflowerblue":
            color = new ColorRGB(100, 149, 237); //#6495ED
            break;

        case "royalblue":
            color = new ColorRGB(65, 105, 225); //#4169E1
            break;

        case "blue":
            color = new ColorRGB(0, 0, 255); //#0000FF
            break;

        case "navy":
            color = new ColorRGB(0, 0, 128); //#000080
            break;

        case "midnightblue":
            color = new ColorRGB(25, 25, 112); //#191970
            break;

        //brown colors
        case "tan":
            color = new ColorRGB(210, 180, 140); //#D2B48C
            break;

        case "chocolate":
            color = new ColorRGB(210, 105, 30); //#D2691E
            break;

        case "sienna":
            color = new ColorRGB(160, 82, 45); //#A0522D
            break;

        case "brown":
            color = new ColorRGB(165, 42, 42); //#A52A2A
            break;

        case "maroon":
            color = new ColorRGB(128, 0, 0); //#800000
            break;

        //white colors
        case "white":
            color = new ColorRGB(255, 255, 255); //#FFFFFF
            break;

        case "ghostwhite":
            color = new ColorRGB(248, 248, 255); //#F8F8FF
            break;

        case "whitesmoke":
            color = new ColorRGB(245, 245, 245); //#F5F5F5
            break;

        case "ivory":
            color = new ColorRGB(255, 255, 240); //#FFFFF0
            break;

        //gray color names
        case "gainsboro":
            color = new ColorRGB(220, 220, 220); //#DCDCDC
            break;

        case "lightgray":
            color = new ColorRGB(211, 211, 211); //#D3D3D3
            break;

        case "silver":
            color = new ColorRGB(192, 192, 192); //#C0C0C0
            break;

        case "darkgray":
            color = new ColorRGB(169, 169, 169); //#A9A9A9
            break;

        case "gray":
            color = new ColorRGB(128, 128, 128); //#808080
            break;

        case "dimgray":
            color = new ColorRGB(105, 105, 105); //#696969
            break;

        case "black":
            color = new ColorRGB(0, 0, 0); //#000000
            break;

        default:
            break;
    }

    return color;
}

export function createNamedPaletteGeneratorRGB(colorNameArray=[]){

    let colorName,
        color, colorArray = [],
        indexGenerator
    ;

    for(colorName of colorNameArray){
        color = colorFactoryRGB(colorName);
        if(color){
            colorArray.push(color);
        }
    }

    indexGenerator = createIntegerRandomRangeGenerator(0, colorArray.length - 1);

    return function(alpha = 1.0){
        color = colorArray[indexGenerator()];
        color.alpha = alpha;
        return color;
    };
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