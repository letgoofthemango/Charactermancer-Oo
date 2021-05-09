const LanguageNames = {
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

let abyssal = new Language(LanguageNames.ABYSSAL, "Typical speakers: Demons; Script: Infernal");
let auran = new Language(LanguageNames.AURAN, "Typical speakers: demons; Script: Infernal");
let aquan = new Language(LanguageNames.AQUAN, "Typical speakers: demons; Script: Infernal");
let celestial = new Language(LanguageNames.CELESTIAL, "Typical speakers: Celestials; Script: Celestial");
let common = new Language(LanguageNames.COMMON, "Typical speakers: Humans; Script: Common");
let deepspeech = new Language(LanguageNames.DEEPSPEECH, "Typical speakers: Mind Flayers, beholders; Script: -");
let draconic = new Language(LanguageNames.DRACONIC, "Typical speakers: Dragons, dragonborn; Script: Draconic");
let druidic = new Language(LanguageNames.DRUIDIC, "Typical speakers: Druids, treants; Script: -");
let dwarvish = new Language(LanguageNames.DWARVISH, "Typical speakers: Dwarves; Script: Dwarvish");
let elvish = new Language(LanguageNames.ELVISH, "Typical speakers: Elves; Script: Elvish");
let giant = new Language(LanguageNames.GIANT, "Typical speakers: Ogres, giants; Script: Dwarvish");
let gnomish = new Language(LanguageNames.GNOMISH, "Typical speakers: Gnomes; Script: Dwarvish");
let goblin = new Language(LanguageNames.GOBLIN, "Typical speakers: Goblinoids; Script: Dwarvish");
let halfling = new Language(LanguageNames.HALFLING, "Typical speakers: Halflings; Script: Common");
let ignan = new Language(LanguageNames.IGNAN, "Typical speakers: demons; Script: Infernal");
let infernal = new Language(LanguageNames.INFERNAL, "Typical speakers: Devils; Script: Infernal");
let orc = new Language(LanguageNames.ORC, "Typical speakers: Orcs; Script: Dwarvish");
let primordial = new Language(LanguageNames.PRIMORDIAL, "Typical speakers: Elementals; Script: Dwarvish");
let sylvan = new Language(LanguageNames.SYLVAN, "Typical speakers: Fey creatures; Script: Elvish");
let terran = new Language(LanguageNames.TERRAN, "Typical speakers: Elementals; Script: Dwarvish");
let thievesCant = new Language(LanguageNames.THIEVES, "Typical speakers: Assassins, Rogues; Script: -");
let undercommon = new Language(LanguageNames.UNDERCOMMON, "Typical speakers: Underdark traders; Script: Elvish");

