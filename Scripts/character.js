const CharacterClasses = {
    BARBARIAN: "Barabrian",
    BARD: "Bard",
    CLERIC: "Cleric",
    DRUID: "Druid",
    FIGHTER: "Fighter",
    MONK: "Monk",
    PALADIN: "Paladin",
    RANGER: "Ranger",
    ROGUE: "Rogue",
    SORCERER: "Sorcerer",
    WARLOCK: "Warlock",
    WIZARD: "Wizard"
}

class CharacterClass {
    constructor() {
        // name
        // hitDice
        // hasShield
        // subClass
        // toolProficiencies;
        this.languageProficiencies = languages.map(x => x); //SYNTHAX von eine Map daraus machen!!!!! udn auch für skills, tools, spells
        this.skillProficiencies = skills.map(x => x); //SYNTHAX von eine Map daraus machen!!!!! udn auch für skills, tools, spells
    }
    getLanguage(languageName) {
        for (const language of charClass.languageProficiencies) {
            if (language.name === languageName) {
                return language
            }
        }
    }
    
    getSkill(skillName) {
        for (const skill of charClass.skillProficiencies) {
            if (skill.name === skillName) {
                return skill
            }
        }
    }
}
let charClass = new CharacterClass();


// class Barbarian extends CharacterClass {
//     addToolProficiency(
//         // TODo
//     )
// }

class Character {
    constructor() {
        this.characterName;
        this.playerName;
        this.characterLevel = 1;
        // this.selectedCharacterClass;
        // this.characterSubClass;
        this.numberOfSkillsToChoose;
        // this.hasShield;
        this.armorClass;
        this.characterSpeed;
        this.characterVision;
        this.characterFightingStyle;
        this.characterPossibleToolChoices;
        this.characterMaxToolProficiencies;
        this.maxLanguageProficiencies;
        this.characterFeatures;
        this.characterEquipment;
        this.characterFeats;
        this.characterAttacks;
        this.firstLevelSpellSlots;
        this.characterHitpoints;
        // this.hitDice = 12;
        this.characterRace;
        this.characterAlignment;
        this.characterAge;
        this.characterHeight;
        this.characterWeight;
        this.characterEyesColor;
        this.characterSkinColor;
        this.characterHairColor;
        this.characterBackstory;
        this.characterBackground;
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        };

        // this.toolProficiencies = [
        //     alchemist,
        //     bagpipes,
        //     brewer,
        //     calligrapher,
        //     cards,
        //     carpenter,
        //     cartographer,
        //     cobbler,
        //     cook,
        //     dice,
        //     disguise,
        //     dragonante,
        //     dragonchess,
        //     drum,
        //     dulcimer,
        //     flute,
        //     forgery,
        //     glasblower,
        //     herbalism,
        //     horn,
        //     jewler,
        //     leatherworker,
        //     lute,
        //     lyre,
        //     mason,
        //     navigator,
        //     painter,
        //     pan,
        //     poisoner,
        //     potter,
        //     shawm,
        //     smith,
        //     thieves,
        //     tinker,
        //     vehicles,
        //     viol,
        //     weaver,
        //     woodworker
        // ];
    }

    // this.spellsKnown= mapping synthax!!!


    // ----------------------------------------------------SKILLS-------------------------------------------------------------------------------


    resetSkillProficiencies() {
        this.skillProficiencies.forEach(element => {
            element.proficiency = SkillLevel.UNSKILLED;
        });
        console.log("Skills reset.")
    }
    // ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

    // getTool(toolName) {
    //     for (const tool of this.toolProficiencies) {
    //         if (tool.name === toolName) {
    //             return tool
    //         }
    //     }
    // }
    resetToolProficiencies() {
        this.toolProficiencies.forEach(element => {
            element.proficiency = false;
        });
        console.log("Tool proficiencies reset.")
    }


    // ----------------------------------------------------LANGUAGES-------------------------------------------------------------------------------

    getLanguage(languageName) {
        for (const language of this.languageProficiencies) {
            if (language.name === languageName) {
                return language
            }
        }
    }
    // ----------------------------------------------------ARMOR-------------------------------------------------------------------------------
    resetArmorProficiencies() {
        char.armorProficiencies.shields = false;
        char.armorProficiencies.heavy = false;
        char.armorProficiencies.medium = false;
        char.armorProficiencies.light = false;
        char.armorProficiencies.none = true;
    }



















    get initiativeMod() { return dexterity.mod }
    get passivePerception() { return 10 + wisdom.mod }
    get hitpoints() {
        this.characterHitpoints = this.hitDice + constitution.mod;
        return this.characterHitpoints;
    }



    setCharacterSkillsNumberToChoose(number) {
        char.numberOfSkillsToChoose = number;
    }



}
let char = new Character();







// ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

function setToolproficiency(number, ...args) {
    switch (number) {
        case 0:
            args.forEach((arg) => {
                char.toolProficiencies.arg = false
            })
            break;
        case 1:
            args.forEach((arg) => {
                char.languageProficiencies.arg = true
            })
            break;

        default:
            break;
    }
}

// function setLangProf(languageName, prof) {
//     char.languageProficiencies[languageName] = prof
// }

// setLangProf("Abyssal", true);