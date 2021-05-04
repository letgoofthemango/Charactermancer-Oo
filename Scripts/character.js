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

class Character {
    constructor() {
        this.characterName;
        this.playerName;
        this.characterLevel = 1;
        this.characterSubClass;
        this.characterHitpoints;
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
        this.languages = [abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon];
        this.skills = [acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival];
        this.tools = [alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigator, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver];
    }

    get hitpoints() {
        return this.hitDice + constitution.mod;
    }

    // getters für diverse sachen von hitpoints etc. im default hier in der Klasse deklarieren und dann in den einzelnen Characterclasses redeklarieren!!!


    // this.spellsKnown= mapping synthax!!!


    // ----------------------------------------------------SKILLS-------------------------------------------------------------------------------


    resetSkillProficiencies() {
        this.skills.forEach(element => {
            element.proficiency = SkillLevel.UNSKILLED;
        });
        console.log("Skills reset.")
    }

    getSkill(skillName) {
        for (const skill of this.skills) {
            if (skill.name === skillName) {
                return skill
            }
        }
    }
    // ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

    resetToolProficiencies() {
        this.tools.forEach(element => {
            element.proficiency = false;
        });
        console.log("Tool proficiencies reset.")
    }
    getTool(toolName) {
        for (const tool of this.tools) {
            if (tool.name === toolName) {
                return tool
            }
        }
    }

    // ----------------------------------------------------LANGUAGES-------------------------------------------------------------------------------

    getLanguage(languageName) {
        for (const language of this.languages) {
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


class Barbarian extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.saveProficiencies = {
            strength: false,
            dexterity: false,
            constitution: false,
            intelligence: false,
            wisdom: false,
            charisma: false,
        }
        this.armorClass;
        this.hitDice = 12;
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
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
    }

    get AC() {
        return `${10 + constitution.mod + dexterity.mod} or ${10 + constitution.mod + dexterity.mod + 2} with shield.`
    }
}
let barb = new Barbarian();




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