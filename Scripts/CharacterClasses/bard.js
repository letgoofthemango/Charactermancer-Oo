class Bard extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.BARD;
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
        this.features = ["Bardic Inspiration", "Spellcasting"];
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
            default:
                break;
        }
        return ac;
    }
    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}