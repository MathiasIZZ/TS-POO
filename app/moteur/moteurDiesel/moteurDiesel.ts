import {Moteur} from "../moteur";

export class MoteurDiesel extends Moteur {


    constructor(vitesse: number, kilometrage: number) {
        super(vitesse, kilometrage);
    }

    public carburant() {
        console.log("huile de friture poto");
    }
}