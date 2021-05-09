class Bard extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.BARD;
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
        this.maxToolProficiencies = 3;
        this.setPossibleTools(bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.maxLanguageProficiencies = 0;
        this.setSaves(dexterity, charisma);
        this.maxSkillsProficiencies = 3;
        this.setPossibleSkills(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival);
        this.cantripSpells = 2;
        this.firstLevelSpells = 4;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Bardic Inspiration", "Spellcasting"];
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
        return getNumber(2 + charisma.mod)
    }
}