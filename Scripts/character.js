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
    constructor(character, hitdice, strengthSave, dexteritySave, constitutionSave, intelligenceSave, wisdomSave, charismaSave, lightProf, mediumProf, heavyProf, shieldsProf) {
        this.character = character;
        this.characterSubClass;
        this.saveProficiencies = {
            strength: strengthSave,
            dexterity: dexteritySave,
            constitution: constitutionSave,
            intelligence: intelligenceSave,
            wisdom: wisdomSave,
            charisma: charismaSave,
        }
        this.armorClass;
        this.characterHitpoints;
        this.hitDice = hitdice;
        this.characterFightingStyle;
        this.characterPossibleToolChoices;
        this.characterMaxToolProficiencies;
        this.maxLanguageProficiencies;
        this.characterFeatures;
        this.characterEquipment;
        this.characterFeats;
        this.characterAttacks;
        this.firstLevelSpellSlots;
        this.numberOfSkillsToChoose;
        this.languageProficiencies = languages.map(x => x);
        this.skillProficiencies = skills.map(x => x);
        this.toolProficiencies = tools.map(x => x);
        this.armorProficiencies = {
            none: true,
            light: lightProf,
            medium: mediumProf,
            heavy: heavyProf,
            shields: shieldsProf
        };
    }
    getLanguage(languageName) {
        for (const language of this.languageProficiencies) {
            if (language.name === languageName) {
                return language
            }
        }
    }

    getSkill(skillName) {
        for (const skill of this.skillProficiencies) {
            if (skill.name === skillName) {
                return skill
            }
        }
    }
    getTool(toolName) {
        for (const tool of this.toolProficiencies) {
            if (tool.name === toolName) {
                return tool
            }
        }
    }
}
let charClass = new CharacterClass();

class Barbarian extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor(character) {
        dfklsgöljidgfkljdmgfkl
        d
        asfg
        dfklsgöljidgfkljdmgfkldfs

    }



}

class Character {
    constructor() {
        this.characterName;
        this.playerName;
        this.characterLevel = 1;
        this.characterSpeed;
        this.characterVision;
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
    }

    // getters für diverse sachen von hitpoints etc. im default hier in der Klasse deklarieren und dann in den einzelnen Characterclasses redeklarieren!!!


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