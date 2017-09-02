import {
    DimScene
} from "../../msb-gl";

import {
    NatureDimActor
} from "./actor";

import {
    NatureContainer
} from "../container";

export class NatureDimScene {

    scene;
    actorArray;
    container: NatureContainer;

    constructor(){

        this.scene = new DimScene();
        this.actorArray = [];
    }

    addActor(actor: NatureDimActor){

        this.actorArray.push(actor);
        this.scene.modelArray.push(actor.body);
    }

    update(){

        let actor: NatureDimActor;
        for (actor of this.actorArray) {
            actor.update();

            if(this.container){
                this.container.contain(actor);
            }
        }
    }

    render(gl: WebGLRenderingContext){

        this.scene.render(gl);
    }

}