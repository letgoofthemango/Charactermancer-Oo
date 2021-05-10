class Cleric extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.CLERIC;
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
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorType.NONE && this.hasShield == true) {
            return 10 + dexterity.mod + 2
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == true) {
            return this.armorClass + dexterity.mod + 2
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == false) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == true) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2) + 2
        } else {
            console.log("ERROR WHILE CALCULATING AC!")
        }
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
        this.characterSubClass = "(Knowledge domain)";
        setSpellsKnown("Identify");
        setSpellsPrepared("Command", "Identify");
        this.characterFeatures = ["Divine Domain: Knowledge", "Blessing of Knowledge", "Spellcasting"];
    }
}


class LifeCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass = "(Life domain)";
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
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorType.NONE && this.hasShield == true) {
            return 10 + dexterity.mod + 2
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == true) {
            return this.armorClass + dexterity.mod + 2
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == false) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == true) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2) + 2
        } else if (this.armorType === ArmorType.HEAVY && this.hasShield == false) {
            return this.armorClass
        } else if (this.armorType === ArmorType.HEAVY && this.hasShield == true) {
            return this.armorClass + 2
        } else {
            console.log("ERROR WHILE CALCULATING AC!")
        }
    }
}


class LightCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass = "(Light domain)";
        setSpellsKnown("Burning Hands", "Faerie Fire", "Light");
        setSpellsPrepared("Burning Hands", "Faerie Fire");
        this.characterFeatures = ["Divine Domain: Knowledge", "Warding Flare", "Spellcasting"];
    }
}

class NatureCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass = "(Nature domain)";
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
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorType.NONE && this.hasShield == true) {
            return 10 + dexterity.mod + 2
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == true) {
            return this.armorClass + dexterity.mod + 2
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == false) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
        } else if (this.armorType === ArmorType.MEDIUM && this.hasShield == true) {
            return this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2) + 2
        } else if (this.armorType === ArmorType.HEAVY && this.hasShield == false) {
            return this.armorClass
        } else if (this.armorType === ArmorType.HEAVY && this.hasShield == true) {
            return this.armorClass + 2
        } else {
            console.log("ERROR WHILE CALCULATING AC!")
        }
    }
}


class TempestCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass = "(Tempest domain)";
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
}


class TrickeryCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass = "(Trickery domain)";
        setSpellsKnown("Charm Person", "Disguise Self");
        setSpellsPrepared("Charm Person", "Disguise Self");
        this.characterFeatures = ["Divine Domain: Trickery", "Blessing of the Trickster", "Spellcasting"];
    }
}

class WarCleric extends Cleric {
    constructor() {
        super()
        this.characterSubClass= "(War domain)";
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.setMartialWeaponsProficiency();
        setSpellsKnown("Divine Favor");
        setSpellsPrepared("Divine Favor","Shield of Faith");
        this.characterFeatures = ["Divine Domain: War","War Priest", "Spellcasting"];
    }
}
let cleric = new WarCleric();