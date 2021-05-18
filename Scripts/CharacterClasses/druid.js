class Druid extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.DRUID;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.maxToolProficiencies = 0;
        this.setWeaponsProficiency("club", "dagger", "dart", "javelin", "mace", "quarterstaff", "scimitar", "sickle", "sling", "spear");
        herbalism.proficiency = true;
        this.features = ["Druidic", "Spellcasting"];
        this.maxLanguageProficiencies = 0;
        druidic.proficiency = true;
        this.setSaves(intelligence, wisdom);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(arcana, animalHandling, insight, medicine, nature, perception, religion, survival);
        this.cantripSpells = 2;
        this.firstLevelSpells = 22;
        this.firstLevelSpellSlots = 2;
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
    get spellSave() {
        return 8 + 2 + wisdom.mod
    }
    get spellAttackMod() {
        return getNumber(2 + wisdom.mod)
    }
}