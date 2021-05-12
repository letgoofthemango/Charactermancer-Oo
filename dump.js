// search function for skills (later)
function getSkill(skillName) {
    for (s in skills) {
        if (s.name === skillName) {
            return s
        }
    }
}


get armorProficiencies() {
    let temp = {}
    // if race is dwarf
    temp.light = true
    temp.medium = true
    temp.heavy = this._armorProficiencies.heavy
    return temp
}