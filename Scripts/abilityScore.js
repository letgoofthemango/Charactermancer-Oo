const AbilityType = {
    STRENGTH: "Strength",
    DEXTERITY: "Dexterity",
    CONSTITUTION: "Constitution",
    INTELLIGENCE: "Intelligence",
    WISDOM: "Wisdom",
    CHARISMA: "Charisma"
};

class AbilityScore {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.proficiency = false;
    }

    get mod() { // check property
        return Math.floor((this.value - 10) / 2);
    }

    get saveMod() {
        if (this.proficiency) {
            return this.mod + 2;
        } else {
            return this.mod;
        }
    }
}



// ignore rest

let strength = new AbilityScore(AbilityType.STRENGTH, 8);
let dexterity = new AbilityScore(AbilityType.DEXTERITY, 8);
let constitution = new AbilityScore(AbilityType.CONSTITUTION, 8);
let intelligence = new AbilityScore(AbilityType.INTELLIGENCE, 8);
let wisdom = new AbilityScore(AbilityType.WISDOM, 8);
let charisma = new AbilityScore(AbilityType.CHARISMA, 8);