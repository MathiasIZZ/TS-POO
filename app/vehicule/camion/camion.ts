import { Vehicule } from "../vehicule";
import { Moteur } from "../../moteur/moteur";

export class Camion extends Vehicule{

    private _cabine: boolean;
    private _tempsDePause: number;


    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, cabine: boolean, tempsDePause: number) {
        super(marque, couleur, prix, moteur);
        this._cabine = cabine;
        this._tempsDePause = tempsDePause;
    }


    get cabine(): boolean {
        return this._cabine;
    }

    set cabine(value: boolean) {
        this._cabine = value;
    }

    get tempsDePuase(): number {
        return this.tempsDePuase;
    }

    set tempsDePuase(value: number) {
        this.tempsDePuase = value;
    }
}