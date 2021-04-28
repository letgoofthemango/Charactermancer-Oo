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
    set prof(value) {
        this.proficiency = value;
    }
}

let abyssal = new Language(LanguageNames.ABYSSAL);
let auran = new Language(LanguageNames.ABYSSAL);
let aquan = new Language(LanguageNames.ABYSSAL);
let celestial = new Language(LanguageNames.ABYSSAL);
let common = new Language(LanguageNames.ABYSSAL);
let deepspeech = new Language(LanguageNames.ABYSSAL);
let draconic = new Language(LanguageNames.ABYSSAL);
let druidic = new Language(LanguageNames.ABYSSAL);
let dwarvish = new Language(LanguageNames.ABYSSAL);
let elvish = new Language(LanguageNames.ABYSSAL);
let giant = new Language(LanguageNames.ABYSSAL);
let gnomish = new Language(LanguageNames.ABYSSAL);
let goblin = new Language(LanguageNames.ABYSSAL);
let halfling = new Language(LanguageNames.ABYSSAL);
let ignan = new Language(LanguageNames.ABYSSAL);
let infernal = new Language(LanguageNames.ABYSSAL);
let orc = new Language(LanguageNames.ABYSSAL);
let primordial = new Language(LanguageNames.ABYSSAL);
let sylvan = new Language(LanguageNames.ABYSSAL);
let terran = new Language(LanguageNames.ABYSSAL);
let thieves = new Language(LanguageNames.ABYSSAL);
let undercommon = new Language(LanguageNames.ABYSSAL);

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