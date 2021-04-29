const Skillnames = {
    ACROBATICS: "Acrobatics",
    ANIMALHANDLING: "Animal handling",
    ARCANA: "Arcana",
    ATHLETICS: "Athletics",
    DECEPTION: "Deception",
    HISTORY: "History",
    INSIGHT: "Insight",
    INTIMIDATION: "Intimidation",
    INVESTIGATION: "Investigation",
    MEDICINE: "Medicine",
    NATURE: "Nature",
    PERCEPTION: "Perception",
    PERFORMANCE: "Performance",
    PERSUASION: "Persuasion",
    RELIGION: "Religion",
    SLEIGHTOFHAND: "Sleight of hand",
    STEALTH: "Stealth",
    SURVIVAL: "Survival"
};

class Skill {
    constructor(name, ability) {
        this.name = name;
        this.depedentAbility = ability;
        this.proficiency = SkillLevel.UNSKILLED;
        this.possibleSkill = false;
    }

    get mod() {
        return this.depedentAbility.mod + this.proficiency;
    }

}

class SkillView {
    constructor(skill) {
        // TODO
    }
    get view() {
        return `<li id="summaryAthletic" hidden>Athletics<span id="skillsID3" hidden></span></li>`
    }
}

// function resetSkillProficiencies() {
//     acrobatics.proficiency = SkillLevel.UNSKILLED;
//     animalHandling.proficiency = SkillLevel.UNSKILLED;
//     arcana.proficiency = SkillLevel.UNSKILLED;
//     athletics.proficiency = SkillLevel.UNSKILLED;
//     deception.proficiency = SkillLevel.UNSKILLED;
//     history.proficiency = SkillLevel.UNSKILLED;
//     insight.proficiency = SkillLevel.UNSKILLED;
//     intimidation.proficiency = SkillLevel.UNSKILLED;
//     investigation.proficiency = SkillLevel.UNSKILLED;
//     medicine.proficiency = SkillLevel.UNSKILLED;
//     nature.proficiency = SkillLevel.UNSKILLED;
//     perception.proficiency = SkillLevel.UNSKILLED;
//     performance.proficiency = SkillLevel.UNSKILLED;
//     persuasion.proficiency = SkillLevel.UNSKILLED;
//     religion.proficiency = SkillLevel.UNSKILLED;
//     sleightOfHand.proficiency = SkillLevel.UNSKILLED;
//     stealth.proficiency = SkillLevel.UNSKILLED;
//     survival.proficiency = SkillLevel.UNSKILLED;
// }

function resetPossibleSkills() {
    acrobatics.possibleSkill = false;
    animalHandling.possibleSkill = false;
    arcana.possibleSkill = false;
    athletics.possibleSkill = false;
    deception.possibleSkill = false;
    history.possibleSkill = false;
    insight.possibleSkill = false;
    intimidation.possibleSkill = false;
    investigation.possibleSkill = false;
    medicine.possibleSkill = false;
    nature.possibleSkill = false;
    perception.possibleSkill = false;
    performance.possibleSkill = false;
    persuasion.possibleSkill = false;
    religion.possibleSkill = false;
    sleightOfHand.possibleSkill = false;
    stealth.possibleSkill = false;
    survival.possibleSkill = false;
}

function resetSkillProficiencies() {
    acrobatics.proficiency = SkillLevel.UNSKILLED;
    animalHandling.proficiency = SkillLevel.UNSKILLED;
    arcana.proficiency = SkillLevel.UNSKILLED;
    athletics.proficiency = SkillLevel.UNSKILLED;
    deception.proficiency = SkillLevel.UNSKILLED;
    history.proficiency = SkillLevel.UNSKILLED;
    insight.proficiency = SkillLevel.UNSKILLED;
    intimidation.proficiency = SkillLevel.UNSKILLED;
    investigation.proficiency = SkillLevel.UNSKILLED;
    medicine.proficiency = SkillLevel.UNSKILLED;
    nature.proficiency = SkillLevel.UNSKILLED;
    perception.proficiency = SkillLevel.UNSKILLED;
    performance.proficiency = SkillLevel.UNSKILLED;
    persuasion.proficiency = SkillLevel.UNSKILLED;
    religion.proficiency = SkillLevel.UNSKILLED;
    sleightOfHand.proficiency = SkillLevel.UNSKILLED;
    stealth.proficiency = SkillLevel.UNSKILLED;
    survival.proficiency = SkillLevel.UNSKILLED;
    updateSkills();
}