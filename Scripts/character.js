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

const ArmorClass = {
    NONE: 0,
    LIGHT: 1,
    MEDIUM: 2,
    HEAVY: 3
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
        this.characterFeats;
        this.abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma]
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.armorClass;
        this.armorType = ArmorClass.NONE;
        this.hasShield = false;
        // this.characterFightingStyle;
        this.maxLanguageProficiencies;
        this.characterAttacks;
        this.characterEquipment;
        // this.cantripSpells#;
        // this.firstLevelSpells#;
        // this.firstLevelSpellSlots;
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
    get AC() {
        if (this.armorType === ArmorClass.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorClass.NONE && this.hasShield == true) {
            return 10 + dexterity.mod + 2
        } else if (this.armorType === ArmorClass.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else if (this.armorType === ArmorClass.LIGHT && this.hasShield == true) {
            return this.armorClass + dexterity.mod + 2
        } else if (this.armorType === ArmorClass.MEDIUM && this.hasShield == false) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
        } else if (this.armorType === ArmorClass.MEDIUM && this.hasShield == true) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2) + 2
        } else if (this.armorType === ArmorClass.HEAVY && this.hasShield == false) {
            return this.armorClass
        } else if (this.armorType === ArmorClass.HEAVY && this.hasShield == true) {
            return this.armorClass + 2
        } else {
            console.log("ERROR WHILE CALCULATING AC!")
        }
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
    setSaves(...args) {
        args.forEach(save => save.proficiency = true)
    }
    getAbility(abilityName) {
        for (const ability of this.abilities) {
            if (ability.name === abilityName) {
                return ability
            }
        }
    }



    // ----------------------------------------------------SKILLS-------------------------------------------------------------------------------
    setPossibleSkills(...args) {
        args.forEach(skill => skill.possibleSkill = true)
    }

    resetSkillProficiencies() {
    
        this.skills.forEach(element => {
            element.proficiency = SkillLevel.UNSKILLED;
        });
        console.log("Skills reset.")
    }

    get possibleSkills() {
        return this.skills.filter(element => element.possibleSkill === true)
    }
    // ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

    resetToolProficiencies() {
        this.tools.forEach(element => {
            element.proficiency = false;
        });
        console.log("Tool proficiencies reset.")
    }
    set maxTools(number) {
        this.numberOfToolsToChoose = number;
    }

    // ----------------------------------------------------LANGUAGES-------------------------------------------------------------------------------
    set maxLanguages(number) {
        this.numberOfLanguagesToChoose = number;
    }
    // ----------------------------------------------------ARMOR-------------------------------------------------------------------------------
    resetArmorProficiencies() {
        this.armorProficiencies.shields = false;
        this.armorProficiencies.heavy = false;
        this.armorProficiencies.medium = false;
        this.armorProficiencies.light = false;
        this.armorProficiencies.none = true;
    }
    // ----------------------------------------------------WEAPONS-------------------------------------------------------------------------------
    setWeaponsProficiency(weapon) {
        weapons.forEach(element => {
            if (element.name === weapon) {
                element.proficiency = true;
            }
        });
    }
    resetWeapons() {
        weapons.forEach(element => {
            element.proficiency = false;
        });
    }
    setSimpleWeapons() {
        weapons.forEach(element => {
            if (element.simple) {
                element.proficiency = true;
            }
        });
    }
    setMartialWeapons() {
        weapons.forEach(element => {
            if (element.martial) {
                element.proficiency = true;
            }
        });
    }
}
let char = new Character();