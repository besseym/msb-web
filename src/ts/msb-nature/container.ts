
import {Container} from "../msb-math";
import {NatureMover} from "./mover";

export class NatureContainer {

    constrainBounce: boolean;
    constrainPassThrough: boolean;

    constructor(public container: Container){

        this.constrainBounce = false;
        this.constrainPassThrough = false;
    }

    contain(mover: NatureMover){

        if(this.constrainBounce && this.container){
            mover.applyBounce(this.container);
        }
        else if(this.constrainPassThrough && this.container){
            mover.applyPassThrough(this.container);
        }
    }
}