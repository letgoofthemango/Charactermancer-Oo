class Ranger extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.Ranger;
        this.hitDice = 10;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.setSimpleWeaponsProficiency();
        this.setMartialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 1;
        this.setSaves(strength, dexterity);
        this.maxSkillsProficiencies = 3;
        this.setPossibleSkills(animalHandling, athletics, insight, investigation, nature, perception, stealth, survival);
        this.characterFeatures = ["Favored Enemy", "Natural Explorer"];
        this.favoredEnemy=null;
    }

    get AC() {
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + constitution.mod + dexterity.mod
        } else if (this.armorType === ArmorType.NONE && this.hasShield == true) {
            return 10 + constitution.mod + dexterity.mod + 2
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
}