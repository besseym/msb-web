/**
 * Created by michaelbessey on 8/27/16.
 */

export class Font {

    style: string;

    constructor(public size = 30, public family = "Arial") {

        this.style = "normal";
    }

    toString(): string {

        let f = this.family, sz = this.size, stl = this.style;
        return `${stl} ${sz}px ${f}`;
    }
}
