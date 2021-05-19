const CharacterClasses = {
    BARBARIAN: "Barbarian",
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
        this.name;
        this.playerName;
        this.level = 1;
        this.class;
        this.subClass;
        this.speed;
        this.vision;
        this.features;
        this.geats;
        this.abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma]
        this._armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.armorClass;
        this.armorType = ArmorType.NONE;
        this.hasShield = false;
        this.maxToolProficiencies;
        this.maxLanguageProficiencies;
        this.attacks;
        this.meleeBonus;
        this.rangedBonus = dexterity.mod;
        this.equipment;
        this._cantrips;
        this._firstLevelSpells;
        this.firstLevelSpellSlots;
        this.race;
        this.alignment;
        this.age;
        this.height;
        this.weight;
        this.eyesColor;
        this.skinColor;
        this.hairColor;
        this.backstory;
        this.background;
        this.languages = [abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon];
        this.numberOfLanguagesToChoose;
        this.skills = [acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival];
        this.maxSkillsProficiencies;
        this.tools = [alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigator, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver];
        this.numberOfToolsToChoose;
        this.inventory;
        this.copper;
        this.silver;
        this.gold;
    }


    get AC() {
        let ac = 0
        switch (this.armorType) {
            case ArmorType.NONE:
                ac = 10 + dexterity.mod
                break;
            case ArmorType.LIGHT:
                ac = this.armorClass + dexterity.mod
                break;
            case ArmorType.MEDIUM:
                ac = this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
                break;
            case ArmorType.HEAVY:
                ac = this.armorClass
                break;
            default:
                alert("ERROR WHILE CALCULATING AC!");
        }
        if (this.hasShield) {
            ac += 2
        }
        return ac;
    }
    get rangedAttackBonus() { return dexterity.mod }
    get meleeAttackBonus() { return strength.mod } // has to be implemented during the character creation process???????


    // ----------------------------------------------------Abilities-------------------------------------------------------------------------------
    get initiativeMod() { return dexterity.mod }
    get passivePerception() { return 10 + wisdom.mod }
    get hitpoints() {
        return this.hitDice + constitution.mod + this.race.hitpoints;
    }

    get armorProficiencies() {
        return {
            none: true,
            light: this.race.armorProficiencies.light || this._armorProficiencies.light, // race will be set by the controller during the creation process
            medium: this.race.armorProficiencies.medium || this._armorProficiencies.medium,
            heavy: this.race.armorProficiencies.heavy || this._armorProficiencies.heavy,
            shields: this.race.armorProficiencies.shields || this._armorProficiencies.shields,
        }
    }
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
    setSkillProficiencies(...args) {
        args.forEach(skill => skill.proficiency = 2)
    }
    resetSkillProficiencies() {
        this.skills.forEach(skill => skill.proficiency = SkillLevel.UNSKILLED)
        console.log("Skills reset.")
    }
    setPossibleSkills(...args) {
        args.forEach(skill => skill.possibleSkill = true)
    }
    resetPossibleSkills() {
        this.skills.forEach(skill => skill.possibleSkill = false);
        console.log("Possible skills reset.")
    }
    get possibleSkills() {
        return this.skills.filter(element => element.possibleSkill === true)
    }
    // ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

    resetToolProficiencies() {
        this.tools.forEach(tool => tool.proficiency = false);
        console.log("Tool proficiencies reset.")
    }
    get possibleTools() {
        return this.tools.filter(element => element.possibleTool === true)
    }
    set maxTools(number) {
        this.numberOfToolsToChoose = number;
    }
    set possibleTools(...args) { // TODO, does a setter work with ...args
        args.forEach(tool => tool.possibleTool = true)
    }

    // ----------------------------------------------------LANGUAGES-------------------------------------------------------------------------------
    set maxLanguages(number) {
        this.numberOfLanguagesToChoose = number;
    }
    resetLanguageProficiencies() {
        this.languages(element => {
            element.proficiency = false;
        });
        common.proficiency = true;
    }
    // ----------------------------------------------------ARMOR-------------------------------------------------------------------------------
    resetArmorProficiencies() {
        this._armorProficiencies.shields = false; //BETTER FUNCTION SCHREIBEN
        this._armorProficiencies.heavy = false;
        this._armorProficiencies.medium = false;
        this._armorProficiencies.light = false;
        this._armorProficiencies.none = true;
        // for (const [key,value] of this.armorProficiencies) { value = false}; doesnt work because it is not an iterable
    }
    // ----------------------------------------------------WEAPONS-------------------------------------------------------------------------------
    set WeaponsProficiency(...args) { //TODO
        args.forEach(weaponName => getWeapon(weaponName).proficiency = true);
    }
    resetWeaponsProficiencies() {
        weapons.forEach(weapon => weapon.proficiency = false);
    }
    initSimpleWeaponsProficiency() { //TODO
        weapons.forEach(element => {
            if (element.simple) {
                element.proficiency = true;
            }
        });
    }
    initMartialWeaponsProficiency() { //TODo
        weapons.forEach(element => {
            if (element.martial) {
                element.proficiency = true;
            }
        });
    }
    // ----------------------------------------------------SPELLS-------------------------------------------------------------------------------
    get cantrips() {
        return spells.filter(spell => spell.level === 0 && spell.classes.includes(this.class))
    }
    get firstLevelSpells() {
        return spells.filter(spell => spell.level === 1 && spell.classes.includes(this.class))
    }
}

function fullCharacterReset() {
    //NEEDS CODE, HOW TO DEAL WITH GLOBAL AND LOCAL FUNCTIONS???
}