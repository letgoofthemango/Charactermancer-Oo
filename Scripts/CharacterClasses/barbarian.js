import { Character,CharacterClasses } from "../character.js";
import { AbilityType, AbilityScore, strength, dexterity, constitution, intelligence, wisdom, charisma } from "../abilityScore.js";
import { Skillnames, SkillLevel, acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival, resetPossibleSkills, resetSkillProficiencies } from "../skill.js";
import { ToolName, alchemist, bagpipes, brewer, calligrapher, cards, carpenter, cartographer, cobbler, cook, dice, disguise, dragonAnte, dragonchess, drum, dulcimer, flute, forgery, glassblower, herbalism, horn, jewler, leatherworker, lute, lyre, mason, navigators, painter, pan, poisoner, potter, shawm, smith, thieves, tinker, vehicles, viol, weaver, woodcarver } from "../tool";
import { LanguageNames, abyssal, auran, aquan, celestial, common, deepspeech, draconic, druidic, dwarvish, elvish, giant, gnomish, goblin, halfling, ignan, infernal, orc, primordial, sylvan, terran, thievesCant, undercommon } from "../language.js";
import { spells, getSpell, setSpellsKnown, setSpellsPrepared, sortSpells } from "../spell.js";
import { features, getBackgroundFeatures, getCharaterFeatures, getFeature, getRaceFeatures } from "../characterFeature.js";
import { weapons, getWeapon } from "./weapon.js";

export class Barbarian extends Character {
    constructor() {
        super();
        this.class= CharacterClasses.BARBARIAN;
        this.hitDice = 12;
        this._armorProficiencies = {
            none: true,
            light: true,
            medium: true,
            heavy: false,
            shields: true
        }
        this.simpleWeaponsProficiency();
        this.martialWeaponsProficiency();
        this.maxToolProficiencies = 0;
        this.maxLanguageProficiencies = 0;
        this.saves=[strength, constitution];
        this.maxSkillsProficiencies = 2;
        this.possibleSkills=[animalHandling, athletics, intimidation, nature, perception, survival];
        this.features = ["Rage", "Unarmored Defense"];
    }

    get AC() {
        let ac = 0
        switch (this.armorType) {
            case ArmorType.NONE:
                ac = 10 + dexterity.mod + constitution.mod
                break;
            case ArmorType.LIGHT:
                ac = this.armorClass + dexterity.mod
                break;
            case ArmorType.MEDIUM:
                ac = this.armorClass + Math.min(Math.max(-4, dexterity.mod), 2)
                break;
            default:
                alert("ERROR WHILE CALCULATING AC!");
        }
        if (this.hasShield) {
            ac += 2
        }
        return ac;
    }
}


// let barbarian = new Barbarian();

// const barbarianFeaturesByLevel = [`<h1 class="text-center">Barbarian<span class="ml-2"><button class="collapseButton" type="button"
// data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true"
// aria-controls="collapseIntro">[-]</button></span></h1>
// <div class="collapse show" id="collapseIntro">
// <nav>
// <div class="nav nav-tabs" id="nav-tab" role="tablist">
// <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
//     aria-controls="nav-home" aria-selected="true">Class table</a>
// <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
//     aria-controls="nav-profile" aria-selected="false">Class description</a>
// </div>
// </nav>
// <div class="tab-content" id="nav-tabContent">
// <!-- -------------------------------------------------------------beginning description div-->
// <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
// <p>A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs
//     as he charges toward the frost giant who dared poach his people's elk herd.</p>
// <p>A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to
//     break his neck with her bare hands as she did to the last six rivals.</p>
// <p>Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to
//     drive his armored elbow into the gut of another.</p>
// <p>These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable,
//     and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered
//     predator, the unrelenting assault of a storm, the churning
//     turmoil of the sea.</p>
// <p>For some, their rage springs from a communion with fierce animal spirits. Others draw from a
//     roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that
//     fuels not just a battle frenzy but also uncanny reflexes,
//     resilience, and feats of strength.</p>
// <h5>Primal Instinct</h5>
// <p>People of towns and cities take pride in how their civilized ways set them apart from animals, as
//     if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is
//     no virtue, but a sign of weakness. The strong
//     embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians
//     are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their
//     homelands: the tundra, jungle, or grasslands where their
//     tribes live and hunt.</p>
// <p>Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes
//     over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of
//     fury only a few times without resting, but those
//     few rages are usually sufficient to defeat whatever threats arise.</p>
// <h5>A Life of Danger</h5>
// <p>Not every member of the tribes deemed "barbarians" by scions of civilized society has the
//     barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a
//     town, and he or she plays a similar role as a protector
//     of the people and a leader in times of war. Life in the wild places of the world is fraught with
//     peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into
//     that danger so that their people don't have
//     to.
// </p>
// <p>Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering
//     is often a way of life for their native tribes, and the rootless life of the adventurer is
//     little hardship for a barbarian. Some barbarians miss
//     the close-knit family structures of the tribe, but eventually find them replaced by the bonds
//     formed among the members of their adventuring parties.</p>
// <i>I have witnessed the indomitable performance of barbarians on the field of battle, and it makes
//     me wonder what force lies at the heart of their rage.</i>
// <p>— Seret, Arch wizard</p>
// </div><!-- -------------------------------------------------------------end description div-->
// <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
// <!-- -------------------------beginning table div-->
// <table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
//     <tbody>
//         <tr>
//             <!-- row so table striped coloring doesnt start with Black-->
//         </tr>
//         <tr>
//             <th>Level</th>
//             <th>Proficiency Bonus</th>
//             <th>Features</th>
//             <th><div>Rages</div></th>
//             <th><div>Rage Damage</div></th>
//         </tr>
//         <tr>
//             <td>1st</td>
//             <td>+2</td>
//             <td><span>Rage, </span><span>Unarmored Defense</span></td>
//             <td>2</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>2nd</td>
//             <td>+2</td>
//             <td>
//                 <span>Danger Sense,</span>
//                 <span>Reckless Attack</span>
//             </td>
//             <td>2</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>3rd</td>
//             <td>+2</td>
//             <td>
//                 <span>Primal Path</span>
//             </td>
//             <td>3</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>4th</td>
//             <td>+2</td>
//             <td>
//                 <span>Ability Score Improvement</span>
//             </td>
//             <td>3</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>5th</td>
//             <td>+3</td>
//             <td>
//                 <span>Extra Attack,</span>
//                 <span>Fast Movement</span>
//             </td>
//             <td>3</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>6th</td>
//             <td>+3</td>
//             <td>
//                 <span>Path Feature</span>
//             </td>
//             <td>4</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>7th</td>
//             <td>+3</td>
//             <td>
//                 <span>Feral Instinct</span>
//             </td>
//             <td>4</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>8th</td>
//             <td>+3</td>
//             <td>
//                 <span>Ability Score
//                     Improvement</span>
//             </td>
//             <td>4</td>
//             <td>+2</td>
//         </tr>
//         <tr>
//             <td>9th</td>
//             <td>+4</td>
//             <td>
//                 <span>Brutal Critical (1 die)</span>
//             </td>
//             <td>4</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>10th</td>
//             <td>+4</td>
//             <td>
//                 <span>Path feature</span>
//             </td>
//             <td>4</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>11th</td>
//             <td>+4</td>
//             <td>
//                 <span>Relentless Rage</span>
//             </td>
//             <td>4</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>12th</td>
//             <td>+4</td>
//             <td>
//                 <span>Ability Score Improvement</span>
//             </td>
//             <td>5</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>13th</td>
//             <td>+5</td>
//             <td>
//                 <span>Brutal Critical (2 dice)</span>
//             </td>
//             <td>5</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>14th</td>
//             <td>+5</td>
//             <td>
//                 <span>Path feature</span>
//             </td>
//             <td>5</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>15th</td>
//             <td>+5</td>
//             <td>
//                 <span>Persistent Rage</span>
//             </td>
//             <td>5</td>
//             <td>+3</td>
//         </tr>
//         <tr>
//             <td>16th</td>
//             <td>+5</td>
//             <td>
//                 <span>Ability Score Improvement</span>
//             </td>
//             <td>5</td>
//             <td>+4</td>
//         </tr>
//         <tr>
//             <td>17th</td>
//             <td>+6</td>
//             <td>
//                 <span>Brutal Critical (3 dice)</span>
//             </td>
//             <td>6</td>
//             <td>+4</td>
//         </tr>
//         <tr>
//             <td>18th</td>
//             <td>+6</td>
//             <td>
//                 <span>Indomitable Might</span>
//             </td>
//             <td>6</td>
//             <td>+4</td>
//         </tr>
//         <tr>
//             <td>19th</td>
//             <td>+6</td>
//             <td>
//                 <span>Ability Score Improvement</span>
//             </td>
//             <td>6</td>
//             <td>+4</td>
//         </tr>
//         <tr>
//             <td>20th</td>
//             <td>+6</td>
//             <td>
//                 <span>Primal Champion</span>
//             </td>
//             <td>Unlimited</td>
//             <td>+4</td>
//         </tr>
//     </tbody>
// </table>
// </div><!-- -------------------------end table div-->
// <h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
// <div class="collapse show" id="level1">
//     <h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
//     <hr>
//     <div class="collapse show" id="feature1">
//         <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>
//         <p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p>
//         <ul>
//             <li>You have advantage on Strength checks and Strength saving throws.</li>
//             <li>When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.</li>
//             <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
//         </ul>
//         <p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p>
//         <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus
//             action.
//         </p>
//         <p>Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.</p>
//     </div>
//     <h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
//     <hr>
//     <div class="collapse show" id="feature2">
//         <p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
//     </div>
// </div>`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 4`, `<p>barbarian 5`, `<p>barbarian 6`, `<p>barbarian 7`, `<p>barbarian 8`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 1`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`];