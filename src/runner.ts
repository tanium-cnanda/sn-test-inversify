import { getContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import { gs } from "@servicenow/glide";


export class Runner{


    public execute(){
        const myContainer = getContainer();
        const ninja = myContainer.get<Warrior>(TYPES.Warrior);
        gs.info(JSON.stringify(ninja));
        return ninja;
    }
}