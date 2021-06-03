import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "./abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "./skill.js";
import { weapons, getWeapon } from "./weapon.js";
import { ArmorType, armors, getArmor } from "./armor.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "./tool.js";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "./language.js";
import { Acolyte, Charlatan, Criminal, Entertainer, FolkHero, Gladiator, GuildArtisan, GuildMerchant, Hermit, Knight, Noble, Outlander, Pirate, Sage, Sailor, Soldier, Spy, Urchin } from "./background.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "./spell.js";
import { Dragonborn, Drow, Human, MountainDwarf, StoutfoodHalfling, HalfElf, LightfoodHalfling, HalfOrc, HillDwarf, ForrestGnome, HighElf, WoodElf, RockGnome, Tiefling } from "./race.js";
import { Character, CharacterClasses, fullCharacterReset } from "./character.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "./characterFeature.js";
import { Barbarian } from "./CharacterClasses/barbarian.js";
import { Bard } from "./CharacterClasses/bard.js";
import { Cleric, KnowledgeCleric, LifeCleric, LightCleric, NatureCleric, TempestCleric, TrickeryCleric, WarCleric } from "./CharacterClasses/cleric";
import { Druid } from "./CharacterClasses/druid";
import { Fighter, FightingStyleNames } from "./CharacterClasses/fighter";
import { Monk } from "./CharacterClasses/monk";
import { Paladin } from "./CharacterClasses/paladin";
import { Ranger } from "./CharacterClasses/ranger";
import { Rogue } from "./CharacterClasses/rogue";
import { Sorcerer, DraconicSorcerer, WildSorcerer } from "./CharacterClasses/sorcerer";
import { Warlock, ArchfeyWarlock, FiendWarlock, GreatOldOneWarlock } from "./CharacterClasses/warlock";
import { Wizard } from "./CharacterClasses/wizard";


// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
// import {  } from "./abc.js";
class Application {

}

const App = new Application();

function updateSkills() {
    acrobaticsValueNode.innerText = getNumber(acrobatics.mod);
    animalHandlingValueNode.innerText = getNumber(animalHandling.mod);
    arcanaValueNode.innerText = getNumber(arcana.mod);
    athleticsValueNode.innerText = getNumber(athletics.mod);
    deceptionValueNode.innerText = getNumber(deception.mod);
    historyValueNode.innerText = getNumber(history.mod);
    insightValueNode.innerText = getNumber(insight.mod);
    intimidationValueNode.innerText = getNumber(intimidation.mod);
    investigationValueNode.innerText = getNumber(investigation.mod);
    medicineValueNode.innerText = getNumber(medicine.mod);
    natureValueNode.innerText = getNumber(nature.mod);
    perceptionValueNode.innerText = getNumber(perception.mod);
    performanceValueNode.innerText = getNumber(performance.mod);
    persuasionValueNode.innerText = getNumber(persuasion.mod);
    religionValueNode.innerText = getNumber(religion.mod);
    sleightOfHandValueNode.innerText = getNumber(sleightOfHand.mod);
    stealthValueNode.innerText = getNumber(stealth.mod);
    survivalValueNode.innerText = getNumber(survival.mod);
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
    strength.value = 20;
    dexterity.value = 20;
    constitution.value = 20;
    intelligence.value = 20;
    wisdom.value = 20;
    charisma.value = 20;
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