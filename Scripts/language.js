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

// let abyssal = new Language(LanguageNames.ABYSSAL);
// let auran = new Language(LanguageNames.AURAN);
// let aquan = new Language(LanguageNames.AQUAN);
// let celestial = new Language(LanguageNames.CELESTIAL);
// let common = new Language(LanguageNames.COMMON);
// let deepspeech = new Language(LanguageNames.DEEPSPEECH);
// let draconic = new Language(LanguageNames.DRACONIC);
// let druidic = new Language(LanguageNames.DRUIDIC);
// let dwarvish = new Language(LanguageNames.DWARVISH);
// let elvish = new Language(LanguageNames.ELVISH);
// let giant = new Language(LanguageNames.GIANT);
// let gnomish = new Language(LanguageNames.GNOMISH);
// let goblin = new Language(LanguageNames.GOBLIN);
// let halfling = new Language(LanguageNames.HALFLING);
// let ignan = new Language(LanguageNames.IGNAN);
// let infernal = new Language(LanguageNames.INFERNAL);
// let orc = new Language(LanguageNames.ORC);
// let primordial = new Language(LanguageNames.PRIMORDIAL);
// let sylvan = new Language(LanguageNames.SYLVAN);
// let terran = new Language(LanguageNames.TERRAN);
// let thieves = new Language(LanguageNames.THIEVES);
// let undercommon = new Language(LanguageNames.UNDERCOMMON);

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