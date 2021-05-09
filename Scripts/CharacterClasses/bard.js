class Bard extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass= CharacterClasses.BARD;
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.maxToolProficiencies = 3; //only intruments though. How to do that?
        this.setPossibleTools(bagpipes,drum,dulcimer,flute,horn,lute,lyre,pan,shawm,viol);
        this.characterFeatures = ["Bardic Inspiration", "Spellcasting"];
        this.maxSkillsProficiencies = 3;
        this.maxLanguageProficiencies = 0;
        this.cantripSpells = 2;
        this.firstLevelSpells = 4;
        this.firstLevelSpellSlots = 2;
        this.setSimpleWeaponsProficiency();
        this.setWeaponsProficiency("hand crossbow", "longsword", "rapier", "shortsword")
        this.setSaves(dexterity, charisma);
        this.setPossibleSkills(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival);
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
    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return 2 + charisma.mod
    }
}