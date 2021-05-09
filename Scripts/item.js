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