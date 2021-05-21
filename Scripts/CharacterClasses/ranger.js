class Ranger extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.RANGER;
        this.hitDice = 10;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.simpleWeaponsProficiency();
        this.martialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 1;
        this.saves = [strength, dexterity];
        this.maxSkillsProficiencies = 3;
        this.possibleSkills = [animalHandling, athletics, insight, investigation, nature, perception, stealth, survival];
        this.features = ["Favored Enemy", "Natural Explorer"];
        this.favoredEnemy = null; //Controller TODO
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
            default:
                alert("ERROR WHILE CALCULATING AC!");
        }
        if (this.hasShield) {
            ac += 2
        }
        return ac;
    }
}