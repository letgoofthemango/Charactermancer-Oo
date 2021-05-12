const BackgroundNames = {
    ACOYLTE: "Acolyte",
    CHARLATAN: "Charlatan",
    CRIMINAL: "Criminal",
    ENTERTAINER: "Entertainer",
    GLADIATOR: "Entertainer (Gladiator)",
    FOLKHERO: "Folk hero",
    GUILDARTISAM: "Guild artisan",
    GUILDMERCHANT: "Guild merchant",
    HERMIT: "Hermit",
    NOBLE: "Noble",
    KNIGHT: "Noble (Knight)",
    Outlander: "Outlander",
    SAGE: "Sage",
    SAILOR: "Sailor",
    PIRATE: "Sailor (Pirate)",
    SOLDIER: "Soldier",
    URCHIN: "Urchin"
}

class ToolProficiency {
    constructor(tool, bonus) {
        // TODO
    }
}




class Background {

    constructor(name, pSkill1, pSkill2) {
        
        this.name = name;
        this.setPossibleSkills(pSkill1, pSkill2);
        this.skillproficiency1 = skillproficiency1;
        this.skillproficiency2 = skillproficiency2;
        
        this.toolproficiencies = // Array of ToolProficiency
        this.toolproficiency1 = toolproficiency1;
        this.toolproficiency2 = toolproficiency2;
        this.extraToolProficiency = extraToolProficiency;
        this.extraLanguages = extraLanguages;
        this.equipment = equipment;
    }

    addToolProficiency(toolProficiency) {
        // Check if within constraints
        // if yes, add tool prof
    }
}