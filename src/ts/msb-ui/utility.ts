/**
 * Created by mm28969 on 4/23/17.
 */

import {Vector} from "../msb-math";

export function mouseElementLocation(mouse: MouseEvent, element: HTMLCanvasElement): Vector {

    let bbox: ClientRect = element.getBoundingClientRect(),
        x: number = (mouse.clientX - bbox.left) * (element.width  / bbox.width),
        y: number = (mouse.clientY - bbox.top)  * (element.height / bbox.height);

    return new Vector(x, y);
}