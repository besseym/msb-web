/**
 * Created by michaelbessey on 8/27/16.
 */

import {RasterRectangle} from "./rectangle";

export class RasterImage extends RasterRectangle {

    constructor(public image: HTMLImageElement) {

        super(image.width, image.height);
    }

    doDraw(context: CanvasRenderingContext2D): void {
        context.drawImage(this.image, 0, 0, this.width, this.height);
    }
}
