class Feature {
    constructor(level, characterClass, name, component) {
        this.level = level;
        this.characterClass = characterClass; //needs implementation
        this.name = name;
        this.component = component;
    }
}

// class CharacterFeature extends Feature TODO!!!!!!!!
// class RaceFeature extends Feature
// class BackgroundFeature extends Feature
// features = [...] // list of all (character, race, background) features
// function getFeature(featureName); // return the feature with featureName
// function getCharaterFeaturesFor(characterClass) {
//     // isinstanceof(feature, CharacterFeature) check whether feature is of class CharacterFeature
// } // return all features for characterClass
// function getRaceFeaturesFor(race) {
//     // Test in loop that it is a race feature.
// }

//-------------------------------------------------------------Barbarian-----------------------------------------------------------------------------
let barbarianFeatures = [new Feature(1, "Rage", `<h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>
<div class="collapse show" id="feature1">
    <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>
    <p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p>
    <ul>
        <li>You have advantage on Strength checks and Strength saving throws.</li>
        <li>When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.</li>
        <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
    </ul>
    <p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p>
    <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus
        action.
    </p>
    <p>Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.</p>
</div>`),
new Feature(1, "Unarmored Defense", `<h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>
<div class="collapse show" id="feature2">
    <p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
</div>`)];
function getBarbarianFeature(featureName) {
    for (const feature of barbarianFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Bard-----------------------------------------------------------------------------
let bardFeatures = [
    new Feature(1, "Bardic Inspriration", `
    <h5>Bardic Inspiration<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a
            d6.
        </p>
        <p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic
            Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p>
        <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p>
        <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
        <h6><b>Magical Inspiration</b></h6>
        <p>If a creature has a Bardic Inspiration die from you and casts a spell, the creature can roll that die and add the number rolled to one damage or healing roll of the spell. The Bardic Inspiration die is then lost.</p>
    </div>`),
    new Feature(1, "Spellcasting", `
    <h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature3">
        <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 of the Players Handbook for the general rules of
            spellcasting.</p>

        <h6><b>Cantrips</b></h6>
        <p>You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.</p>

        <h6><b>Spell Slots</b></h6>
        <p>The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
            a long rest.</p>
        <p>For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.</p>

        <h6><b>Spells Known of 1st Level and Higher</b></h6>
        <p>You know four 1st-level spells of your choice from the bard spell list.</p>
        <p>You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn
            one new spell of 1st or 2nd level.</p>
        <p>Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In
            addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p>

        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a musical instrument as a spellcasting focus for your bard spells.</p>

        <h6><b>Spell Versatility</b></h6>
        <p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the bard spell list. The new spell must be the same level as the spell you replace.</p>

    </div>`)];
function getBardFeature(featureName) {
    for (const feature of bardFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Cleric continue here!!!-----------------------------------------------------------------------------
class ClericFeature extends Feature{
    constructor(){
        super();
        this.extracantrip; //TODO
    }
}
let clericFeatures = [
    new Feature(1, "Spellcasting",),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getClericFeature(featureName) {
    for (const feature of clericFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Druid-----------------------------------------------------------------------------
let druidFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getDruidFeature(featureName) {
    for (const feature of druidFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Fighter-----------------------------------------------------------------------------
let fighterFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getFighterFeature(featureName) {
    for (const feature of fighterFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Monk-----------------------------------------------------------------------------
let monkFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getMonkFeature(featureName) {
    for (const feature of monkFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}

//-------------------------------------------------------------Paladin-----------------------------------------------------------------------------
let paladinFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getPaladinFeature(featureName) {
    for (const feature of paladinFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Ranger-----------------------------------------------------------------------------
let rangerFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getRangerFeature(featureName) {
    for (const feature of rangerFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Rogue-----------------------------------------------------------------------------
let rogueFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getRogueFeature(featureName) {
    for (const feature of rogueFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Sorcerer-----------------------------------------------------------------------------
let sorcererFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getSorcererFeature(featureName) {
    for (const feature of sorcererFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Warlock-----------------------------------------------------------------------------
let warlockFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getWarlockFeature(featureName) {
    for (const feature of warlockFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}
//-------------------------------------------------------------Wizard-----------------------------------------------------------------------------
let wizardFeatures = [
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``),
    new Feature(1, "", ``)
];
function getWizardFeature(featureName) {
    for (const feature of wizardFeatures) {
        if (feature.name === featureName) {
            return feature
        }
    }
}