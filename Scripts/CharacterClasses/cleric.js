import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";
export class Cleric extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.CLERIC;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.simpleWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves = [wisdom, charisma];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [history, insight, medicine, persuasion, religion];
        this.cantripSpellsToChoose = 2;
        this.firstLevelSpellsToChoose = 4;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Divine Domain", "Spellcasting"];
        this.firstLevelSpells().forEach(spell => setSpellsKnown(spell.name));
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

export class KnowledgeCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Knowledge domain)";
        setSpellsKnown("Identify");
        setSpellsPrepared("Command", "Identify");
        this.characterFeatures = ["Divine Domain: Knowledge", "Blessing of Knowledge", "Spellcasting"];
    }
}


export class LifeCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Life domain)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        setSpellsPrepared("Bless", "Cure Wounds");
        this.characterFeatures = ["Divine Domain: Life", "Disciple of Life", "Spellcasting"];
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
}


export class LightCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Light domain)";
        setSpellsKnown("Burning Hands", "Faerie Fire", "Light");
        setSpellsPrepared("Burning Hands", "Faerie Fire");
        this.characterFeatures = ["Divine Domain: Knowledge", "Warding Flare", "Spellcasting"];
    }
}

export class NatureCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Nature domain)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        setSpellsKnown("Animal Friendship", "Speak with Animals");
        setSpellsPrepared("Animal Friendship", "Speak with Animals");
        this.characterFeatures = ["Divine Domain: Knowledge", "Acolyte of Nature", "Spellcasting"];
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
}


export class TempestCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Tempest domain)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.setMartialWeaponsProficiency();
        setSpellsKnown("Fog Cloud", "Thunderwave");
        setSpellsPrepared("Fog Cloud", "Thunderwave");
        this.characterFeatures = ["Divine Domain: Tempest", "Wrath of the Storm", "Spellcasting"];
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
}


export class TrickeryCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Trickery domain)";
        setSpellsKnown("Charm Person", "Disguise Self");
        setSpellsPrepared("Charm Person", "Disguise Self");
        this.characterFeatures = ["Divine Domain: Trickery", "Blessing of the Trickster", "Spellcasting"];
    }
}

export class WarCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(War domain)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.setMartialWeaponsProficiency();
        setSpellsKnown("Divine Favor");
        setSpellsPrepared("Divine Favor", "Shield of Faith");
        this.characterFeatures = ["Divine Domain: War", "War Priest", "Spellcasting"];
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
}