const ArmorType = {
    NONE: "none",
    LIGHT: "light",
    MEDIUM: "medium",
    HEAVY: "heavy",
    SHIELD: "shield"
}
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
function getArmor(armorName) {
    for (const armor of armors) {
        if (armor.name === armorName) {
            return armor
        }
    }
}