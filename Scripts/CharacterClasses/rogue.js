class Rogue extends Character {
    constructor() {
        super();
        this.class = CharacterClasses.ROGUE;
        this.hitDice = 8;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: false,
            heavy: false,
            shields: false
        }
        this.simpleWeaponsProficiency();
        this.weaponsProficiency = ["hand crossbow", "longsword", "rapier", "shortsword"];
        this.maxToolProficiencies = 0;
        thieves.proficiency = true;
        this.maxLanguageProficiencies = 0;
        thievesCant.proficiency = true;
        this.saves = [dexterity, intelligence];
        this.maxSkillsProficiencies = 4;
        this.possibleSkills = [acrobatics, athletics, deception, insight, intimidation, investigation, perception, performance, persuasion, sleightOfHand, stealth];
        this.features = ["Expertise", "Sneak Attack", "Thieves' Cant"];
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
}