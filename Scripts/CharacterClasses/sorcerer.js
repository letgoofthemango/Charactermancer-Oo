class Sorcerer extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.SORCERER;
        this.hitDice = 6;
        this._armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.weaponsProficiency=["dagger", "dart", "sling", "quarterstaff", "light crossbow"];
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves=[constitution, charisma];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills=[arcana, deception, insight, intimidation, persuasion, religion];
        this.cantripSpellsToChoose = 4;
        this.firstLevelSpellsToChoose = 2;
        this.firstLevelSpellSlots = 2;
        this.characterFeatures = ["Sorcerous Origin", "Spellcasting"];
    }

    get AC() { return 10 + dexterity.mod }

    get spellSave() {
        return 8 + 2 + charisma.mod
    }
    get spellAttackMod() {
        return getNumber(2 + charisma.mod)
    }
}

class DraconicSorcerer extends Sorcerer {
    constructor() {
        super()
        this.subClass = "(Draconic origin)";
        draconic.proficiency = true;
        this.dragonAncestor; // has to be implemented(in the view???) TODO.
        this.characterFeatures = ["Sorcerous Origin: Draconic", "Draconic Resilience", "Spellcasting"];
    }
    get hitpoints() {
        // return super.hitpoints + 1 // TODO TEST
        return this.hitDice + constitution.mod + 1 + this.race.hitpoints;
    }
    get AC() { return 13 + dexterity.mod }
}



class WildSorcerer extends Sorcerer {
    constructor() {
        super()
        this.subClass = "(Wild Magic origin)";
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.characterFeatures = ["Sorcerous Origin: Wild Magic", "Wild Magic Surge", "Tides of Chaos", "Spellcasting"];
    }
}