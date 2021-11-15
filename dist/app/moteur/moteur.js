"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, kilometrage) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        get: function () {
            return this._vitesse;
        },
        set: function (value) {
            this._vitesse = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "kilometrage", {
        get: function () {
            return this._kilometrage;
        },
        set: function (value) {
            this._kilometrage = value;
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;
