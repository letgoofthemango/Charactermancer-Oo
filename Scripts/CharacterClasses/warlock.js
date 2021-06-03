import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Warlock extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.WARLOCK;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.simpleWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves = [wisdom, charisma];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [arcana, deception, history, intimidation, investigation, nature, religion];
        this.cantripSpellsToChoose = 2;
        this.firstLevelSpellsToChoose = 2;
        this.firstLevelSpellSlots = 1;
        this.characterFeatures = ["Otherworldly Patron", "Pact Magic"];
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
            default:
                alert("ERROR WHILE CALCULATING AC!");
        }
        return ac;
    }
    get firstLevelSpells() {
        return spells.filter(spell => spell.level === 1 && spell.classes.includes(this.class))
    }

    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}

export class ArchfeyWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Archfey)";
        this.characterFeatures = ["Otherworldly Patron: Archfey", "Fey Presence", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Sleep"), getSpell("Faerie Fire"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}



export class FiendWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Fiend)";
        this.characterFeatures = ["Otherworldly Patron: Fiend", "Dark One's Blessing", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Burning Hands"), getSpell("Command"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}

export class GreatOldOneWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Great Old One)";
        this.characterFeatures = ["Sorcerous Origin: Great Old One", "Awakened Mind", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Dissonant Whispers"), getSpell("Tasha's Hideous Laughter"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}