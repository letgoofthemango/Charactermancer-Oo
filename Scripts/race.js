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

class Race {

    constructor(name, size, speed, strengthBonus, dexterityBonus, constitutionBonus, intelligenceBonus, wisdomBonus, charismaBonus, otherStatBonuses, darkvision, feat, languageProficiency, extraLanguages, toolProficiency, extraToolProficiency) {
        this.name = name,
            this.size = size,
            this.speed = speed,
            this.strengthBonus = strengthBonus,
            this.dexterityBonus = dexterityBonus,
            this.constitutionBonus = constitutionBonus,
            this.intelligenceBonus = intelligenceBonus,
            this.wisdomBonus = wisdomBonus,
            this.charismaBonus = charismaBonus,
            this.otherStatBonuses = otherStatBonuses,
            this.darkvision = darkvision,
            this.feat = feat,
            this.languageProficiency = languageProficiency,
            this.extraLanguages = extraLanguages,
            this.toolProficiency = toolProficiency,
            this.extraToolProficiency = extraToolProficiency
    }
}