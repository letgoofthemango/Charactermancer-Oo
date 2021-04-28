const BackgroundNames = {
    ACOYLTE: "Acolyte",
    CHARLATAN: "Charlatan",
    CRIMINAL: "Criminal",
    ENTERTAINER: "Entertainer",
    GLADIATOR: "Entertainer (Gladiator)",
    FOLKHERO: "Folk hero",
    GUILDARTISAM: "Guild artisan",
    GUILDMERCHANT: "Guild merchant",
    HERMIT: "Hermit",
    NOBLE: "Noble",
    KNIGHT: "Noble (Knight)",
    Outlander: "Outlander",
    SAGE: "Sage",
    SAILOR: "Sailor",
    PIRATE: "Sailor (Pirate)",
    SOLDIER: "Soldier",
    URCHIN: "Urchin"
}

class Background {

    constructor(name) {
        this.name = name;
        this.skillproficiency1 = skillproficiency1;
        this.skillproficiency2 = skillproficiency2;
        this.toolproficiency1 = toolproficiency1;
        this.toolproficiency2 = toolproficiency2;
        this.extraToolProficiency = extraToolProficiency;
        this.extraLanguages = extraLanguages;
        this.equipment = equipment;
    }
}