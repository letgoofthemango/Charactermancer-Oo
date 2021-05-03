const SpellSchool = {
    ABJURATION: "Abjuration",
    CONJURATION: "Conjuration",
    DIVINATION: "Divination",
    ENCHANTMENT: "Enchantment",
    EVOCATION: "Evocation",
    ILLUSION: "Illusion",
    NECROMANCY: "Necromancy",
    TRANSMUTATION: "Transmutation"
}

class Spell {
    constructor(name, spellLevel, school, castingTime, range, components, duration, description, classes, atHigherLevels) {
        this.name = name;
        this.spellLevel = spellLevel;
        this.school = school;
        this.castingTime = castingTime;
        this.range = range;
        this.components = components;
        this.duration = duration;
        this.description = description;
        this.classes = classes;
        this.atHigherLevels = atHigherLevels;
    }
}