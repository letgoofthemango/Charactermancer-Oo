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
        this.setSimpleWeaponsProficiency();
        this.setMartialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.setSaves(strength, constitution);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(acrobatics, animalHandling, athletics, history, insight, intimidation, perception, survival);
        this.features = ["Fighting Style", "Second Wind"];
        this.fightingStyle;
    }

    setFightingStyle(style) { // TODO !!!!!!!FINISH THIS!
        this.fightingStyle = null;
        this.fightingStyle = style;
        if (style == "Archery") {
            this.rangedBonus = this.rangedAttackBonus + 2
        } else {
            this.rangedBonus = this.rangedAttackBonus;
        }
    }

    get AC() {
        ac = super.AC; // TODO TEST THIS !!!!!!
        // let ac = 0
        // switch (this.armorType) {
        //     case ArmorType.NONE:
        //         ac = 10 + dexterity.mod
        //         break;
        //     case ArmorType.LIGHT:
        //         ac = this.armorClass + dexterity.mod
        //         break;
        //     case ArmorType.MEDIUM:
        //         ac = this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
        //         break;
        //     case ArmorType.HEAVY:
        //         ac = this.armorClass
        //         break;
        //     default:
        //         alert("ERROR WHILE CALCULATING AC!");
        //         break;
        // }
        // if (this.hasShield) {
        //     ac += 2
        // }
        if (this.fightingStyle === "Defense") {
            ac += 1
        }
        return ac;
    }

}
// Archery and Defense fighting style how to implement?