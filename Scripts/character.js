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
    constructor() {
        this.characterName = "Your character doesnt have a name yet";
        this.playerName = "You havent given your player name yet";
        this.characterLevel = 1;
        this.characterClass = null;
        this.characterSubClass = null;

        this.numberOfSkillsToChoose;
        this.hasShield = false;
        this.languageProficiencies = [
            new Language(LanguageNames.ABYSSAL),
            new Language(LanguageNames.AURAN),
            new Language(LanguageNames.AQUAN),
            new Language(LanguageNames.CELESTIAL),
            new Language(LanguageNames.COMMON),
            new Language(LanguageNames.DEEPSPEECH),
            new Language(LanguageNames.DRACONIC),
            new Language(LanguageNames.DRUIDIC),
            new Language(LanguageNames.DWARVISH),
            new Language(LanguageNames.ELVISH),
            new Language(LanguageNames.GIANT),
            new Language(LanguageNames.GNOMISH),
            new Language(LanguageNames.GOBLIN),
            new Language(LanguageNames.HALFLING),
            new Language(LanguageNames.IGNAN),
            new Language(LanguageNames.INFERNAL),
            new Language(LanguageNames.ORC),
            new Language(LanguageNames.PRIMORDIAL),
            new Language(LanguageNames.SYLVAN),
            new Language(LanguageNames.TERRAN),
            new Language(LanguageNames.THIEVES),
            new Language(LanguageNames.UNDERCOMMON)
        ]

        this.skillProficiencies = [
            new Skill(Skillnames.ACROBATICS, dexterity),
            new Skill(Skillnames.ANIMALHANDLING, wisdom),
            new Skill(Skillnames.ARCANA, intelligence),
            new Skill(Skillnames.ATHLETICS, strength),
            new Skill(Skillnames.DECEPTION, charisma),
            new Skill(Skillnames.HISTORY, intelligence),
            new Skill(Skillnames.INSIGHT, wisdom),
            new Skill(Skillnames.INTIMIDATION, charisma),
            new Skill(Skillnames.INVESTIGATION, intelligence),
            new Skill(Skillnames.MEDICINE, wisdom),
            new Skill(Skillnames.NATURE, intelligence),
            new Skill(Skillnames.PERCEPTION, wisdom),
            new Skill(Skillnames.PERFORMANCE, charisma),
            new Skill(Skillnames.PERSUASION, charisma),
            new Skill(Skillnames.RELIGION, intelligence),
            new Skill(Skillnames.SLEIGHTOFHAND, dexterity),
            new Skill(Skillnames.STEALTH, dexterity),
            new Skill(Skillnames.SURVIVAL, wisdom)];
    }

    getSkill(skillName) {
        for (const skill of this.skillProficiencies) {
            if (skill.name === skillName) {
                return skill
            }
        }
    }
    getLanguage(languageName) {
        for (const language of this.languageProficiencies) {
            if (language.name === languageName) {
                return language
            }
        }
    }

    resetCharacterSkillProficiencies() {
        this.skillProficiencies.array.forEach(element => {
            element.proficiency = SkillLevel.UNSKILLED;
        });
    }


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