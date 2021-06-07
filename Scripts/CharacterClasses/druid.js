import { PlayerCharacter,CharacterClassNames } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Druid extends PlayerCharacter {
    constructor() {
        super();
        this.class = CharacterClassNames.DRUID;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.maxToolProficiencies = 0;
        this.weaponsProficiency("club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear");
        herbalism.proficiency = true;
        this.features = ["Druidic", "Spellcasting"];
        this.maxLanguageProficiencies = 0;
        druidic.proficiency = true;
        this.saves = [intelligence, wisdom];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [arcana, animalHandling, insight, medicine, nature, perception, religion, survival];
        this.cantripSpellsToChoose = 2;
        this.firstLevelSpellsToChoose = 22;
        this.firstLevelSpellSlots = 2;
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
                break;
        }
        if (this.hasShield) {
            ac += 2
        }
        return ac;
    }
    get spellSave() {
        return 8 + 2 + wisdom.mod
    }
    get spellAttackMod() {
        return getNumber(2 + wisdom.mod)
    }
}