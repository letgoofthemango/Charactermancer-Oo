import { PlayerCharacter,CharacterClassNames } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Rogue extends PlayerCharacter {
    constructor() {
        super();
        this.class = CharacterClassNames.ROGUE;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.simpleWeaponsProficiency();
        this.weaponsProficiency = ["hand crossbow", "longsword", "rapier", "shortsword"];
        this.maxToolProficiencies = 0;
        thieves.proficiency = true;
        this.maxLanguageProficiencies = 0;
        thievesCant.proficiency = true;
        this.saves = [dexterity, intelligence];
        this.maxSkillsProficiencies = 4;
        this.possibleSkills = [acrobatics, athletics, deception, insight, intimidation, investigation, perception, performance, persuasion, sleightOfHand, stealth];
        this.features = ["Expertise", "Sneak Attack", "Thieves' Cant"];
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
}