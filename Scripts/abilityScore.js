const AbilityType = {
    STRENGTH: "Strength",
    DEXTERITY: "Dexterity",
    CONSTITUTION: "Constitution",
    INTELLIGENCE: "Intelligence",
    WISDOM: "Wisdom",
    CHARISMA: "Charisma"
};

class AbilityScore {
    // name;
    // value;
    // mod;
    // saveMod;
    // saveProficiency;

    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.saveProficiency = false;
    }

    get mod() { // check property
        return Math.floor((this.value - 10) / 2);
    }

    get saveMod() {
        if (this.saveProficiency) {
            return this.mod + 2;
        } else {
            return this.mod;
        }
    }

    set saveProf(value) {
        this.saveProficiency = value;
    }
}

// ignore rest

let strength = new AbilityScore(AbilityType.STRENGTH, 8);
let dexterity = new AbilityScore(AbilityType.DEXTERITY, 8);
let constitution = new AbilityScore(AbilityType.CONSTITUTION, 8);
let intelligence = new AbilityScore(AbilityType.INTELLIGENCE, 8);
let wisdom = new AbilityScore(AbilityType.WISDOM, 8);
let charisma = new AbilityScore(AbilityType.CHARISMA, 8);



function resetAbilityScores() {
    strength.value = 8;
    dexterity.value = 8;
    constitution.value = 8;
    intelligence.value = 8;
    wisdom.value = 8;
    charisma.value = 8;
}

function resetCharacterSavingThrows() {
    strength.saveProficiency = false;
    dexterity.saveProficiency = false;
    constitution.saveProficiency = false;
    intelligence.saveProficiency = false;
    wisdom.saveProficiency = false;
    charisma.saveProficiency = false;
}

// console.log(strength);
// console.log(dexterity);
// console.log(constitution);
// console.log(intelligence);
// console.log(wisdom);
// console.log(charisma);