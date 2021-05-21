class Feature {
    constructor(name, component) {
        this.name = name;
        this.component = component;
    }
}

class CharacterClassFeature extends Feature {
    constructor(name, component, level, characterClass) {
        super(name, component);
        this.level = level;
        this.characterClass = characterClass; //needs implementation
    }
}
class RaceFeature extends Feature {
    constructor(name, component, race) {
        super(name, component);
        this.race = race;
    }
}
class BackgroundFeature extends Feature {
    constructor(name, component, background) {
        super(name, component);
        this.background = background;
    }
}




features = [] // list of all (character, race, background) features
function getFeature(featureName) { }; // return the feature with featureName
function getCharaterFeatures(characterClass) {
    // isinstanceof(feature, CharacterFeature) check whether feature is of class CharacterFeature
} // return all features for characterClass
function getRaceFeatures(race) {
    // Test in loop that it is a race feature.
}

//-------------------------------------------------------------Barbarian-----------------------------------------------------------------------------
let barbarianFeatures = [new CharacterClassFeature("Rage", `<h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
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
</div>`, 1, CharacterClasses.BARBARIAN),
new CharacterClassFeature("Unarmored Defense", `<h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>
<div class="collapse show" id="feature2">
    <p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
</div>`, 1, CharacterClasses.BARBARIAN)];
//-------------------------------------------------------------Bard-----------------------------------------------------------------------------
let bardFeatures = [
    new CharacterClassFeature("Bardic Inspriration", `
    <h5>Bardic Inspiration<span class="ml-2"></h5>
    <hr>
    <div>
        <p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a
            d6.
        </p>
        <p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic
            Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p>
        <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p>
        <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
        <h6><b>Magical Inspiration</b></h6>
        <p>If a creature has a Bardic Inspiration die from you and casts a spell, the creature can roll that die and add the number rolled to one damage or healing roll of the spell. The Bardic Inspiration die is then lost.</p>
    </div>`, 1, CharacterClasses.BARD),
    new CharacterClassFeature("Spellcasting (Bard)", `
    <h5>Spellcasting<span class="ml-2"></h5>
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

    </div>`, 1, CharacterClasses.BARD)];
//-------------------------------------------------------------Cleric-----------------------------------------------------------------------------
class ClericFeature extends CharacterClassFeature {
    constructor(name, component, level, characterClass, subClass) {
        super(name, component, level, characterClass);
        this.subClass = subClass;
        this.extraCantrip;
        this.extraLanguages;
        this.maxSkillsProficiencies;
    }
}
let clericFeatures = [
    new CharacterClassFeature("Spellcasting (Cleric)", `<h5>Spellcasting<span class="ml-2"></h5>
    <hr>
    <div>
        <p>As a conduit for divine power, you can cast cleric spells.</p>
        <h6><b>Cantrips</b></h6>
        <p>At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.</p>

        <h6><b>Preparing and Casting Spells</b></h6>
        <p>The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
            a long rest.</p>
        <p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The
            spells must be of a level for which you have spell slots.</p>
        <p>For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level
            spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
        <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom
            modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.</p>
        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>

        <h6><b>Cantrip Versatility</b></h6>
        <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the cleric spell list.</p>
    </div>`, 1, CharacterClasses.CLERIC),
    new ClericFeature("Divine Domain: Knowledge", `<h4 class="text-center">Knowledge Domain<span class="ml-2"></h4>
    <div>
        <p>The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding
            above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or
            promote the practical knowledge of
            craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise
            their followers that they will gain tremendous power if they unlock the secrets of the multiverse.
            Followers of these gods study esoteric
            lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of
            knowledge promote the practical knowledge of craft and invention, including smith deities like Gond,
            Reorx, Onatar, Moradin, Hephaestus,
            and Goibhniu.</p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10">command, identify</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">augury, suggestion</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">nondetection, speak with dead</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">arcane eye, confusion</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">legend lore, scrying</td>
                </tr>
            </tbody>
        </table>
    </div>`, 1, CharacterClasses.CLERIC, "Knowledge Domain"),
    new ClericFeature("Blessings of Knowledge", `<h5>Blessings of Knowledge<span class="ml-2"></h5>
    <hr>
    <div class="collapse show" id="featureBlessing">
        <p>At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of
            the following skills: Arcana, History, Nature, or Religion.</p>
        <p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p>
    </div>`, 1, CharacterClasses.CLERIC, "Knowledge Domain"),
    new ClericFeature("Divine Domain: Life", `<h4 class="text-center">Life Domain</h4>
    <div>
        <p>The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that
            sustains all life. The gods of life promote vitality and health through healing the sick and wounded,
            caring for those in need, and driving
            away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain,
            particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander,
            Pelor, and Re-Horakhty), gods
            of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and
            community (such as Hestia, Hathor, and Boldrei).</p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10"> bless, cure wounds</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">lesser restoration, spiritual weapon</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">beacon of hope, revivify</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">death ward, guardian of faith</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">mass cure wounds, raise dead</td>
                </tr>
            </tbody>
        </table>
    </div>`, 1, CharacterClasses.CLERIC, "Life Domain"),
    new ClericFeature("Disciple of Life", `<h5>Disciple of Life</h5>
    <hr>
    <div>
        <p>Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level
            or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 +
            the spell's level.</p>
    </div>`, 1, CharacterClasses.CLERIC, "Life Domain"),
    new ClericFeature("Divine Domain: Light", `   <h4 class="text-center">Light Domain</h4>
    <div>
        <p>Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and
            Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the
            symbol of the sun. Some of these gods
            are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are
            tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of
            beauty and artistry, who teach that
            art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused
            with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning
            away darkness.</p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10">burning hands, faerie fire</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">flaming sphere, scorching ray</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">daylight, fireball</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">guardian of faith, wall of fire</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">flame strike, scrying</td>
                </tr>
            </tbody>
        </table>

        <h5>Bonus Cantrip</h5>
        <hr>
        <div>
            <p>When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.
            </p>
        </div>
    </div>`, 1, CharacterClasses.CLERIC, "Light Domain"),
    new ClericFeature("Warding Flare", `<h5>Warding Flare</h5>
    <hr>
    <div class="collapse show" id="featureFlare">
        <p>Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are
            attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose
            disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An
            attacker that can't be blinded
            is immune to this feature.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain
            all expended uses when you finish a long rest.</p>
    </div>`, 1, CharacterClasses.CLERIC, "Light Domain"),
    new ClericFeature("Divine Domain: Nature", `<h4 class="text-center">Nature Domain</h4>
    <div>
        <p>Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such
            as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs
            and groves (such as Eldath).
            Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and
            reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as
            well, champions who take a more
            active role in advancing the interests of a particular nature god. These clerics might hunt the evil
            monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of
            those who anger their gods.</p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10">animal friendship, speak with animals</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">barkskin, spike growth</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">plant growth, wind wall</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">dominate beast, grasping vine</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">insect plague, tree stride</td>
                </tr>
            </tbody>
        </table>

        <h5>Bonus Proficiency</h5>
        <hr>

        <div>
            <p>Also at 1st level, you gain proficiency with heavy armor.</p>
        </div>
    </div>`, 1, CharacterClasses.CLERIC, "Nature Domain"),
    new ClericFeature("Acolyte of Nature", `<h5>Acolyte of Nature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#featureFlare" aria-expanded="true" aria-controls="featureFlare">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureFlare">
<p>At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.</p>
</div>`, 1, CharacterClasses.CLERIC, "Nature Domain"),
    new ClericFeature("Divine Domain: Tempest", `<h4 class="text-center">Tempest Domain</h4>
    <div>
        <p>Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer,
            Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of
            earthquakes, some fire gods, and certain
            gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over
            other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring
            people, gods of this domain are
            ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common
            folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of
            propitiation to ward off divine
            wrath.
        </p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10"> fog cloud, thunderwave</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">gust of wind, shatter
                </tr>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">call lightning, sleet storm</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">control water, ice storm</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">destructive wave, insect plague</td>
                </tr>
            </tbody>
        </table>

        <h5>Bonus Proficiency</h5>
        <hr>
        <div>
            <p>When you choose this domain at 1st level, you gain proficiency with heavy armor and martial weapons.</p>
        </div>
    </div>`, 1, CharacterClasses.CLERIC, "Tempest Domain"),
    new ClericFeature("Wrath of the Storm", `<h5>Wrath of the Storm</h5>
    <hr>
    <div>
        <p>Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you
            can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity
            saving throw. The creature takes
            2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a
            successful one.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain
            all expended uses when you finish a long rest.</p>
    </div>`, 1, CharacterClasses.CLERIC, "Tempest Domain"),
    new ClericFeature("Divine Domain: Trickery", `<h4 class="text-center">Trickery Domain</h4>
    <div>
        <p>Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are
            mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods
            and mortals. They're patrons of thieves,
            scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world,
            puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow
            traditions. They prefer subterfuge, pranks,
            deception, and theft rather than direct confrontation.</p>
        <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Cleric Level</th>
                    <th class="col-10">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10">charm person, disguise self</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">mirror image, pass without trace
                </tr>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">blink, dispel magic</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">dimension door, polymorph</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">dominate person, modify memory</td>
                </tr>
            </tbody>
        </table>
    </div>`, 1, CharacterClasses.CLERIC, "Trickery Domain"),
    new ClericFeature("Blessing of the Trickster", `<h5>Blessing of the Trickster</h5>
    <hr>
    <div>
        <p>Starting when you choose this domain at 1st level, you can use your action to touch a willing creature
            other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour
            or until you use this feature
            again.
        </p>
    </div>`, 1, CharacterClasses.CLERIC, "Trickery Domain"),
];
//-------------------------------------------------------------Druid-----------------------------------------------------------------------------
let druidFeatures = [
    new CharacterClassFeature("Druidic", `<h5>Druidic</h5>
    <hr>
    <div>
        <p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden
            messages. You and others who know this language automatically spot such a message. Others spot the
            message's presence with a successful
            DC 15 Wisdom (Perception) check but can't decipher it without magic.</p>
    </div>`, 1, CharacterClasses.DRUID),
    new CharacterClassFeature("Spellcasting (druid)", `<h5>Spellcasting</h5>
    <hr>
    <div>
        <p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.
            See chapter 10 of the Player's Handbook for the general rules of spellcasting.</p>

        <h6><b>Cantrips</b></h6>
        <p>At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid
            cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.</p>

        <h6><b>Preparing and Casting Spells</b></h6>
        <p>The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To
            cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all
            expended spell slots when you
            finish a long rest.</p>
        <p>You prepare the list of druid spells that are available for you to cast, choosing from the druid spell
            list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level
            (minimum of one spell). The spells
            must be of a level for which you have spell slots.</p>
        <p>For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a
            Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any
            combination. If you prepare the 1st-level
            spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove
            it from your list of prepared spells.</p>
        <p>You can also change your list of prepared spells when you finish a long rest. Preparing a new list of
            druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each
            spell on your list.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and
            attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In
            addition, you use your Wisdom modifier
            when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p>
        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.
        </p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a druidic focus as a spellcasting focus for your druid spells</p>

        <h6><b>Cantrip Versatility</b></h6>
        <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting
            feature with another cantrip from the druid spell list.</p>
    </div>`, 1, CharacterClasses.DRUID),
];
//-------------------------------------------------------------Fighter-----------------------------------------------------------------------------
let fighterFeatures = [
    new CharacterClassFeature("Fighting Style", `<div><h5>Fighting Style</h5>
    <hr>
    <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You
        can't take the same Fighting Style option more than once, even if you get to choose again.</p>
</div>
<div><h6>Archery</h6>
    <hr>
    <p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>
</div>
<div><h6>BlindFighting</h6>
    <hr>
    <p>Being unable to see a creature doesn't impose disadvantage on your attack rolls against it,
        provided the creature isn't hidden from you.</p>
</div>
<div>
    <h6>Blind Fighting</h6>
    <hr>
    <p>You have blindsight with a range of 10 feet. Within that range, you can effectively see anything
        that
        isn't behind total cover,
        even if you're blinded or in darkness. Moreover, you can see an invisible creature within that
        range, unless the creature successfully hides from you.</p>
</div>
<div><h6>Close Quarters Shooter</h6>
    <hr>
    <p>When making a ranged attack while you are within 5 feet of a hostile creature, you do not have
        disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover
        against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.
    </p>
</div>
<div> <h6>Defense</h6>
    <hr>
    <p>While you are wearing armor, you gain a +1 bonus to AC.</p>
</div>
<div> <h6>Dueling</h6>
    <hr>
    <p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to
        damage rolls with that weapon.</p>
</div>
<div><h6>Great Weapon Fighting</h6>
    <hr>
    <p>When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are
        wielding with two hands, you can reroll the die and must use the new roll, even if the new roll
        is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this
        benefit.</p>
</div>
<div><h6>Interception</h6>
    <hr>
    <p>When a creature you can see hits a target that is within 5 feet of you with an attack, you can
        use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a
        minimum of 0 damage). You must be wielding a shield or a simple
        or martial weapon to use this reaction.</p>
</div>
<div>
    <h6>Interception</h6>
    <hr>
    <p>When a creature you can see hits a target, other than you, within 5 feet of you with an attack,
        you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to
        a
        minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this
        reaction.
    </p>
</div>
<div><h6>Mariner</h6>
    <hr>
    <p>As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a
        climbing speed equal to your normal speed, and you gain a +1 bonus to AC.</p>
</div>
<div><h6>Protection</h6>
    <hr>
    <p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can
        use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>
</div>
<div>
    <h6>Superior Technique</h6>
    <hr>
    <p>You learn one maneuver of your choice from among those available to the Battle Master archetype. If a
        maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the
        saving
        throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).</p>
    <p>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from
        another
        source). This die is used to
        fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority
        dice when you finish a short or long rest.</p>
</div>
<div>
    <h6>Thrown Weapon Fighting</h6>
    <hr>
    <p>You can draw a weapon that has the thrown property as part of the attack you make with the
        weapon.</p>
    <p>In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the
        damage roll.</p>
</div>
<div><h6>Tunnel Fighter</h6>
    <hr>
    <p>As a bonus action, you can enter a defensive stance that lasts until the start of your next turn.
        While in your defensive stance, you can make opportunity attacks without using your reaction,
        and you can use your reaction to make a melee attack against a creature that moves more than 5
        feet while within your reach.</p>
</div>
<div> <h6>Two-Weapon Fighting</h6>
    <hr>
    <p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the
        second attack.</p>
</div>
<div>
    <h6>Unarmed Fighting</h6>
    <hr>
    <p>Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you
        aren't wielding any weapons or a shield when you make the
        attack roll, the d6 becomes a d8.
    </p>
    <p>At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.
    </p>
</div>`, 1, CharacterClasses.FIGHTER),
    new CharacterClassFeature("Second Wind", `<h5>Second Wind</h5>
    <hr>
    <div>
        <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you
            can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
        <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>
    </div>`, 1, CharacterClasses.FIGHTER),
    new CharacterClassFeature("", ``, 1, CharacterClasses.FIGHTER),
    new Feature("", ``, 1, CharacterClasses.FIGHTER),
    new Feature("", ``, 1, CharacterClasses.FIGHTER)
];
//-------------------------------------------------------------Monk-----------------------------------------------------------------------------
let monkFeatures = [
    new Feature("", ``, 1, CharacterClasses.MONK),
    new Feature("", ``, 1, CharacterClasses.MONK),
    new Feature("", ``, 1, CharacterClasses.MONK),
    new Feature("", ``, 1, CharacterClasses.MONK),
    new Feature("", ``, 1, CharacterClasses.MONK)
];

//-------------------------------------------------------------Paladin-----------------------------------------------------------------------------
let paladinFeatures = [
    new Feature("", ``, 1, CharacterClasses.PALADIN),
    new Feature("", ``, 1, CharacterClasses.PALADIN),
    new Feature("", ``, 1, CharacterClasses.PALADIN),
    new Feature("", ``, 1, CharacterClasses.PALADIN),
    new Feature("", ``, 1, CharacterClasses.PALADIN)
];
//-------------------------------------------------------------Ranger-----------------------------------------------------------------------------
let rangerFeatures = [
    new Feature("", ``, 1, CharacterClasses.RANGER),
    new Feature("", ``, 1, CharacterClasses.RANGER),
    new Feature("", ``, 1, CharacterClasses.RANGER),
    new Feature("", ``, 1, CharacterClasses.RANGER),
    new Feature("", ``, 1, CharacterClasses.RANGER)
];
//-------------------------------------------------------------Rogue-----------------------------------------------------------------------------
let rogueFeatures = [
    new Feature("", ``, 1, CharacterClasses.ROGUE),
    new Feature("", ``, 1, CharacterClasses.ROGUE),
    new Feature("", ``, 1, CharacterClasses.ROGUE),
    new Feature("", ``, 1, CharacterClasses.ROGUE),
    new Feature("", ``, 1, CharacterClasses.ROGUE)
];
//-------------------------------------------------------------Sorcerer-----------------------------------------------------------------------------
let sorcererFeatures = [
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.)
];
//-------------------------------------------------------------Warlock-----------------------------------------------------------------------------
let warlockFeatures = [
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.),
    new Feature("", ``, 1, CharacterClasses.)
];
//-------------------------------------------------------------Wizard-----------------------------------------------------------------------------
let wizardFeatures = [
    new Feature("", ``, 1, CharacterClasses.WIZARD),
    new Feature("", ``, 1, CharacterClasses.WIZARD),
    new Feature("", ``, 1, CharacterClasses.WIZARD),
    new Feature("", ``, 1, CharacterClasses.WIZARD),
    new Feature("", ``, 1, CharacterClasses.WIZARD)
];