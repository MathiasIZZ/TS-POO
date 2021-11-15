import { Moteur } from "../moteur/moteur";
import {StationEssence} from "../stationEssence/stationEssence";

export class Vehicule {

    private _marque: string;
    private _couleur: string;
    private _prix: number;
    private _moteur: Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {

        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }

    faireLePleinDessence(station: StationEssence, nbLitre: number) {
        console.log(`Plein effectué avec de l'essence: vous avez pris: ${nbLitre} à la station de la ville de: ${station.ville}`);

        console.log(`Total: ${nbLitre * station.prixEssence} `);
    }
    get couleur(): string {
        return this._couleur;
    }

    set couleur(value: string) {
        this._couleur = value;
    }

    get prix(): number {
        return this._prix;
    }

    set prix(value: number) {
        this._prix = value;
    }

    get moteur(): Moteur {
        return this._moteur;
    }

    set moteur(value: Moteur) {
        this._moteur = value;
    }

    public get marque() {
        return this._marque;
    }
}