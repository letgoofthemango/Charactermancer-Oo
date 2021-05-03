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
    acrobaticsValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.ACROBATICS).mod);
    animalHandlingValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.ANIMALHANDLING).mod);
    arcanaValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.ARCANA).mod);
    athleticsValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.ATHLETICS).mod);
    deceptionValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.DECEPTION).mod);
    historyValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.HISTORY).mod);
    insightValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.INSIGHT).mod);
    intimidationValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.INTIMIDATION).mod);
    investigationValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.INVESTIGATION).mod);
    medicineValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.MEDICINE).mod);
    natureValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.NATURE).mod);
    perceptionValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.PERCEPTION).mod);
    performanceValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.PERFORMANCE).mod);
    persuasionValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.PERSUASION).mod);
    religionValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.RELIGION).mod);
    sleightOfHandValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.SLEIGHTOFHAND).mod);
    stealthValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.STEALTH).mod);
    survivalValueNode.innerText= App.getNumber(charClass.getSkill(Skillnames.SURVIVAL).mod);
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

