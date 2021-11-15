import {Moto} from "./app/vehicule/moto/moto";
import {Moteur} from "./app/moteur/moteur";
import {MoteurEssence} from "./app/moteur/moteurEssence/moteurEssence";
import {Camion} from "./app/vehicule/camion/camion";
import {MoteurDiesel} from "./app/moteur/moteurDiesel/moteurDiesel";
import {MoteurElectrique} from "./app/moteur/moteurElectrique/moteurElectrique";
import {Voiture} from "./app/vehicule/voiture/voiture";
import {StationEssence} from "./app/stationEssence/stationEssence";


let moteurEssence: MoteurEssence = new MoteurEssence(360, 25);
let moteurDiesel: MoteurDiesel = new MoteurDiesel(145, 35000);
let moteurElectrique: MoteurElectrique = new MoteurElectrique(190, 0);

let moto1 : Moto = new Moto(
    "ducati",
    "rouge",
    25000,
    moteurEssence,
    6,
    1200
    );

    let camion1: Camion = new Camion(
        "Hymer",
        "Vert",
        17000,
        moteurDiesel,
        false,
        15
    );

    let stationEssence: StationEssence = new StationEssence(8, 11, "Paris");

    let voiture1: Voiture = new Voiture("Peugeot", "Noir", 45000, moteurElectrique, true, 5, "Zoe");

    moteurEssence.carburant();
    moto1.moteur;

    moto1.faireLePleinDessence(stationEssence, 50);




