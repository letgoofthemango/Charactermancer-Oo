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
    acrobaticsValueNode.innerText= App.getNumber(acrobatics.mod);
    animalHandlingValueNode.innerText= App.getNumber(animalHandling.mod);
    arcanaValueNode.innerText= App.getNumber(arcana.mod);
    athleticsValueNode.innerText= App.getNumber(athletics.mod);
    deceptionValueNode.innerText= App.getNumber(deception.mod);
    historyValueNode.innerText= App.getNumber(history.mod);
    insightValueNode.innerText= App.getNumber(insight.mod);
    intimidationValueNode.innerText= App.getNumber(intimidation.mod);
    investigationValueNode.innerText= App.getNumber(investigation.mod);
    medicineValueNode.innerText= App.getNumber(medicine.mod);
    natureValueNode.innerText= App.getNumber(nature.mod);
    perceptionValueNode.innerText= App.getNumber(perception.mod);
    performanceValueNode.innerText= App.getNumber(performance.mod);
    persuasionValueNode.innerText= App.getNumber(persuasion.mod);
    religionValueNode.innerText= App.getNumber(religion.mod);
    sleightOfHandValueNode.innerText= App.getNumber(sleightOfHand.mod);
    stealthValueNode.innerText= App.getNumber(stealth.mod);
    survivalValueNode.innerText= App.getNumber(survival.mod);
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

