import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Monk extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.MONK;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.simpleWeaponsProficiency();
        this.weaponsProficiency = ["shortsword"];
        this.maxToolProficiencies = 1;
        this.possibleTools = [alchemist, brewer, calligrapher, carpenter, cartographer, cobbler, cook, glassblower, jewler, leatherworker, mason, painter, potter, smith, tinker, weaver, woodcarver, bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol];
        this.maxLanguageProficiencies = 0;
        this.saves = [dexterity, strength];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [acrobatics, athletics, history, insight, religion, stealth];
        this.features = ["Unarmored Defense", "Martial Arts"];
    }

    get AC() { return 10 + wisdom.mod + dexterity.mod }

    get meleeAttackBonus() {
        // calc with melleBonusChoice. CONTROLLER TODO
    }
}