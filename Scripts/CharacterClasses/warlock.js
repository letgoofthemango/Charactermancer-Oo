class Warlock extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.WARLOCK;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.simpleWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves = [wisdom, charisma];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [arcana, deception, history, intimidation, investigation, nature, religion];
        this.cantripSpellsToChoose = 2;
        this.firstLevelSpellsToChoose = 2;
        this.firstLevelSpellSlots = 1;
        this.characterFeatures = ["Otherworldly Patron", "Pact Magic"];
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
                alert("ERROR WHILE CALCULATING AC!");
        }
        return ac;
    }
    get firstLevelSpells() {
        return spells.filter(spell => spell.level === 1 && spell.classes.includes(this.class))
    }

    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}

class ArchfeyWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Archfey)";
        this.characterFeatures = ["Otherworldly Patron: Archfey", "Fey Presence", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Sleep"), getSpell("Faerie Fire"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}



class FiendWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Fiend)";
        this.characterFeatures = ["Otherworldly Patron: Fiend", "Dark One's Blessing", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Burning Hands"), getSpell("Command"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}

class GreatOldOneWarlock extends Warlock {
    constructor() {
        super()
        this.subClass = "(Great Old One)";
        this.characterFeatures = ["Sorcerous Origin: Great Old One", "Awakened Mind", "Pact Magic"];
    }
    get firstLevelSpells() {
        let spellsArray = super.firstLevelSpells;
        spellsArray.push(getSpell("Dissonant Whispers"), getSpell("Tasha's Hideous Laughter"));
        spellsArray.sort((a, b) => sortSpells(a, b))
        return spellsArray
    }
}