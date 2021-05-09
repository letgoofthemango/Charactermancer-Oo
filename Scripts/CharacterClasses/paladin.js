class Paladin extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.PALADIN;
        this.hitDice = 10;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.setSimpleWeaponsProficiency();
        this.setMartialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.setSaves(wisdom, charisma);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(athletics, insight, intimidation, medicine, persuasion, religion);
        this.characterFeatures = ["Divine sense", "Lay on hands"];
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