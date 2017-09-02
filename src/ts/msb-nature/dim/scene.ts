import {
    DimScene,
    DimSceneBase,
    DimSceneData
} from "../../msb-gl";

import {
    NatureDimActor
} from "./actor";

import {
    NatureContainer
} from "../container";

export class NatureDimScene extends DimSceneBase {

    actorArray;
    container: NatureContainer;

    constructor(){

        super();
        this.actorArray = [];
    }

    getSceneData(): DimSceneData {

        let actor: NatureDimActor,
            sceneData = new DimSceneData();

        for (actor of this.actorArray) {
            sceneData.addModelData(actor.model.toData());
        }

        return sceneData;
    }

    updateRender(gl: WebGLRenderingContext){

        let elementOffset = 0,
            actor: NatureDimActor;

        for (actor of this.actorArray) {

            actor.update();

            if(this.container){
                this.container.contain(actor.mover);
            }

            elementOffset = this.renderModel(gl, actor.model, elementOffset);
        }
    }

}