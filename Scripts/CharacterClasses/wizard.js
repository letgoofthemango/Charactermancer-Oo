import { PlayerCharacter,CharacterClassNames } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Wizard extends PlayerCharacter {
    constructor() {
        super();
        this.class = CharacterClassNames.WIZARD;
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
        this.saves=[intelligence, wisdom];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills=[arcana, history, insight, investigation, medicine, religion];
        this.cantripSpellsToChoose = 3;
        this.firstLevelSpellsToChoose = 6;
        this.firstLevelSpellSlots = 2;
        this.features = ["Arcane Recovery", "Spellcasting"];
    }

    get AC() { return 10 + dexterity.mod }
    get spellSave() {
        return 8 + 2 + intelligence.mod
    }
    get spellAttackMod() {
        return getNumber(2 + intelligence.mod)
    }
}
character = new Wizard();