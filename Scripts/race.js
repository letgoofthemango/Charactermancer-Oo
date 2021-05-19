const CharacterRaces = {
    DRAGONBORN: "Dragonborn",
    HILLDWARF: "Dwarf (Hill)",
    MOUNTAINDWARF: "Dwarf (Mountain)",
    DROW: "Elf (Drow)",
    HIGHELF: "Elf (High)",
    WOODELF: "Elf (Wood)",
    FORESTGNOME: "Gnome (Forest)",
    ROCKGNOME: "Gnome (Rock)",
    HALFELF: "Half-Elf",
    HALFORC: "Half-Orc",
    LIGHTFOOTHALFLING: "Halfling (Lightfoot)",
    STOUTHALFLING: "Halfling (Stout)",
    HUMAN: "Human",
    HUMANVARIANT: "Human (Variant)",
    TIEFLING: "Tiefling"
}
const CharacterSizes = {
    SMALL: "Small",
    MEDIUM: "Medium"
}


class RaceBonus {
    constructor(abilityName, bonus, extraBonus = false) {
        // TODO
    }
}

class Race {
    constructor() {
        // TODO: ability score constraints validation
        this.name;
        this.size;
        this.speed;
        // this.strengthBonus = strengthBonus;
        // this.dexterityBonus = dexterityBonus;
        // this.constitutionBonus = constitutionBonus;
        // this.intelligenceBonus = intelligenceBonus;
        // this.wisdomBonus = wisdomBonus;
        // this.charismaBonus = charismaBonus;
        this.pickStatBonuses;
        this.darkvision;
        this.feat;
        this.features;
        this.languageProficiency;
        this.extraLanguages;
        this.toolProficiency;
        this.extraToolProficiency;
        this.extraCantrip;
        this.traits; //for every race
        this.description; //for every race
    }

    get hitpoints() {
        return 0;
    }
    get armorProficiencies() {
        return {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
    }
}

class Dragonborn extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.DRAGONBORN;
        strength.value += 2;
        charisma.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.speed = 30;
        this.features = ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"];
        draconic.proficiency = true;
    }
}
class HillDwarf extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.HILLDWARF;
        constitution.value += 2;
        wisdom.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 25;
        this.initDwarfenCombatTraining();
        this.extraToolProficiency = [smith, brewer, mason];
        dwarvish.proficiency = true;
        this.features = ["Speed", "Darkvision", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Toughness", "", "", ""];
    }
    initDwarfenCombatTraining() {
        getWeapon("battleaxe").proficiency = true;
        getWeapon("handaxe").proficiency = true;
        getWeapon("light hammer").proficiency = true;
        getWeapon("warhammer").proficiency = true;
    }
    get hitpoints() {
        return 1;
    }
}

class MountainDwarf extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.MOUNTAINDWARF;
        constitution.value += 2;
        strength.value += 2;
        this.pickStatBonuses = [2, 2];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 25;
        this.initDwarfenCombatTraining();
        this.extraToolProficiency = [smith, brewer, mason];
        dwarvish.proficiency = true;
        this.features = ["Speed", "Darkvision", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Toughness", "", "", ""];
    }
    initDwarfenCombatTraining() {
        getWeapon("battleaxe").proficiency = true;
        getWeapon("handaxe").proficiency = true;
        getWeapon("light hammer").proficiency = true;
        getWeapon("warhammer").proficiency = true;
    }
    get armorProficiencies() {
        return {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: false
        }
    }
}
class Drow extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.DROW;
        dexterity.value += 2;
        charisma.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 120;
        this.speed = 30;
        perception.proficiency = true;
        elvish.proficiency = true;
        getSpell("Dancing Lights").known = true;
        this.initDrowWeaponTraining();
        this.features = ["Superior Darkvision", "Keen Senses", "Fey Ancestry", "Trance", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"];
    }
    initDrowWeaponTraining() {
        getWeapon("rapier").proficiency = true;
        getWeapon("shortsword").proficiency = true;
        getWeapon("light hammer").proficiency = true;
        getWeapon("hand crossbow").proficiency = true;
    }
}

class HighElf extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.HIGHELF;
        dexterity.value += 2;
        intelligence.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 30;
        this.extraLanguages = 1;
        this.extraCantrip = 1;
        this.initElfWeaponTraining();
        this.features = ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Cantrip"];
    }
    initElfWeaponTraining() {
        getWeapon("longsword").proficiency = true;
        getWeapon("shortsword").proficiency = true;
        getWeapon("shortbow").proficiency = true;
        getWeapon("longbow").proficiency = true;
    }
}
class WoodElf extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.WOODELF;
        dexterity.value += 2;
        wisdom.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 35;
        this.extraLanguages = 1;
        this.extraCantrip = 1;
        this.initElfWeaponTraining();
        this.features = ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"];
    }
    initElfWeaponTraining() {
        getWeapon("longsword").proficiency = true;
        getWeapon("shortsword").proficiency = true;
        getWeapon("shortbow").proficiency = true;
        getWeapon("longbow").proficiency = true;
    }
}
class ForrestGnome extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.ABC;
        intelligence.value += 2;
        dexterity.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.SMALL;
        this.darkvision = 60;
        this.speed = 25;
        gnomish.proficiency = true;
        getSpell("Minor Illusion").known = true;
        this.features = ["Darkvision", "Gnome Cunning", "Natural Illusionist", "Speak with Small Beasts"];
    }
}
class RockGnome extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.ROCKGNOME;
        intelligence.value += 2;
        constitution.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.SMALL;
        this.darkvision = 60;
        this.speed = 25;
        gnomish.proficiency = true;
        tinker.proficiency = true;
        this.features = ["Darkvision", "Gnome Cunning", "Artificer's Lore", "Tinker"];
    }
}
class HalfElf extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.HALFELF;
        charisma.value += 2;
        this.pickStatBonuses = [2, 1, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 30;
        elvish.proficiency = true;
        this.extraLanguages = 1;
        this.setPossibleSkills(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival);
        this.features = ["Darkvision", "Fey Ancestry", "Skill Versatility"];
    }
}
class HalfOrc extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.HALFORC;
        strength.value += 2;
        constitution.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 30;
        intimidation.proficiency = true;
        orc.proficiency = true;
        this.features = ["Darkvision", "Menacing", "Relentless Endurance", "Savage Attacks"];
    }
}
class LightfoodHalfling extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.LIGHTFOOTHALFLING;
        dexterity.value += 2;
        charisma.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.SMALL;
        this.darkvision;
        this.speed = 25;
        halfling.proficiency = true;
        this.features = ["Lucky", "Brave", "Halfling Nimbleness", "Naturally Stealthy"];
    }
}
class StoutfoodHalfling extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.STOUTHALFLING;
        dexterity.value += 2;
        constitution.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.SMALL;
        this.darkvision;
        this.speed = 25;
        halfling.proficiency = true;
        this.features = ["Lucky", "Brave", "Halfling Nimbleness", "Stout Resilience"];
    }
}
class Human extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.HUMAN;
        strength.value += 1;
        dexterity.value += 1;
        constitution.value += 1;
        intelligence.value += 1;
        wisdom.value += 1;
        charisma.value += 1;
        this.extraLanguages = 1;
        this.size = CharacterSizes.MEDIUM;
        this.speed = 30;
    }
}
class Tiefling extends Race {
    constructor() {
        super();
        this.name = CharacterRaces.TIEFLING;
        charisma.value += 2;
        intelligence.value += 1;
        this.pickStatBonuses = [2, 1];
        this.size = CharacterSizes.MEDIUM;
        this.darkvision = 60;
        this.speed = 30;
        infernal.proficiency = true;
        this.features = ["Darkvision", "Hellish Resistance", "Infernal Legacy"];
    }
}