class Application {
    
}

const App = new Application();

function updateSkills(){
    acrobaticsValueNode.innerText= getNumber(acrobatics.mod);
    animalHandlingValueNode.innerText= getNumber(animalHandling.mod);
    arcanaValueNode.innerText= getNumber(arcana.mod);
    athleticsValueNode.innerText= getNumber(athletics.mod);
    deceptionValueNode.innerText= getNumber(deception.mod);
    historyValueNode.innerText= getNumber(history.mod);
    insightValueNode.innerText= getNumber(insight.mod);
    intimidationValueNode.innerText= getNumber(intimidation.mod);
    investigationValueNode.innerText= getNumber(investigation.mod);
    medicineValueNode.innerText= getNumber(medicine.mod);
    natureValueNode.innerText= getNumber(nature.mod);
    perceptionValueNode.innerText= getNumber(perception.mod);
    performanceValueNode.innerText= getNumber(performance.mod);
    persuasionValueNode.innerText= getNumber(persuasion.mod);
    religionValueNode.innerText= getNumber(religion.mod);
    sleightOfHandValueNode.innerText= getNumber(sleightOfHand.mod);
    stealthValueNode.innerText= getNumber(stealth.mod);
    survivalValueNode.innerText= getNumber(survival.mod);
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

function getNumber(mod) {
    if (mod >= 0) {
        return "+" + mod;
    } else {
        return mod.toString();
    }
}