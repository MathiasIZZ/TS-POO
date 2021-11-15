import {Moteur} from "../moteur";

export class MoteurEssence extends Moteur {


    constructor(vitesse: number, kilometrage: number) {
        super(vitesse, kilometrage);
    }

    public carburant() {
        console.log("mhhh je bois de l'essence");
    }
}