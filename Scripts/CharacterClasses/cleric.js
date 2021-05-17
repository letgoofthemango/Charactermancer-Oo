class Cleric extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.CLERIC;
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.setSimpleWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.setSaves(wisdom, charisma);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(history, insight, medicine, persuasion, religion);
        this.cantripSpells = 2;
        this.firstLevelSpells = 4;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Divine Domain", "Spellcasting"];
        this.getfirstLevelSpells().forEach(spell => setSpellsKnown(spell.name));
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

class KnowledgeCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Knowledge domain)";
        setSpellsKnown("Identify");
        setSpellsPrepared("Command", "Identify");
        this.characterFeatures = ["Divine Domain: Knowledge", "Blessing of Knowledge", "Spellcasting"];
    }
}


class LifeCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Life domain)";
        this.armorProficiencies = {
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


class LightCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Light domain)";
        setSpellsKnown("Burning Hands", "Faerie Fire", "Light");
        setSpellsPrepared("Burning Hands", "Faerie Fire");
        this.characterFeatures = ["Divine Domain: Knowledge", "Warding Flare", "Spellcasting"];
    }
}

class NatureCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Nature domain)";
        this.armorProficiencies = {
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


class TempestCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Tempest domain)";
        this.armorProficiencies = {
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


class TrickeryCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(Trickery domain)";
        setSpellsKnown("Charm Person", "Disguise Self");
        setSpellsPrepared("Charm Person", "Disguise Self");
        this.characterFeatures = ["Divine Domain: Trickery", "Blessing of the Trickster", "Spellcasting"];
    }
}

class WarCleric extends Cleric {
    constructor() {
        super()
        this.subClass = "(War domain)";
        this.armorProficiencies = {
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