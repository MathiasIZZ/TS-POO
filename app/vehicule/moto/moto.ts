import {Vehicule} from "../vehicule";
import {Moteur} from "../../moteur/moteur";

export class Moto extends Vehicule{

    private _cylindre: number;
    private _puissance: number;


    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, cylindre: number, puissance: number) {
        super(marque, couleur, prix, moteur);
        this._cylindre = cylindre;
        this._puissance = puissance;

    }

    get cylindre(): number {
        return this._cylindre;
    }

    set cylindre(value: number) {
        this._cylindre = value;
    }

    get puissance(): number {
        return this._puissance;
    }

    set puissance(value: number) {
        this._puissance = value;
    }

}