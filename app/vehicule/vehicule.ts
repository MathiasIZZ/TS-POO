import { Moteur } from "../moteur/moteur";

export class Vehicule {

    private marque: string; 
    private couleur: string; 
    private prix: number; 
    private moteur: Moteur; 

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {

        this.marque = marque; 
        this.couleur = couleur;
        this.prix = prix; 
        this.moteur = moteur; 

    }
}