export const LanguageNames = {
    ABYSSAL: "Abyssal",
    AURAN: "Auran",
    AQUAN: "Aquan",
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
    constructor(name, description) {
        this.name = name;
        this.proficiency = false;
        this.description = description;
    }
}

class LanguageView {

    get view() {
        return // <span>
    }
}

export let abyssal = new Language(LanguageNames.ABYSSAL, "Typical speakers: Demons; Script: Infernal"),
    auran = new Language(LanguageNames.AURAN, "Typical speakers: demons; Script: Infernal"),
    aquan = new Language(LanguageNames.AQUAN, "Typical speakers: demons; Script: Infernal"),
    celestial = new Language(LanguageNames.CELESTIAL, "Typical speakers: Celestials; Script: Celestial"),
    common = new Language(LanguageNames.COMMON, "Typical speakers: Humans; Script: Common"),
    deepspeech = new Language(LanguageNames.DEEPSPEECH, "Typical speakers: Mind Flayers, beholders; Script: -"),
    draconic = new Language(LanguageNames.DRACONIC, "Typical speakers: Dragons, dragonborn; Script: Draconic"),
    druidic = new Language(LanguageNames.DRUIDIC, "Typical speakers: Druids, treants; Script: -"),
    dwarvish = new Language(LanguageNames.DWARVISH, "Typical speakers: Dwarves; Script: Dwarvish"),
    elvish = new Language(LanguageNames.ELVISH, "Typical speakers: Elves; Script: Elvish"),
    giant = new Language(LanguageNames.GIANT, "Typical speakers: Ogres, giants; Script: Dwarvish"),
    gnomish = new Language(LanguageNames.GNOMISH, "Typical speakers: Gnomes; Script: Dwarvish"),
    goblin = new Language(LanguageNames.GOBLIN, "Typical speakers: Goblinoids; Script: Dwarvish"),
    halfling = new Language(LanguageNames.HALFLING, "Typical speakers: Halflings; Script: Common"),
    ignan = new Language(LanguageNames.IGNAN, "Typical speakers: demons; Script: Infernal"),
    infernal = new Language(LanguageNames.INFERNAL, "Typical speakers: Devils; Script: Infernal"),
    orc = new Language(LanguageNames.ORC, "Typical speakers: Orcs; Script: Dwarvish"),
    primordial = new Language(LanguageNames.PRIMORDIAL, "Typical speakers: Elementals; Script: Dwarvish"),
    sylvan = new Language(LanguageNames.SYLVAN, "Typical speakers: Fey creatures; Script: Elvish"),
    terran = new Language(LanguageNames.TERRAN, "Typical speakers: Elementals; Script: Dwarvish"),
    thievesCant = new Language(LanguageNames.THIEVES, "Typical speakers: Assassins, Rogues; Script: -"),
    undercommon = new Language(LanguageNames.UNDERCOMMON, "Typical speakers: Underdark traders; Script: Elvish");

