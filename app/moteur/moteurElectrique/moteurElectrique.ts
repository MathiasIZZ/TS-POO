import {Moteur} from "../moteur";

export class MoteurElectrique extends Moteur{


    constructor(vitesse: number, kilometrage: number) {
        super(vitesse, kilometrage);
    }

    public carburant() {
        console.log("mets moi une grosse batterie");
    }
}