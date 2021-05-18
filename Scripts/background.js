const BackgroundNames = {
    ACOYLTE: "Acolyte",
    CHARLATAN: "Charlatan",
    CRIMINAL: "Criminal",
    SPY: "Criminal (Spy)",
    ENTERTAINER: "Entertainer",
    GLADIATOR: "Entertainer (Gladiator)",
    FOLKHERO: "Folk hero",
    GUILDARTISAM: "Guild artisan",
    GUILDMERCHANT: "Guild merchant",
    HERMIT: "Hermit",
    NOBLE: "Noble",
    KNIGHT: "Noble (Knight)",
    OUTLANDER: "Outlander",
    SAGE: "Sage",
    SAILOR: "Sailor",
    PIRATE: "Sailor (Pirate)",
    SOLDIER: "Soldier",
    URCHIN: "Urchin"
}

class Background {
    constructor(/* name, numberOfLanguagesToChoose, skill1, skill2, numberOfToolsToChoose, gold, feature, ...args */) {
        this.name;// = name;
        this.numberOfLanguagesToChoose = 0;// = numberOfLanguagesToChoose;
        this.numberOfToolsToChoose = 0;// = numberOfToolsToChoose;
        this.gold;// = gold;
        this.feature;// = feature;
        //args.push(`a belt pouch containing ${this.gold} gp.`);
        this.inventory;// = args; How to do that????
    }
    setSkillProficiencies(...args) {
        args.forEach(skill => skill.proficiency = 2)
    }
    setPossibleTools(...args) {
        args.forEach(tool => tool.possibleTool = true)
    }
}

class Acolyte extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.ACOYLTE;
        this.setSkillProficiencies(insight, religion);
        this.numberOfLanguagesToChoose = 2;
        this.gold = 15;
        this.feature = "Shelter of the Faithful";
        this.inventory = ["pouch"];//???????????????????????????????
    }
}

class Charlatan extends Background {
    constructor() {
        super(); this.name = BackgroundNames.CHARLATAN;
        this.setSkillProficiencies(deception, sleightOfHand);
        this.gold = 15;
        this.feature = "False Identity";
        this.inventory = ["a set of fine clothes", "a disguise kit", "pouch"];
        this.chooseInventory = ["ten stoppered bottles filled with colored liquid", "a set of weighted dice", "a deck of marked cards", "a signet ring of an imaginary duke"]
        disguise.proficiency = true;
        forgery.proficiency = true;
    }
}

class Criminal extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.CRIMINAL;
        this.setSkillProficiencies(deception, stealth);
        this.gold = 15;
        this.feature = "Criminal Contact";
        this.inventory = ["crowbar", "a set of dark common clothes including a hood", "pouch"];
        thieves.proficiency = true;
        this.setPossibleTools(cards, dice, dragonAnte, dragonchess);
        this.numberOfToolsToChoose = 1;
    }
}
class Spy extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.SPY;
        this.setSkillProficiencies(deception, stealth);
        this.gold = 15;
        this.feature = "Spy Contact";
        this.inventory = ["crowbar", "a set of dark common clothes including a hood", "pouch"];
        thieves.proficiency = true;
        this.setPossibleTools(cards, dice, dragonAnte, dragonchess);
        this.numberOfToolsToChoose = 1;
    }
}
class Entertainer extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.ENTERTAINER;
        this.setSkillProficiencies(acrobatics, performance);
        disguise.proficiency = true;
        this.setPossibleTools(bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.gold = 15;
        this.feature = "By Popular Demand";
        this.chooseInventory = [bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol]
        this.chooseInventory2 = ["love letter", "lock of hair", "trinket"]
        this.inventory = ["costume clothes", "pouch"];
    }
}
class Gladiator extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.GLADIATOR;
        this.setSkillProficiencies(acrobatics, performance);
        disguise.proficiency = true;
        this.setPossibleTools(bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.gold = 15;
        this.feature = "By Popular Demand";
        this.chooseInventory = [getWeapon("trident"), getWeapon("net")]
        this.chooseInventory2 = ["love letter", "lock of hair", "trinket"]
        this.inventory = ["costume clothes", "pouch"];
    }
}

class FolkHero extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.FOLKHERO;
        this.setSkillProficiencies(animalHandling, survival);
        this.setPossibleTools(brewer, calligrapher, carpenter, cartographer, cobbler, cook, glassblower, jewler, leatherworker, mason, painter, potter, smith, tinker, weaver, woodcarver);
        this.gold = 10;
        this.feature = "Rustic Hospitality";
        this.inventory = ["", "", "", "", "", "", "", "pouch"]; //give it the same tool into inventory as choosing the proficiency!!!
    }
}
class GuildArtisan extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.GUILDARTISAM;
        this.setSkillProficiencies(insight, persuasion);
        this.setPossibleTools(brewer, calligrapher, carpenter, cartographer, cobbler, cook, glassblower, jewler, leatherworker, mason, painter, potter, smith, tinker, weaver, woodcarver);
        this.numberOfLanguagesToChoose = 1;
        this.gold = 15;
        this.feature = "Guild Membership";
        this.inventory = ["letter of introduction from your guild", "set of traveler's clothes", "pouch", "", "", "", "", ""]; //give it the same tool into inventory as choosing the proficiency!!!
    }
}
class GuildMerchant extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.GUILDMERCHANT;
        this.setSkillProficiencies(insight, persuasion);
        this.setPossibleTools(brewer, calligrapher, carpenter, cartographer, cobbler, cook, glassblower, jewler, leatherworker, mason, painter, potter, smith, tinker, weaver, woodcarver, navigators);
        this.numberOfLanguagesToChoose = 1; //or 2 with the function for above?????????????????????????????????
        this.gold = 15;
        this.feature = "Guild Membership";
        this.chooseInventory = [/* same artisan tool as above */, "mule and cart"] //how to? only with one function?
        this.inventory = ["letter of introduction from your guild", "set of traveler's clothes", "pouch", "", "", "", "", ""]; //give it the same tool into inventory as choosing the proficiency!!!
    }
}
class Hermit extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.HERMIT;
        this.setSkillProficiencies(medicine, religion);
        this.numberOfLanguagesToChoose = 1;
        herbalism.proficiency = true;
        this.gold = 5;
        this.feature = "Discovery";
        this.inventory = ["scroll case stuffed full of notes from your studies or prayers", "winter blanket", "set of common clothes", herbalism, "pouch"];
    }
}
class Noble extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.NOBLE;
        this.setSkillProficiencies(history, persuasion);
        this.setPossibleTools(cards, dice, dragonAnte, dragonchess);
        this.numberOfLanguagesToChoose = 1;
        this.gold = 25;
        this.feature = "Position of Privilege";
        this.inventory = ["set of fine clothes", "signet ring", "scroll of pedigree", "pouch"];
    }
}
class Knight extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.KNIGHT;
        this.setSkillProficiencies(history, persuasion);
        this.setPossibleTools(cards, dice, dragonAnte, dragonchess);
        this.numberOfLanguagesToChoose = 1;
        this.gold = 25;
        this.feature = "Retainers";
        this.inventory = ["set of fine clothes", "signet ring", "scroll of pedigree", "pouch"];
    }
}
class Outlander extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.OUTLANDER;
        this.setSkillProficiencies(athletics, survival);
        this.setPossibleTools(bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.numberOfLanguagesToChoose = 1;
        this.gold = 10;
        this.feature = "Wanderer";
        this.inventory = ["staff", "hunting trap", "trophy from an animal you killed", "set of traveler's clothes", "pouch"];
    }
}
class Sage extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.SAGE;
        this.setSkillProficiencies(arcana, history);
        this.numberOfLanguagesToChoose = 2;
        this.gold = 10;
        this.feature = "Researcher";
        this.inventory = ["bottle of black ink", "quill", "small knife", "letter from a dead colleague posing a question you have not yet been able to answer", "set of common clothes", "pouch"];
    }
}
class Sailor extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.SAILOR;
        this.setSkillProficiencies(athletics, perception);
        navigators.proficiency = true;
        vehicles.proficiency = true;
        this.gold = 10;
        this.feature = "Ship's Passage";
        this.inventory = ["belaying pin (club)", "silk rope (50 feet)", "lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5)", "set of common clothes", "", "", "", "pouch"];
    }
}
class Pirate extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.PIRATE;
        this.setSkillProficiencies(athletics, perception);
        navigators.proficiency = true;
        vehicles.proficiency = true;
        this.gold = 10;
        this.feature = "Bad Reputation";
        this.inventory = ["belaying pin (club)", "silk rope (50 feet)", "lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5)", "set of common clothes", "", "", "", "pouch"];
    }
}
class Soldier extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.SOLDIER;
        this.setSkillProficiencies(athletics, intimidation);
        vehicles.proficiency = true;
        this.setPossibleTools(cards, dice, dragonAnte, dragonchess);
        this.gold = 10;
        this.feature = "Military Rank";
        this.inventory = ["insignia of rank", "trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner)", "bone dice set or playing card set", "set of common clothes", "pouch"];
    }
}
class Urchin extends Background {
    constructor() {
        super();
        this.name = BackgroundNames.URCHIN;
        this.setSkillProficiencies(sleightOfHand, stealth);
        disguise.proficiency = true;
        thieves.proficiency = true;
        this.gold = 10;
        this.feature = "City Secrets";
        this.inventory = ["small knife", "map of the city you grew up in", "pet mouse", "token to remember your parents by", "set of common clothes", "pouch"];
    }
}