class Monk extends Character { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    constructor() {
        super();
        this.characterClass = CharacterClasses.MONK;
        this.hitDice = 8;
        this.armorProficiencies = {
            none: true,
            light: false,
            medium: false,
            heavy: false,
            shields: false
        }
        this.setSimpleWeaponsProficiency();
        this.setWeaponsProficiency("shortsword")
        this.maxToolProficiencies = 1;
        this.setPossibleTools(alchemist, brewer, calligrapher, carpenter, cartographer, cobbler, cook, glassblower, jewler, leatherworker, mason, painter, potter, smith, tinker, weaver, woodcarver, bagpipes, drum, dulcimer, flute, horn, lute, lyre, pan, shawm, viol);
        this.maxLanguageProficiencies = 0;
        this.setSaves(dexterity, strength);
        this.maxSkillsProficiencies = 2;
        this.setPossibleSkills(acrobatics, athletics, history, insight, religion, stealth);
        this.characterFeatures = ["Unarmored Defense", "Martial Arts"];
    }

    get AC() { return 10 + wisdom.mod + dexterity.mod }
}