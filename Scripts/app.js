class Application {
    getNumber(mod) {
        if (mod >= 0) {
            return "+" + mod;
        } else {
            return mod.toString();
        }
    }
}

const App = new Application();

function updateSkills(){
    acrobaticsValueNode.innerText= App.getNumber(char.getSkill(Skillnames.ACROBATICS).mod);
    animalHandlingValueNode.innerText= App.getNumber(char.getSkill(Skillnames.ANIMALHANDLING).mod);
    arcanaValueNode.innerText= App.getNumber(char.getSkill(Skillnames.ARCANA).mod);
    athleticsValueNode.innerText= App.getNumber(char.getSkill(Skillnames.ATHLETICS).mod);
    deceptionValueNode.innerText= App.getNumber(char.getSkill(Skillnames.DECEPTION).mod);
    historyValueNode.innerText= App.getNumber(char.getSkill(Skillnames.HISTORY).mod);
    insightValueNode.innerText= App.getNumber(char.getSkill(Skillnames.INSIGHT).mod);
    intimidationValueNode.innerText= App.getNumber(char.getSkill(Skillnames.INTIMIDATION).mod);
    investigationValueNode.innerText= App.getNumber(char.getSkill(Skillnames.INVESTIGATION).mod);
    medicineValueNode.innerText= App.getNumber(char.getSkill(Skillnames.MEDICINE).mod);
    natureValueNode.innerText= App.getNumber(char.getSkill(Skillnames.NATURE).mod);
    perceptionValueNode.innerText= App.getNumber(char.getSkill(Skillnames.PERCEPTION).mod);
    performanceValueNode.innerText= App.getNumber(char.getSkill(Skillnames.PERFORMANCE).mod);
    persuasionValueNode.innerText= App.getNumber(char.getSkill(Skillnames.PERSUASION).mod);
    religionValueNode.innerText= App.getNumber(char.getSkill(Skillnames.RELIGION).mod);
    sleightOfHandValueNode.innerText= App.getNumber(char.getSkill(Skillnames.SLEIGHTOFHAND).mod);
    stealthValueNode.innerText= App.getNumber(char.getSkill(Skillnames.STEALTH).mod);
    survivalValueNode.innerText= App.getNumber(char.getSkill(Skillnames.SURVIVAL).mod);
} updateSkills();

function updateStats() {
    strengthTotal.innerText = strength.value;
    strengthMod.innerText = strength.mod;

    dexterityTotal.innerText = dexterity.value;
    dexterityMod.innerText = dexterity.mod;

    constitutionTotal.innerText = constitution.value;
    constitutionMod.innerText = constitution.mod;

    intelligenceTotal.innerText = intelligence.value;
    intelligenceMod.innerText = intelligence.mod;

    wisdomTotal.innerText = wisdom.value;
    wisdomMod.innerText = wisdom.mod;

    charismaTotal.innerText = charisma.value;
    charismaMod.innerText = charisma.mod;
}
updateStats();

document.getElementById("characterOverview").addEventListener("click", function () {
    strength.value=20;
    dexterity.value=20;
    constitution.value=20;
    intelligence.value=20;
    wisdom.value=20;
    charisma.value=20;
    updateStats();
    updateSkills();
    console.log("Character update");
});

