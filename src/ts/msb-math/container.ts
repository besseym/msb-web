
import {Vector} from "./vector";

export class Container {

    constructor(public xMin: number, public xMax: number, public yMin: number,
                public yMax: number, public zMin?: number, public zMax?: number) {

    }

    isContained(point: Vector): boolean {

        let isContained: boolean =
            (point.x > this.xMin && point.x < this.xMax && point.y > this.yMin && point.y < this.yMax );
        if (this.hasRangeZ()) {
            isContained = isContained && point.z > this.zMin && point.z < this.zMax;
        }

        return isContained;
    }

    get width(): number {
        return this.xMax - this.xMin;
    }

    get height(): number {
        return this.yMax - this.yMin;
    }

    get depth(): number {
        return this.zMax - this.zMin;
    }

    hasRangeZ(): boolean {
        return (this.zMin !== undefined && this.zMax !== undefined);
    }
}