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
    constructor(name,description) {
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

// ignore rest

let languages = [
    new Language(LanguageNames.ABYSSAL,"Typical speakers: Demons; Script: Infernal"),
    // new Language(LanguageNames.AURAN,"Typical speakers: demons; Script: Infernal"),
    // new Language(LanguageNames.AQUAN,"Typical speakers: demons; Script: Infernal"),
    new Language(LanguageNames.CELESTIAL,"Typical speakers: Celestials; Script: Celestial"),
    new Language(LanguageNames.COMMON,"Typical speakers: Humans; Script: Common"),
    new Language(LanguageNames.DEEPSPEECH,"Typical speakers: Mind Flayers, beholders; Script: -"),
    new Language(LanguageNames.DRACONIC,"Typical speakers: Dragons, dragonborn; Script: Draconic"),
    new Language(LanguageNames.DRUIDIC,"Typical speakers: Druids, treants; Script: -"),
    new Language(LanguageNames.DWARVISH,"Typical speakers: Dwarves; Script: Dwarvish"),
    new Language(LanguageNames.ELVISH,"Typical speakers: Elves; Script: Elvish"),
    new Language(LanguageNames.GIANT,"Typical speakers: Ogres, giants; Script: Dwarvish"),
    new Language(LanguageNames.GNOMISH,"Typical speakers: Gnomes; Script: Dwarvish"),
    new Language(LanguageNames.GOBLIN,"Typical speakers: Goblinoids; Script: Dwarvish"),
    new Language(LanguageNames.HALFLING,"Typical speakers: Halflings; Script: Common"),
    // new Language(LanguageNames.IGNAN,"Typical speakers: demons; Script: Infernal"),
    new Language(LanguageNames.INFERNAL,"Typical speakers: Devils; Script: Infernal"),
    new Language(LanguageNames.ORC,"Typical speakers: Orcs; Script: Dwarvish"),
    new Language(LanguageNames.PRIMORDIAL,"Typical speakers: Elementals; Script: Dwarvish"),
    new Language(LanguageNames.SYLVAN,"Typical speakers: Fey creatures; Script: Elvish"),
    // new Language(LanguageNames.TERRAN,"Typical speakers: demons; Script: Infernal"),
    new Language(LanguageNames.THIEVES,"Typical speakers: Assassins, Rogues; Script: -"),
    new Language(LanguageNames.UNDERCOMMON,"Typical speakers: Underdark traders; Script: Elvish")
];

// function resetLanguageProficiencies() {
//     abyssal.proficiency = false;
//     auran.proficiency = false;
//     aquan.proficiency = false;
//     celestial.proficiency = false;
//     deepspeech.proficiency = false;
//     draconic.proficiency = false;
//     druidic.proficiency = false;
//     dwarvish.proficiency = false;
//     elvish.proficiency = false;
//     giant.proficiency = false;
//     gnomish.proficiency = false;
//     goblin.proficiency = false;
//     halfling.proficiency = false;
//     ignan.proficiency = false;
//     infernal.proficiency = false;
//     orc.proficiency = false;
//     primordial.proficiency = false;
//     sylvan.proficiency = false;
//     terran.proficiency = false;
//     thieves.proficiency = false;
//     undercommon.proficiency = false;
// }

// function getLanguage(languageName) {
//     for (const language of languages) {
//         if (language.name === languageName) {
//             return language
//         }
//     }
// }

