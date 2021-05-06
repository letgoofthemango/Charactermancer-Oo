
const ToolName = {
    ALCHEMIST: "alchemist's supplies",
    BREWER: "brewer's supplies",
    CALLIGRAPHER: "calligrapher's supplies",
    CARPENTER: "carpenter's tools",
    CARTOGRAPHER: "cartographer's tools",
    COBBLER: "cobbler's tools",
    COOK: "cook's utensils",
    GLASBLOWER: "glassblower's tools",
    JEWLER: "jeweler's tools",
    LEATHERWORKER: "leatherworker's tools",
    MASON: "mason's tools",
    PAINTER: "painter's supplies",
    POTTER: "potter's tools",
    SMITH: "smith's tools",
    TINKER: "tinker's tools",
    WEAVER: "weaver's tools",
    WOODCARVER: "woodcarver's tools",
    DICE: "dice set",
    DRAGONCHESS: "Dragonchess set",
    CARDS: "playing card set",
    DRAGONANTE: "Three-Dragon Ante set",
    BAGPIPES: "bagpipes",
    DRUM: "drum",
    DULCIMER: "dulcimer",
    FLUTE: "flute",
    LUTE: "lute",
    LYRE: "lyre",
    HORN: "horn",
    PAN: "pan flute",
    SHAWM: "shawm",
    VIOL: "viol",
    DISGUISE: "disguise kit",
    FORGERY: "forgery kit",
    HERBALISM: "herbalism kit",
    NAVIGATOR: "navigator's tools",
    POISONER: "poisoner's kit",
    THIEVES: "thieves' tools",
    VEHICLES: "vehicles (land or sea)"
}

const ItemType = {
    ARTISAN: "artisan's tool",
    KIT: "kit",
    GAMING: "gaming set",
    INSTRUMENT: "instrument",
    MELEE: "melee weapon",
    RANGED: "ranged weapon",
    ARMOR: "armor",
    SHIELD: "shield",
    AMMUNITION: "ammunition",
    GENERAL: "general"
}

class InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description) {
        this.name = name,
            this.type = type,
            this.copper = copper,
            this.silver = silver,
            this.gold = gold,
            this.weight = weight,
            this.description = description
    }
}



class RangedWeapon extends InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description, damage, damageType, simple, martial, light, heavy, twoHanded, range, special, finesse, ammunition, loading) {
        super(name, type, copper, silver, gold, weight, description);
        this.damage = damage;
        this.damageType = damageType;
        this.simple = simple;
        this.martial = martial;
        this.light = light;
        this.heavy = heavy;
        this.twoHanded = twoHanded;
        this.range = range;
        this.special = special;
        this.finesse = finesse;
        this.ammunition = ammunition;
        this.loading = loading;
        this.proficiency = false
    }
}

class MeleeWeapon extends InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description, damage, damageType, simple, martial, light, heavy, twoHanded, meleeRange, special, finesse, reach, thrown, range, versatile, versatileDamage) {
        super(name, type, copper, silver, gold, weight, description),
            this.damage = damage;
        this.damageType = damageType;
        this.simple = simple;
        this.martial = martial;
        this.light = light;
        this.heavy = heavy;
        this.twoHanded = twoHanded;
        this.range = range;
        this.special = special;
        this.finesse = finesse;
        this.reach = reach;
        this.thrown = thrown;
        this.versatile = versatile;
        this.versatileDamage = versatileDamage;
        this.proficiency = false
    }
}
let weapons = [
    new MeleeWeapon("club", ItemType.MELEE, 0, 1, 0, 2, "A club made of wood.", "1d4", "bludgeoning", true, false, true, false, false, 5, false, false, false, false, false, false, false),
    new MeleeWeapon("dagger", ItemType.MELEE, 0, 0, 2, 1, "A simple metal dagger.", "1d4", "piercing", true, false, true, false, false, 5, false, true, false, true, "20/60", false, false),
    new MeleeWeapon("greatclub", ItemType.MELEE, 0, 2, 0, 10, "A large club made of wood.", "1d8", "bludgeoning", true, false, false, false, true, 5, false, false, false, false, false, false, false),
    new MeleeWeapon("handaxe", ItemType.MELEE, 0, 0, 5, 2, "A one-handed axe.", "1d6", "slashing", true, false, true, false, false, 5, false, false, false, true, "20/60", false, false),
    new MeleeWeapon("javelin", ItemType.MELEE, 0, 0, 5, 2, "A simple javelin with a metal tip.", "1d6", "piercing", true, false, false, false, false, 5, false, false, false, true, "30/120", false, false),
    new MeleeWeapon("light hammer", ItemType.MELEE, 0, 0, 2, 2, "A simple one-handed hammer.", "1d4", "bludgeoning", true, false, true, false, false, 5, false, false, false, true, "20/60", false, false),
    new MeleeWeapon("mace", ItemType.MELEE, 0, 0, 5, 4, "A mace made of metal.", "1d6", "bludgeoning", true, false, false, false, false, 5, false, false, false, false, false, false, false),
    new MeleeWeapon("quarterstaff", ItemType.MELEE, 0, 2, 0, 4, "A staff made of wood.", "1d6", "bludgeoning", true, false, false, false, false, 5, false, false, false, false, false, true, "1d8"),
    new MeleeWeapon("sickle", ItemType.MELEE, 0, 0, 1, 2, "A sickle made of metal.", "1d4", "slashing", true, false, true, false, false, 5, false, false, false, false, false, false, false),
    new MeleeWeapon("spear", ItemType.MELEE, 0, 0, 1, 3, "A wooden spear with a metal tip.", "1d6", "piercing", true, false, false, false, false, 5, false, false, false, true, "20/60", true, "1d8"),
    new RangedWeapon("light crossbow", ItemType.RANGED, 0, 0, 25, 5, "A simple two-handed crossbow.", "1d8", "piercing", true, false, false, false, true, "80/320", false, false, true, true),
    new RangedWeapon("dart", ItemType.RANGED, 5, 0, 0, 0.25, "A simple dart.", "1d4", "piercing", true, false, false, false, false, "20/60", false, true, false, false),
    new RangedWeapon("shortbow", ItemType.RANGED, 0, 0, 25, 2, "A simple shortbow.", "1d6", "piercing", true, false, false, false, true, "80/320", false, false, true, false),
    new RangedWeapon("sling", ItemType.RANGED, 0, 0, 0, 0, "A simple two-handed crossbow.", "1d4", "bludgeoning", true, false, false, false, false, "30/120", false, false, true, false),
]

class Armor extends InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description, strengthReq, stealthDis, armorClass) {
        super(name, type, copper, silver, gold, weight, description),
            this.strengthReq = strengthReq,
            this.stealthDis = stealthDis,
            this.armorClass = armorClass
    }
}



// ignore rest
let tools = [
];

// function resetToolProficiencies() {
//     char.toolProficiencies.alchemist = false;
//     char.toolProficiencies.bagpipes = false;
//     char.toolProficiencies.brewer = false;
//     char.toolProficiencies.calligrapher = false;
//     char.toolProficiencies.carpenter = false;
//     char.toolProficiencies.cartographer = false;
//     char.toolProficiencies.cobbler = false;
//     char.toolProficiencies.cook = false;
//     char.toolProficiencies.dice = false;
//     char.toolProficiencies.disguise = false;
//     char.toolProficiencies.dragonAnte = false;
//     char.toolProficiencies.dragonchess = false;
//     char.toolProficiencies.drum = false;
//     char.toolProficiencies.dulcimer = false;
//     char.toolProficiencies.flute = false;
//     char.toolProficiencies.forgery = false;
//     char.toolProficiencies.glassblower = false;
//     char.toolProficiencies.herbalism = false;
//     char.toolProficiencies.horn = false;
//     char.toolProficiencies.jewler = false;
//     char.toolProficiencies.leatherworker = false;
//     char.toolProficiencies.lute = false;
//     char.toolProficiencies.lyre = false;
//     char.toolProficiencies.mason = false;
//     char.toolProficiencies.navigator = false;
//     char.toolProficiencies.painter = false;
//     char.toolProficiencies.pan = false;
//     char.toolProficiencies.playingCards = false;
//     char.toolProficiencies.poisoner = false;
//     char.toolProficiencies.potter = false;
//     char.toolProficiencies.shawm = false;
//     char.toolProficiencies.smith = false;
//     char.toolProficiencies.thieves = false;
//     char.toolProficiencies.tinker = false;
//     char.toolProficiencies.viol = false;
//     char.toolProficiencies.weaver = false;
//     char.toolProficiencies.woodcarver = false;
// }