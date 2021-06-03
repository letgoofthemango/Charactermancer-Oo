import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Sorcerer extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.SORCERER;
        this.hitDice = 6;
        this._armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.weaponsProficiency=["dagger", "dart", "sling", "quarterstaff", "light crossbow"];
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves=[constitution, charisma];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills=[arcana, deception, insight, intimidation, persuasion, religion];
        this.cantripSpellsToChoose = 4;
        this.firstLevelSpellsToChoose = 2;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Sorcerous Origin", "Spellcasting"];
    }

    get AC() { return 10 + dexterity.mod }

    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}

export class DraconicSorcerer extends Sorcerer {
    constructor() {
        super()
        this.subClass = "(Draconic Origin)";
        draconic.proficiency = true;
        this.dragonAncestor; // has to be implemented(in the view???) TODO.
        this.characterFeatures = ["Sorcerous Origin: Draconic", "Draconic Resilience", "Spellcasting"];
    }
    get hitpoints() {
        // return super.hitpoints + 1 // TODO TEST
        return this.hitDice + constitution.mod + 1 + this.race.hitpoints;
    }
    get AC() { return 13 + dexterity.mod }
}



export class WildSorcerer extends Sorcerer {
    constructor() {
        super()
        this.subClass = "(Wild Magic Origin)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.characterFeatures = ["Sorcerous Origin: Wild Magic", "Wild Magic Surge", "Tides of Chaos", "Spellcasting"];
    }
}