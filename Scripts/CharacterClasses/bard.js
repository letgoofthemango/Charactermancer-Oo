import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";
class Bard extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.BARD;
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
        this.maxToolProficiencies = 3;
        this.possibleTools = (bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.maxLanguageProficiencies = 0;
        this.saves = [dexterity, charisma];
        this.maxSkillsProficiencies = 3;
        this.possibleSkills = [acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival];
        this.cantripSpellsToChoose = 2;
        this.firstLevelSpellsToChoose = 4;
        this.firstLevelSpellSlots = 2;
        this.features = ["Bardic Inspiration", "Spellcasting"];
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
                break;
        }
        return ac;
    }
    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}