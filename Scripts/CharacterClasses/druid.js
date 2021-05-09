class Druid extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.DRUID;
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.maxToolProficiencies = 3;
        this.characterFeatures = ["Druidic", "Spellcasting"];
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(arcana, animalHandling, insight, medicine, nature, perception, religion, survival);
        this.maxLanguageProficiencies = 0;
        this.cantripSpells = 2;
        this.firstLevelSpells = 22;
        this.firstLevelSpellSlots = 2;
        this.setWeaponsProficiency("club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear");
        herbalism.proficiency = true;
        this.setSaves(intelligence, wisdom);
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
            throw new Error("ERROR WHILE CALCULATING AC!");
        }
    }
    get spellSave() {
        return 8 + 2 + wisdom.mod
    }
    get spellAttackMod() {
        return 2 + wisdom.mod
    }
}
// let druid = new Druid();