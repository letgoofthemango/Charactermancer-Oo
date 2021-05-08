class Bard extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: false
        }
        this.maxToolProficiencies = 3;
        this.characterFeatures = ["Bardic Inspiration", "Spellcasting"];
        this.maxSkillsProficiencies = 3;
        this.maxLanguageProficiencies = 0;
        this.cantripSpells = 2;
        this.firstLevelSpells = 4;
        this.firstLevelSpellSlots = 2;
        this.setBardClass();
    }

    get AC() {
        if (this.armorType === ArmorType.NONE && this.hasShield == false) {
            return 10 + dexterity.mod
        } else if (this.armorType === ArmorType.LIGHT && this.hasShield == false) {
            return this.armorClass + dexterity.mod
        } else {
            console.log("ERROR WHILE CALCULATING AC!")
        }
    }
    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        2 + charisma.mod
    }
    setBardClass() {
        this.setSimpleWeaponsProficiency();
        this.setWeaponsProficiency("hand crossbow", "longsword", "rapier", "shortsword")
        this.setSaves(dexterity, charisma);
        this.setPossibleSkills(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival);
        this.characterClass= CharacterClasses.BARD;
        this.hitpoints;
    }
}
let bard = new Bard();