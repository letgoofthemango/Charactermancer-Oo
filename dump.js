// search function for skills (later)
function getSkill(skillName) {
    for (s in skills) {
        if (s.name === skillName) {
            return s
        }
    }
}