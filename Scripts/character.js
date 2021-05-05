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
        this.characterFeatures;
        this.abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma]
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
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
        this.numberOfLanguagesToChoose;
        this.skills = [acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival];
        this.numberOfSkillsToChoose;
        this.tools = [alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigator, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver];
        this.numberOfToolsToChoose;
    }

    get initiativeMod() { return dexterity.mod }
    get passivePerception() { return 10 + wisdom.mod }
    get hitpoints() {
        this.characterHitpoints = this.hitDice + constitution.mod;
        return this.characterHitpoints;
    }

    // getters für diverse sachen von hitpoints etc. im default hier in der Klasse deklarieren und dann in den einzelnen Characterclasses redeklarieren!!!


    // this.spellsKnown= mapping synthax!!!

    // ----------------------------------------------------Abilities-------------------------------------------------------------------------------
    resetAbilityScores() {
        this.abilities.forEach(element => {
            element.value = 8;
        });
    }
    resetSavingthrowProficiencies() {
        this.abilities.forEach(element => {
            element.proficiency = false;
        });
    }
    // getAbility(abilityName) {
    //     for (const ability of this.abilities) {
    //         if (ability.name === abilityName) {
    //             return ability
    //         }
    //     }
    // }



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
    set maxSkills(number) {
        this.numberOfSkillsToChoose = number;
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
    set maxTools(number) {
        this.numberOfToolsToChoose = number;
    }

    // ----------------------------------------------------LANGUAGES-------------------------------------------------------------------------------

    getLanguage(languageName) {
        for (const language of this.languages) {
            if (language.name === languageName) {
                return language
            }
        }
    }
    set maxLanguages(number) {
        this.numberOfLanguagesToChoose = number;
    }
    // ----------------------------------------------------ARMOR-------------------------------------------------------------------------------
    resetArmorProficiencies() {
        char.armorProficiencies.shields = false;
        char.armorProficiencies.heavy = false;
        char.armorProficiencies.medium = false;
        char.armorProficiencies.light = false;
        char.armorProficiencies.none = true;
    }


}
let char = new Character();


class Barbarian extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.armorClass;
        this.hitDice = 12;
        this.characterFightingStyle;
        this.characterPossibleToolChoices;
        this.characterMaxToolProficiencies;
        this.maxLanguageProficiencies;
        this.characterEquipment;
        this.characterFeats;
        this.characterAttacks;
        this.firstLevelSpellSlots;
        this.numberOfSkillsToChoose = 2;
    }

    get AC() {
        return 10 + constitution.mod + dexterity.mod
    }
}
let barb = new Barbarian();