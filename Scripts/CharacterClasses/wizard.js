class Wizard extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.Wizard;
        this.hitDice = 6;
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.setWeaponsProficiency("dagger", "dart", "sling", "quarterstaff", "light crossbow")
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.setSaves(intelligence, wisdom);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(arcana, history, insight, investigation, medicine, religion);
        this.cantripSpells = 3;
        this.firstLevelSpells = 6;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Arcane Recovery", "Spellcasting"];
    }

    get AC() { return 10 + dexterity.mod }
    get spellSave() {
        return 8 + 2 + intelligence.mod
    }
    get spellAttackMod() {
        return getNumber(2 + intelligence.mod)
    }
}