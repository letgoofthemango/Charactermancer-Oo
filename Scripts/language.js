const LanguageNames = {
    ABYSSAL: "Abyssal",
    AURAN: "Auran",
    AQUAN:"Aquan",
    CELESTIAL: "Celestial",
    COMMON: "Common",
    DEEPSPEECH: "Deep Speech",
    DRACONIC: "Draconic",
    DRUIDIC: "Druidic",
    DWARVISH: "Dwarvish",
    ELVISH: "Elvish",
    GIANT: "Giant",
    GNOMISH: "Gnomish",
    GOBLIN: "Goblin",
    HALFLING: "Halfling",
    IGNAN: "Ignan",
    INFERNAL: "Infernal",
    ORC: "Orc",
    PRIMORDIAL: "Primordial",
    SYLVAN: "Sylvan",
    TERRAN: "Terran",
    THIEVES: "Thieves' Cant",
    UNDERCOMMON: "Undercommon"
}

class Language {
    constructor(name) {
        this.name = name;
        this.proficiency = false;
    }
}

class LanguageView {

    get view() {
        return // <span>
    }
}

// ignore rest

function resetLanguageProficiencies() {
    abyssal.proficiency = false;
    auran.proficiency = false;
    aquan.proficiency = false;
    celestial.proficiency = false;
    deepspeech.proficiency = false;
    draconic.proficiency = false;
    druidic.proficiency = false;
    dwarvish.proficiency = false;
    elvish.proficiency = false;
    giant.proficiency = false;
    gnomish.proficiency = false;
    goblin.proficiency = false;
    halfling.proficiency = false;
    ignan.proficiency = false;
    infernal.proficiency = false;
    orc.proficiency = false;
    primordial.proficiency = false;
    sylvan.proficiency = false;
    terran.proficiency = false;
    thieves.proficiency = false;
    undercommon.proficiency = false;
}