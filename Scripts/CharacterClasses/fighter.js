const FightingStyleNames = {
    Archery: "Archery",
    Defense: "Defense",
    Dueling: "Dueling",
    GreatWeaponFighting: "Great Weapon Fighting",
    Protection: "Protection",
    TwoWeaponFighting: "Two-Weapon Fighting",
}
class Fighter extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.class = CharacterClasses.FIGHTER;
        this.hitDice = 10;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: true,
            shields: true
        }
        this.SimpleWeaponsProficiency();
        this.MartialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves = [strength, constitution];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills = [acrobatics, animalHandling, athletics, history, insight, intimidation, perception, survival];
        this.features = ["Fighting Style", "Second Wind"];
        this.fightingStyle;
    }

    set FightingStyle(style) {
        this.fightingStyle = null;
        this.fightingStyle = style;
    }
    get rangedBonus() {
        let rb = super.rangedBonus;
        if (this.fightingStyle == "Archery") {
            rb += 2
        }
        return rb
    }

    get AC() {
        let ac = super.AC;
        if (this.fightingStyle === "Defense") {
            ac += 1
        }
        return ac;
    }
}