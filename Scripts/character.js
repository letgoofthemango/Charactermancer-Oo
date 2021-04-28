const SkillLevel = {
    UNSKILLED: 0,
    HALFPROFICIENT: 1,
    PROFICIENT: 2,
    EXPERTISE: 4,
}

const CharacterClasses = {
    BARBARIAN: "Barabrian",
    BARD: "Bard",
    CLERIC: "Cleric",
    DRUID: "Druid",
    FIGHTER: "Fighter",
    MONK: "Monk",
    PALADIN: "Paladin",
    RANGER: "Ranger",
    ROGUE: "Rogue",
    SORCERER: "Sorcerer",
    WARLOCK: "Warlock",
    WIZARD: "Wizard"
}

class Character {
    characterName = "Your character doesnt have a name yet";
    playerName = "You havent given your player name yet";
    characterLevel = 1;
    characterClass = null;
    characterSubClass = null;

    numberOfSkillsToChoose;
    hasShield = false;



    get initiativeMod() { return dexterity.mod }
    get passivePerception() { return 10 + wisdom.mod }




    setCharacterSkillsNumberToChoose(number) {
        char.numberOfSkillsToChoose = number;
    }


    characterArmorClass;
    armorClass;
    armorType;
    characterSpeed;
    characterVision;
    characterFightingStyle;
    characterPossibleToolChoices;
    characterMaxToolProficiencies;
    languageProficiencies;
    maxLanguageProficiencies;
    possibleLanguageProficiencies;
    characterFeatures;
    characterEquipment;
    characterFeats;
    maxcharacterFeats;
    characterAttacks;
    possibleCantripSpells;
    cantripSpellsChosen;
    cantripsKnown;
    firstLevelSpells;
    firstLevelSpellsChosen;
    firstLevelSpellsKnown;
    firstLevelSpellSlots;
    characterHitpoints;
    hitDice;
    characterRace;
    characterAlignment;
    characterAge;
    characterHeight;
    characterWeight;
    characterEyesColor;
    characterSkinColor;
    characterHairColor;
    characterBackstory;
    characterBackground;
}
let char = new Character();





// ----------------------------------------------------SKILLS-------------------------------------------------------------------------------


// ----------------------------------------------------TOOLS-------------------------------------------------------------------------------

// function setToolproficiency(number, ...args) {
//     switch (number) {
//         case 0:
//             args.forEach((arg) => {
//                 char.toolProficiencies.arg = false
//             })
//             break;
//         case 1:
//             args.forEach((arg) => {
//                 char.toolProficiencies.arg = true
//             })
//             break;

//         default:
//             break;
//     }
// }