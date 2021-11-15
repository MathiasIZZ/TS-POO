export class Moteur {

    private _vitesse: number;
    private _kilometrage: number;

    constructor(vitesse: number, kilometrage: number) {

        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }

    get vitesse(): number {
        return this._vitesse;
    }

    set vitesse(value: number) {
        this._vitesse = value;
    }

    get kilometrage(): number {
        return this._kilometrage;
    }

    set kilometrage(value: number) {
        this._kilometrage = value;
    }




}