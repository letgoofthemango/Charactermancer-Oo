export const AbilityType = {
    STRENGTH: "Strength",
    DEXTERITY: "Dexterity",
    CONSTITUTION: "Constitution",
    INTELLIGENCE: "Intelligence",
    WISDOM: "Wisdom",
    CHARISMA: "Charisma"
};

export class AbilityScore {
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

export let strength = new AbilityScore(AbilityType.STRENGTH, 8),
    dexterity = new AbilityScore(AbilityType.DEXTERITY, 8),
    constitution = new AbilityScore(AbilityType.CONSTITUTION, 8),
    intelligence = new AbilityScore(AbilityType.INTELLIGENCE, 8),
    wisdom = new AbilityScore(AbilityType.WISDOM, 8),
    charisma = new AbilityScore(AbilityType.CHARISMA, 8);