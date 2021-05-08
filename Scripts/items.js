
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
const ArmorType = {
    NONE: "none",
    LIGHT: "light",
    MEDIUM: "medium",
    HEAVY: "heavy",
    SHIELD: "shield"
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
    constructor(name, type, copper, silver, gold, weight, description, damage, damageType, simple, martial, light, heavy, twoHanded, range, special, finesse, ammunition, loading, thrown) {
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
        this.thrown = thrown;
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
    new MeleeWeapon("club", ItemType.MELEE, 0, 1, 0, 2, "A club made of wood.", "1d4", "bludgeoning", true, false, true, false, false, 5, null, false, false, false, false, false, null),
    new MeleeWeapon("dagger", ItemType.MELEE, 0, 0, 2, 1, "A simple metal dagger.", "1d4", "piercing", true, false, true, false, false, 5, null, true, false, true, "20/60", false, null),
    new MeleeWeapon("greatclub", ItemType.MELEE, 0, 2, 0, 10, "A large club made of wood.", "1d8", "bludgeoning", true, false, false, false, true, 5, null, false, false, false, false, false, null),
    new MeleeWeapon("handaxe", ItemType.MELEE, 0, 0, 5, 2, "A one-handed axe.", "1d6", "slashing", true, false, true, false, false, 5, null, false, false, true, "20/60", false, null),
    new MeleeWeapon("javelin", ItemType.MELEE, 0, 0, 5, 2, "A simple javelin with a metal tip.", "1d6", "piercing", true, false, false, false, false, 5, null, false, false, true, "30/120", false, null),
    new MeleeWeapon("light hammer", ItemType.MELEE, 0, 0, 2, 2, "A simple one-handed hammer.", "1d4", "bludgeoning", true, false, true, false, false, 5, null, false, false, true, "20/60", false, null),
    new MeleeWeapon("mace", ItemType.MELEE, 0, 0, 5, 4, "A mace made of metal.", "1d6", "bludgeoning", true, false, false, false, false, 5, null, false, false, false, false, false, null),
    new MeleeWeapon("quarterstaff", ItemType.MELEE, 0, 2, 0, 4, "A staff made of wood.", "1d6", "bludgeoning", true, false, false, false, false, 5, null, false, false, false, false, true, "1d8"),
    new MeleeWeapon("sickle", ItemType.MELEE, 0, 0, 1, 2, "A sickle made of metal.", "1d4", "slashing", true, false, true, false, false, 5, null, false, false, false, false, false, null),
    new MeleeWeapon("spear", ItemType.MELEE, 0, 0, 1, 3, "A wooden spear with a metal tip.", "1d6", "piercing", true, false, false, false, false, 5, null, false, false, true, "20/60", true, "1d8"),
    new MeleeWeapon("battleaxe", ItemType.MELEE, 0, 0, 10, 4, "A medium sized battleaxe.", "1d8", "slashing", false, true, false, false, false, 5, null, false, false, false, null, true, "1d10"),
    new MeleeWeapon("flail", ItemType.MELEE, 0, 0, 10, 2, "A metal flail.", "1d8", "bludgeoning", false, true, false, false, false, 5, null, false, null, false, null, false, null),
    new MeleeWeapon("glaive", ItemType.MELEE, 0, 0, 20, 6, "A metal glaive.", "1d10", "slashing", false, true, false, true, true, 10, null, false, true, false, null, false),
    new MeleeWeapon("greataxe", ItemType.MELEE, 0, 0, 30, 7, "A large metal axe", "1d12", "slashing", false, true, false, true, true, 5, null, false, false, false, null, false, null),
    new MeleeWeapon("greatsword", ItemType.MELEE, 0, 0, 50, 6, "A large two-handed sword.", "2d6", "slashing", false, true, false, true, true, 5, null, false, null, false, null, false, null),
    new MeleeWeapon("halberd", ItemType.MELEE, 0, 0, 20, 6, "A halberd.", "1d10", "slashing", false, true, false, true, true, 10, null, false, true, false, null, false, null),
    new MeleeWeapon("lance", ItemType.MELEE, 0, 0, 10, 6, "A metal lance.", "1d12", "piercing", false, true, false, false, false, 10, "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.", false, true, false, null, false, null),
    new MeleeWeapon("longsword", ItemType.MELEE, 0, 0, 15, 3, "A longsword", "1d8", "slashing", false, true, false, false, false, 5, null, false, false, false, null, true, "1d10"),
    new MeleeWeapon("maul", ItemType.MELEE, 0, 0, 10, 10, "A heavy maul.", "2d6", "bludgeoning", false, true, false, true, true, 5, null, false, false, false, null, false, null),
    new MeleeWeapon("morningstar", ItemType.MELEE, 0, 0, 15, 4, "A metal morningstar.", "1d8", "piercing", false, true, false, false, false, 5, null, false, false, false, null, false, null),
    new MeleeWeapon("pike", ItemType.MELEE, 0, 0, 5, 18, "A metal tipped pike.", "1d10", "piercing", false, true, false, true, true, 10, null, false, true, false, null, false, null),
    new MeleeWeapon("rapier", ItemType.MELEE, 0, 0, 25, 2, "A metal rapier.", "1d8", "piercing", false, true, false, false, false, 5, null, true, false, false, null, false, null),
    new MeleeWeapon("scimitar", ItemType.MELEE, 0, 0, 25, 3, "A curved metal scimitar", "1d6", "slashing", false, true, true, false, false, 5, null, true, false, false, null, false, null),
    new MeleeWeapon("shortsword", ItemType.MELEE, 0, 0, 10, 2, "A metal short sword.", "1d6", "piercing", false, true, true, false, false, 5, null, true, false, false, null, false, null),
    new MeleeWeapon("trident", ItemType.MELEE, 0, 0, 5, 4, "A metal tipped trident.", "1d6", "piercing", false, true, false, false, false, 5, null, false, false, true, "20/60", true, "1d8"),
    new MeleeWeapon("war pick", ItemType.MELEE, 0, 0, 5, 2, "A metal war pick", "1d8", "piercing", false, true, false, false, false, 5, null, false, false, false, null, false, null),
    new MeleeWeapon("warhammer", ItemType.MELEE, 0, 0, 15, 2, "A metal warhammer.", "1d8", "bludgeoning", false, true, false, false, false, 5, null, false, false, false, null, true, "1d10"),
    new MeleeWeapon("whip", ItemType.MELEE, 0, 0, 2, 3, "A leather whip.", "1d4", "slashing", false, true, false, false, false, 10, null, true, true, false, null, false, null),
    new RangedWeapon("light crossbow", ItemType.RANGED, 0, 0, 25, 5, "A simple two-handed crossbow.", "1d8", "piercing", true, false, false, false, true, "80/320", null, false, true, true, false),
    new RangedWeapon("dart", ItemType.RANGED, 5, 0, 0, 0.25, "A simple dart.", "1d4", "piercing", true, false, false, false, false, "20/60", null, true, false, false, false),
    new RangedWeapon("shortbow", ItemType.RANGED, 0, 0, 25, 2, "A simple shortbow.", "1d6", "piercing", true, false, false, false, true, "80/320", null, false, true, false, false),
    new RangedWeapon("sling", ItemType.RANGED, 0, 1, 0, 0, "A simple two-handed crossbow.", "1d4", "bludgeoning", true, false, false, false, false, "30/120", null, false, true, false, false),
    new RangedWeapon("blowgun", ItemType.RANGED, 0, 0, 10, 1, "A metal blowgun", "1", "piercing", false, true, false, false, false, "25/100", null, false, true, true, false),
    new RangedWeapon("hand crossbow", ItemType.RANGED, 0, 0, 75, 3, "A hand crossbow", "1d6", "piercing", false, true, true, false, false, "30/120", null, false, true, true, false),
    new RangedWeapon("heavy crossbow", ItemType.RANGED, 0, 0, 50, 18, "A heavy two-handed crossbow", "1d10", "piercing", false, true, false, true, true, "100/400", null, false, true, true, false),
    new RangedWeapon("longbow", ItemType.RANGED, 0, 0, 50, 2, "A wooden longbow", "1d8", "piercing", false, true, false, true, true, "150/600", null, false, true, false, false),
    new RangedWeapon("net", ItemType.RANGED, 0, 0, 1, 3, "A sturdy net.", null, null, false, true, false, false, false, "5/15", "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.", false, false, false, true),
]

class Armor extends InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description, strengthReq, stealthDis, armorClass, armorType) {
        super(name, type, copper, silver, gold, weight, description),
            this.strengthReq = strengthReq,
            this.stealthDis = stealthDis,
            this.armorClass = armorClass,
            this.armorType = armorType
    }
}
let armors = [
    new Armor("padded armor", ItemType.ARMOR, 0, 0, 5, 8, "Padded armor consists of quilted layers of cloth and batting.", 0, true, 11, ArmorType.LIGHT),
    new Armor("leather armor", ItemType.ARMOR, 0, 0, 10, 10, "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.", 0, false, 11, ArmorType.LIGHT),
    new Armor("studded leather armor", ItemType.ARMOR, 0, 0, 45, 13, "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.", 0, false, 12, ArmorType.LIGHT),
    new Armor("hide armor", ItemType.ARMOR, 0, 0, 10, 12, "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.", 0, false, 12, ArmorType.MEDIUM),
    new Armor("chain shirt", ItemType.ARMOR, 0, 0, 50, 20, "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.", 0, false, 13, ArmorType.MEDIUM),
    new Armor("scale mail armor", ItemType.ARMOR, 0, 0, 50, 45, "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.", 0, true, 14, ArmorType.MEDIUM),
    new Armor("breatplate armor", ItemType.ARMOR, 0, 0, 400, 20, "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.", 0, false, 14, ArmorType.MEDIUM),
    new Armor("half plate armor", ItemType.ARMOR, 0, 0, 750, 40, "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.", 0, true, 15, ArmorType.MEDIUM),
    new Armor("ring mail armor", ItemType.ARMOR, 0, 0, 30, 40, "This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor.", 0, true, 14, ArmorType.HEAVY),
    new Armor("chain mail armor", ItemType.ARMOR, 0, 0, 75, 55, "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets. If the wearer has a Strength score lower than 13, their speed is reduced by 10 feet.", 13, true, 16, ArmorType.HEAVY),
    new Armor("splint armor", ItemType.ARMOR, 0, 0, 200, 60, "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints. If the wearer has a Strength score lower than 15, their speed is reduced by 10 feet.", 15, true, 17, ArmorType.HEAVY),
    new Armor("plate armor", ItemType.ARMOR, 0, 0, 1500, 65, "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body. If the wearer has a Strength score lower than 15, their speed is reduced by 10 feet.", 15, true, 18, ArmorType.HEAVY),
    new Armor("shield", ItemType.ARMOR, 0, 0, 10, 6, "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.", 0, false, +2, ArmorType.SHIELD),
]