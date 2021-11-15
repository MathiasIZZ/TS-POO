export class StationEssence {

    private _prixEssence: number;
    private _prixDiesel: number;
    private _ville: string;


    constructor(prixEssence: number, prixDiesel: number, ville: string) {
        this._prixEssence = prixEssence;
        this._prixDiesel = prixDiesel;
        this._ville = ville;

    }


    get ville(): string {
        return this._ville;
    }

    set ville(value: string) {
        this._ville = value;
    }

    get prixEssence(): number {
        return this._prixEssence;
    }

    set prixEssence(value: number) {
        this._prixEssence = value;
    }

    get prixDiesel(): number {
        return this._prixDiesel;
    }

    set prixDiesel(value: number) {
        this._prixDiesel = value;
    }
}