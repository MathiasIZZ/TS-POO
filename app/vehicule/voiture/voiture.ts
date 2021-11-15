import { Vehicule } from "../vehicule";
import { Moteur } from "../../moteur/moteur";

export class Voiture extends Vehicule{

    private _nom: string;
    private _assistee: boolean;
    private _nbPortes: number;


    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, assistee: boolean, nbPortes: number, nom: string) {
        super(marque, couleur, prix, moteur);
        this._assistee = assistee;
        this._nbPortes = nbPortes;
        this._nom = nom;
    }


    get nom(): string {
        return this._nom;
    }
    set nom(value: string) {
        this._nom = value;
    }
    get assistee(): boolean {
        return this._assistee;
    }
    set assistee(value: boolean) {
        this._assistee = value;
    }
    get nbPortes(): number {
        return this._nbPortes;
    }
    set nbPortes(value: number) {
        this._nbPortes = value;
    }
}