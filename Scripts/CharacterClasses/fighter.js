import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";
export const FightingStyleNames = {
    Archery: "Archery",
    Defense: "Defense",
    Dueling: "Dueling",
    GreatWeaponFighting: "Great Weapon Fighting",
    Protection: "Protection",
    TwoWeaponFighting: "Two-Weapon Fighting",
}
export class Fighter extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.FIGHTER;
        this.hitDice = 10;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.SimpleWeaponsProficiency();
        this.MartialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves = [strength, constitution];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [acrobatics, animalHandling, athletics, history, insight, intimidation, perception, survival];
        this.features = ["Fighting Style", "Second Wind"];
        this.fightingStyle;
    }

    set FightingStyle(style) {
        this.fightingStyle = null;
        this.fightingStyle = style;
    }
    get rangedBonus() {
        let rb = super.rangedBonus;
        if (this.fightingStyle == "Archery") {
            rb += 2
        }
        return rb
    }

    get AC() {
        let ac = super.AC;
        if (this.fightingStyle === "Defense") {
            ac += 1
        }
        return ac;
    }
}