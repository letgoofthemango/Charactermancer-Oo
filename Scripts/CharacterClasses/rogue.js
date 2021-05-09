class Rogue extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.ROGUE;
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.setSimpleWeaponsProficiency();
        this.setWeaponsProficiency("hand crossbow", "longsword", "rapier", "shortsword")
        this.maxToolProficiencies = 0;
        thieves.proficiency = true;
        this.maxLanguageProficiencies = 0;
        thievesCant.proficiency = true;
        this.setSaves(dexterity, intelligence);
        this.maxSkillsProficiencies = 4;
        this.setPossibleSkills(acrobatics, athletics, deception, insight, intimidation, investigation, perception, performance, persuasion, sleightOfHand, stealth);
        this.characterFeatures = ["Expertise", "Sneak Attack", "Thieves' Cant"];
    }

    get AC() {
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else {
            throw new Error("ERROR WHILE CALCULATING AC!");
        }
    }
}