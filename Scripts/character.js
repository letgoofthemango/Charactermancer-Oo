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

        this.toolProficiencies = [
            new Tool(ToolNames.ALCHEMIST, ToolTypes.ARTISAN, 0, 50, 8, "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire. Components: Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water."),
            new Tool(ToolNames.BAGPIPES, ToolTypes.INSTRUMENT, 0, 30, 6, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.BREWER, ToolTypes.ARTISAN, 0, 20, 9, "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work. Components: Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing."),
            new Tool(ToolNames.CALLIGRAPHER, ToolTypes.ARTISAN, 0, 10, 5, "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design. Components: Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills."),
            new Tool(ToolNames.CARDS, ToolTypes.GAMING, 5, 0, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens."),
            new Tool(ToolNames.CARPENTER, ToolTypes.ARTISAN, 0, 8, 6, "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.  Components: Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel."),
            new Tool(ToolNames.CARTOGRAPHER, ToolTypes.ARTISAN, 0, 15, 6, "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level. Components: Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler."),
            new Tool(ToolNames.COBBLER, ToolTypes.ARTISAN, 0, 5, 5, "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons. Components: Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread."),
            new Tool(ToolNames.COOK, ToolTypes.ARTISAN, 0, 1, 8, "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit. Components: Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle."),
            new Tool(ToolNames.DICE, ToolTypes.GAMING, 1, 0, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens."),
            new Tool(ToolNames.DISGUISE, ToolTypes.KIT, 0, 25, 3, "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity. Components: A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing."),
            new Tool(ToolNames.DRAGONANTE, ToolTypes.GAMING, 0, 1, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens."),
            new Tool(ToolNames.DRAGONCHESS, ToolTypes.GAMING, 0, 1, 0.5, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens."),
            new Tool(ToolNames.DRUM, ToolTypes.INSTRUMENT, 0, 6, 3, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.DULCIMER, ToolTypes.INSTRUMENT, 0, 25, 10, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.FLUTE, ToolTypes.INSTRUMENT, 0, 2, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.FORGERY, ToolTypes.KIT, 0, 15, 5, "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document. A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature. Components: A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal."),
            new Tool(ToolNames.GLASBLOWER, ToolTypes.ARTISAN, 0, 30, 5, "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects. Components: The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass."),
            new Tool(ToolNames.HERBALISM, ToolTypes.KIT, 0, 5, 3, "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing. Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements. Components: An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars."),
            new Tool(ToolNames.HORN, ToolTypes.INSTRUMENT, 0, 3, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.JEWLER, ToolTypes.ARTISAN, 0, 25, 2, "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones. Components: Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers."),
            new Tool(ToolNames.LEATHERWORKER, ToolTypes.ARTISAN, 0, 5, 5, "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods. Components: Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps."),
            new Tool(ToolNames.LUTE, ToolTypes.INSTRUMENT, 0, 35, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.LYRE, ToolTypes.INSTRUMENT, 0, 30, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.MASON, ToolTypes.ARTISAN, 0, 10, 8, "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick. Components: Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square."),
            new Tool(ToolNames.NAVIGATOR, ToolTypes.KIT, 0, 25, 3, "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea. Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction. Components: Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill."),
            new Tool(ToolNames.PAINTER, ToolTypes.ARTISAN, 0, 10, 5, "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art. Components: Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette."),
            new Tool(ToolNames.PAN, ToolTypes.INSTRUMENT, 0, 12, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.POISONER, ToolTypes.KIT, 0, 50, 2, "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons. Additionally, the Crafting and Harvesting Poison rules require the use of a poisoner's kit. A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them. Components: A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod."),
            new Tool(ToolNames.POTTER, ToolTypes.ARTISAN, 0, 10, 3, "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels. Components: Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers."),
            new Tool(ToolNames.SHAWM, ToolTypes.INSTRUMENT, 0, 2, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.SMITH, ToolTypes.ARTISAN, 0, 20, 8, "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items. Components: Smith's tools include hammers, tongs, charcoal, rags, and a whetstone."),
            new Tool(ToolNames.THIEVES, ToolTypes.KIT, 0, 25, 1, "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks. Components: Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers."),
            new Tool(ToolNames.TINKER, ToolTypes.ARTISAN, 0, 50, 10, "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Components: Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue."),
            new Tool(ToolNames.VEHICLES, ToolTypes.ARTISAN, 0, 0, 0, "You know how to operate certain land or water vehicles."),
            new Tool(ToolNames.VIOL, ToolTypes.INSTRUMENT, 0, 30, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument."),
            new Tool(ToolNames.WEAVER, ToolTypes.ARTISAN, 0, 1, 5, "Weaver's tools allow you to create cloth and tailor it into articles of clothing. Components: Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport."),
            new Tool(ToolNames.WOODCARVER, ToolTypes.ARTISAN, 0, 1, 5, "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows. Components: Woodcarver's tools consist of a knife, a gouge, and a small saw.")
        ];

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
        ];

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
    getTool(toolName) {
        for (const tool of this.toolProficiencies) {
            if (tool.name === toolName) {
                return tool
            }
        }
    }

        addArmour(armour) {
            // validation code
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