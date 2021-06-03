export const ItemType = {
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

export class InventoryItem {
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