"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }
    Object.defineProperty(Vehicule.prototype, "couleur", {
        get: function () {
            return this._couleur;
        },
        set: function (value) {
            this._couleur = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (value) {
            this._prix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "moteur", {
        get: function () {
            return this._moteur;
        },
        set: function (value) {
            this._moteur = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "marque", {
        get: function () {
            return this._marque;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
