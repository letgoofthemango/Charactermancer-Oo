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
    constructor(name, component, races) {
        super(name, component);
        this.races = races;
    }
}
class BackgroundFeature extends Feature {
    constructor(name, component, background) {
        super(name, component);
        this.background = background;
    }
}
class ClericFeature extends CharacterClassFeature {
    constructor(name, component, level, characterClass, subClass) {
        super(name, component, level, characterClass);
        this.subClass = subClass;
        this.extraCantrip;
        this.extraLanguages;
        this.maxSkillsProficiencies;
    }
}
class SorcererFeature extends CharacterClassFeature {
    constructor(name, component, level, characterClass, subClass) {
        super(name, component, level, characterClass);
        this.subClass = subClass;
        this.extraCantrip;
        this.extraLanguages;
        this.maxSkillsProficiencies;
        this.dragonAncestor; //TODO this needs to change the name in the controller.
    }
}
class WarlockFeature extends CharacterClassFeature {
    constructor(name, component, level, characterClass, subClass) {
        super(name, component, level, characterClass);
        this.subClass = subClass;
    }
}



export let features = [
    new CharacterClassFeature("Rage", `<h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
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
</div>`, 1, CharacterClasses.BARBARIAN),
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

    </div>`, 1, CharacterClasses.BARD),
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
    new CharacterClassFeature("Fighting Style", `<div><h5>Fighting Style</h5>
    <hr>
    <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You
        can't take the same Fighting Style option more than once, even if you get to choose again.</p>
</div>
<div><h6>Archery</h6>
    <hr>
    <p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>
</div>
<!-- <div>
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
</div> -->
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
<!-- 
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
-->
<div><h6>Protection</h6>
    <hr>
    <p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can
        use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>
</div>
<!-- 
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
-->
<div> <h6>Two-Weapon Fighting</h6>
    <hr>
    <p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the
        second attack.</p>
</div>
<!-- 
<div>
    <h6>Unarmed Fighting</h6>
    <hr>
    <p>Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you
        aren't wielding any weapons or a shield when you make the
        attack roll, the d6 becomes a d8.
    </p>
    <p>At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.
    </p>
</div>
-->`, 1, CharacterClasses.FIGHTER),
    new CharacterClassFeature("Second Wind", `<h5>Second Wind</h5>
    <hr>
        <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you
            can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
        <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>`, 1, CharacterClasses.FIGHTER),
    new CharacterClassFeature("Martial Versatility", `<div>
    <h6><b>Martial Versatility</b></h6>
    <p>Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style.</p>
</div>`, 1, CharacterClasses.FIGHTER),
    new CharacterClassFeature("Unarmored Defense", `<h5>Unarmored Defense</h5>
<hr>
<p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p>`, 1, CharacterClasses.MONK),
    new CharacterClassFeature("Martial Arts", `<h5>Martial Arts</h5>
<hr>
<p>Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons,
    which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.</p>
<p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing
    armor or wielding a shield.</p>
<ul>
    <li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and
        monk weapons.</li>
    <li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes
        as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>
    <li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one
        unarmed strike as a bonus action. For example, if you take the Attack action and attack with a
        quarterstaff, you can also make an
        unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li>
</ul>
<p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two
    lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade
    (called a kama).</p>`, 1, CharacterClasses.MONK),
    new CharacterClassFeature("Monk Weapons", `<h5>Monk Weapons</h5>
<hr>
<p>You can use this feature to define your monk weapons, rather than using the definition in Martial Arts.</p>
<p>You practice your martial arts with specially chosen weapons, which become monk weapons for you. You can
    choose a number of weapons to be your monk weapons equal to 5 + your Wisdom modifier (minimum of five
    weapons). The chosen weapons
    must each meet the following criteria:</p>
<ul>
    <li>The weapon must be a simple or martial weapon.</li>
    <li>You must be proficient with the weapon.</li>
    <li>The weapon must lack these properties: heavy, special, or two-handed.</li>
</ul>`, 1, CharacterClasses.MONK),
    new CharacterClassFeature("Divine Sense", `<h5>Divine Sense</h5>
<hr>
<p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like
    heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end
    of your next turn, you know
    the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You
    know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the
    vampire Count Strahd
    von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object
    that has been consecrated or desecrated, as with the hallow spell.</p>

<p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest,
    you regain all expended uses.</p>`, 1, CharacterClasses.PALADIN),
    new CharacterClassFeature("Lay on Hands", `<h5>Lay on Hands</h5>
<hr>
<p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long
    rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.</p>
<p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that
    creature, up to the maximum amount remaining in your pool.</p>
<p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or
    neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a
    single use of Lay on Hands,
    expending hit points separately for each one.</p>
<p>This feature has no effect on undead and constructs.</p>`, 1, CharacterClasses.PALADIN),
    new CharacterClassFeature("Favored Enemy", `<h5>Favored Enemy</h5>
<p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to
    a certain type of enemy commonly encountered in the wilds.</p>
<p>Choose a type of favored enemy: fey, humanoids,monstrosities, or undead. You gain a +2 bonus to damage rolls
    with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom
    (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information
    about them.</p>
<p>When you gain this feature, you also learn one language of your choice, typically one spoken by your
    favored enemy or creatures associated with it. However, you are free to pick any language you wish to
    learn.</p>`, 1, CharacterClasses.RANGER),
    new CharacterClassFeature("Natural Explorer", `<h5>Natural Explorer</h5>
<hr>
<p>You are a master of navigating the natural world, and you react with swift and decisive action when
    attacked. This grants you the following benefits:</p>
<ul>
    <li>You ignore difficult terrain.</li>
    <li>You have advantage on initiative rolls.</li>
    <li>On your first turn during combat, you have advantage on attack rolls against creatures that have
        not yet acted.</li>
</ul>
<p>In addition, you are skilled at navigating the wilderness. You gain the following benefits when
    traveling for an hour or more:</p>
<ul>
    <li>Difficult terrain doesn't slow your group's travel.</li>
    <li>Your group can't become lost except by magical means.</li>
    <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or
        tracking), you remain alert to danger.</li>
    <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
    <li>When you forage, you find twice as much food as you normally would.</li>
    <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago
        they passed through the area.</li>
</ul>
`, 1, CharacterClasses.RANGER),
    new CharacterClassFeature("Expertise", `<h5>Expertise</h5>
<hr>
<p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your
    proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make
    that uses either of the chosen proficiencies.</p>
<p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to
    gain this benefit.</p>`, 1, CharacterClasses.ROGUE),
    new CharacterClassFeature("Sneak Attack", `<h5>Sneak Attack</h5>
<hr>
<p>Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn,
    you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the
    attack roll. The attack must use a finesse or a ranged weapon.</p>
<p>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it,
    that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.</p>
<p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak
    Attack column of the Rogue table.</p>`, 1, CharacterClasses.ROGUE),
    new CharacterClassFeature("Thieves' Cant", `<h5>Thieves' Cant</h5>
<hr>
<p>During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows
    you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant
    understands such messages. It takes four times longer to convey such a message than it does to speak the
    same idea plainly.</p>
<p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as
    whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the
    people in an area are easy marks or will provide a safe house for thieves on the run.</p>`, 1, CharacterClasses.ROGUE),
    new CharacterClassFeature("Spellcasting (Sorcerer)", `<h5>Spellcasting</h5>
    <hr>
    <p>An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing
        you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p>
    <h6><b>Cantrips</b></h6>
    <p>At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional
        sorcerer cantrip of your choice at 4th level and another at 10th level.</p>
    <h6><b>Spell Slots</b></h6>
    <p>The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and
        higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You
        regain all expended spell slots
        when you finish a long rest.</p>
    <p>For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell
        slot available, you can cast burning hands using either slot.</p>
    <h6><b>Spells Known of 1st Level and Higher</b></h6>
    <p>You know two 1st-level spells of your choice from the sorcerer spell list.</p>
    <p>You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th,
        and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you
        reach 3rd level in this class,
        you can learn one new spell of 1st or 2nd level.</p>
    <p>Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and
        replace it with another spell from the sorcerer spell list, which also must be of a level for which you
        have spell slots.</p>
    <h6><b>Spellcasting Ability</b></h6>
    <p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on
        your ability to project your will into the world. You use your Charisma whenever a spell refers to your
        spellcasting ability. In addition,
        you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when
        making an attack roll with one.</p>
    <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
    <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>
    <h6><b>Spellcasting Focus</b></h6>
    <p>You can use an arcane focus as a spellcasting focus for your sorcerer spells.</p>
    <h6><b>Spell Versatility</b></h6>
    <p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature
        with another spell from the sorcerer spell list. The new spell must be the same level as the spell you
        replace.</p>`, 1, CharacterClasses.SORCERER),
    new SorcererFeature("Draconic Bloodline", `<h4 class="text-center">Draconic Bloodline</h4>
    <p>Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.
        Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times
        who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these
        bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the
        first of a new bloodline, as a result of a pact or some other exceptional circumstance.</p>
    <h5>Dragon Ancestor</h5>
    <hr>
        <p>At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each
            dragon is used by features you gain later.</p>
        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-6 text-center" data-rd-isroller="false">Dragon</th>
                    <th class="col-6 text-center" data-rd-isroller="false">Damage Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-6 text-center">Black</td>
                    <td class="col-6 text-center">Acid</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Blue</td>
                    <td class="col-6 text-center">Lightning</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Brass</td>
                    <td class="col-6 text-center">Fire</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Bronze</td>
                    <td class="col-6 text-center">Lightning</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Copper</td>
                    <td class="col-6 text-center">Acid</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Gold</td>
                    <td class="col-6 text-center">Fire</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Green</td>
                    <td class="col-6 text-center">Poison</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Red</td>
                    <td class="col-6 text-center">Fire</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">Silver</td>
                    <td class="col-6 text-center">Cold</td>
                </tr>
                <tr>
                    <td class="col-6 text-center">White</td>
                    <td class="col-6 text-center">Cold</td>
                </tr>
            </tbody>
        </table>
        <p>You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when
            interacting with dragons, your proficiency bonus is doubled if it applies to the check.</p>
`, 1, CharacterClasses.SORCERER, "Draconic Bloodline"),
    new SorcererFeature("Draconic Resilience", `<h5>Draconic Resilience</h5>
    <hr>
    <p>As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.</p>
    <p>Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.</p>
`, 1, CharacterClasses.SORCERER, "Draconic Bloodline"),
    new SorcererFeature("Wild Magic", `<h4 class="text-center">Wild Magic</h4>
    <p>Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have
        endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the
        Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or
        marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason.
        However it came to be, this chaotic magic churns within you, waiting for any outlet.</p>
`, 1, CharacterClasses.SORCERER, "Wild Magic"),
    new SorcererFeature("Wild Magic Surge", `<h5>Wild Magic Surge</h5>
    <hr>
    <p>Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed
        magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll
        a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild
        Magic Surge can happen once per turn.</p>
    <p>If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires
        concentration, it doesn't require concentration in this case; the spell lasts for its full duration.
    </p>
    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-1 text-center"><span>d100</span>
                </th>
                <th class="col-11">Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-1 text-center">01-02</td>
                <td class="col-11">Roll on this table at the start of each of your turns for the next
                    minute, ignoring this result on subsequent rolls.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">03-04</td>
                <td class="col-11">For the next minute, you can see any invisible creature if you have line of
                    sight to it.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">05-06</td>
                <td class="col-11">A modron chosen and controlled by the DM appears in an unoccupied space
                    within 5 feet of you, then disappears 1 minute later.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">07-08</td>
                <td class="col-11">You cast fireball as a 3rd-level spell centered on yourself.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">09-10</td>
                <td class="col-11">You cast magic missile as a 5th-level spell.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">11-12</td>
                <td class="col-11">Roll a d10. Your height changes by a number of inches equal to the roll. If
                    the roll is odd, you shrink. If the roll is even, you grow.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">13-14</td>
                <td class="col-11">You cast confusion centered on yourself.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">15-16</td>
                <td class="col-11">For the next minute, you regain 5 hit points at the start of each of your
                    turns.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">17-18</td>
                <td class="col-11">You grow a long beard made of feathers that remains until you sneeze, at
                    which point the feathers explode out from your face.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">19-20</td>
                <td class="col-11">You cast grease centered on yourself.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">21-22</td>
                <td class="col-11">Creatures have disadvantage on saving throws against the next spell you
                    cast in the next minute that involves a saving throw.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">23-24</td>
                <td class="col-11">Your skin turns a vibrant shade of blue. A remove curse spell can end this
                    effect.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">25-26</td>
                <td class="col-11">An eye appears on your forehead for the next minute. During that time,
                    you have advantage on Wisdom (Perception) checks that rely on sight.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">27-28</td>
                <td class="col-11">For the next minute, all your spells with a casting time of 1 action have
                    a casting time of 1 bonus action.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">29-30</td>
                <td class="col-11">You teleport up to 60 feet to an unoccupied space of your choice that you
                    can see.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">31-32</td>
                <td class="col-11">You are transported to the Astral Plane until the end of your next turn,
                    after which time you return to the space you previously occupied or the nearest
                    unoccupied space if that space is occupied.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">33-34</td>
                <td class="col-11">Maximize the damage of the next damaging spell you cast within the next
                    minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">35-36</td>
                <td class="col-11">Roll a d10. Your age changes by a number of years equal to the roll. If the
                    roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">37-38</td>
                <td class="col-11">1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet
                    of you and are frightened of you. They vanish after 1 minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">39-40</td>
                <td class="col-11">You regain 2d10 hit points.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">41-42</td>
                <td class="col-11">You turn into a potted plant until the start of your next turn. While a
                    plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit
                    points, your pot breaks, and your form reverts.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">43-44</td>
                <td class="col-11">For the next minute, you can teleport up to 20 feet as a bonus action on
                    each of your turns.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">45-46</td>
                <td class="col-11">You cast levitate on yourself.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">47-48</td>
                <td class="col-11">A unicorn controlled by the DM appears in a space within 5 feet of you, then
                    disappears 1 minute later.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">49-50</td>
                <td class="col-11">You can't speak for the next minute. Whenever you try, pink bubbles float
                    out of your mouth.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">51-52</td>
                <td class="col-11">A spectral shield hovers near you for the next minute, granting you a +2
                    bonus to AC and immunity to magic missile.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">53-54</td>
                <td class="col-11">You are immune to being intoxicated by alcohol for the next 5d6 days.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">55-56</td>
                <td class="col-11">Your hair falls out but grows back within 24 hours.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">57-58</td>
                <td class="col-11">For the next minute, any flammable object you touch that isn't being worn
                    or carried by another creature bursts into flame.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">59-60</td>
                <td class="col-11">You regain your lowest-level expended spell slot.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">61-62</td>
                <td class="col-11">For the next minute, you must shout when you speak.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">63-64</td>
                <td class="col-11">You cast fog cloud centered on yourself.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">65-66</td>
                <td class="col-11">Up to three creatures you choose within 30 feet of you take 4d10 lightning
                    damage.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">67-68</td>
                <td class="col-11">You are frightened by the nearest creature until the end of your next turn.
                </td>
            </tr>
            <tr>
                <td class="col-1 text-center">69-70</td>
                <td class="col-11">Each creature within 30 feet of you becomes invisible for the next minute.
                    The invisibility ends on a creature when it attacks or casts a spell.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">71-72</td>
                <td class="col-11">You gain resistance to all damage for the next minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">73-74</td>
                <td class="col-11">A random creature within 60 feet of you becomes poisoned for 1d4 hours.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">75-76</td>
                <td class="col-11">You glow with bright light in a 30-foot radius for the next minute. Any
                    creature that ends its turn within 5 feet of you is blinded until the end of its next turn.
                </td>
            </tr>
            <tr>
                <td class="col-1 text-center">77-78</td>
                <td class="col-11">You cast polymorph on yourself. If you fail the saving throw, you turn into a
                    sheep for the spell's duration.
                </td>
            </tr>
            <tr>
                <td class="col-1 text-center">79-80</td>
                <td class="col-11">Illusory butterflies and flower petals flutter in the air within 10 feet
                    of you for the next minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">81-82</td>
                <td class="col-11">You can take one additional action immediately.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">83-84</td>
                <td class="col-11">Each creature within 30 feet of you takes 1d10 necrotic damage. You regain
                    hit points equal to the sum of the necrotic damage dealt.
                </td>
            </tr>
            <tr>
                <td class="col-1 text-center">85-86</td>
                <td class="col-11">You cast mirror image.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">87-88</td>
                <td class="col-11">You cast fly on a random creature within 60 feet of you.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">89-90</td>
                <td class="col-11">You become invisible for the next minute. During that time, other creatures
                    can't hear you. The invisibility ends if you attack or cast a spell.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">91-92</td>
                <td class="col-11">If you die within the next minute, you immediately come back to life as
                    if by the reincarnate spell.
                </td>
            </tr>
            <tr>
                <td class="col-1 text-center">93-94</td>
                <td class="col-11">Your size increases by one size category for the next minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">95-96</td>
                <td class="col-11">You and all creatures within 30 feet of you gain vulnerability to
                    piercing damage for the next minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">97-98</td>
                <td class="col-11">You are surrounded by faint, ethereal music for the next minute.</td>
            </tr>
            <tr>
                <td class="col-1 text-center">99-00</td>
                <td class="col-11">You regain all expended sorcery points.</td>
            </tr>
        </tbody>
    </table>`, 1, CharacterClasses.SORCERER, "Wild Magic"),
    new SorcererFeature("Tides of Chaos", `<h5>Tides of Chaos</h5>
    <hr>
    <p>Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.</p>
    <p>Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.</p>
`, 1, CharacterClasses.SORCERER),
    new CharacterClassFeature("Pact Magic", `<h5>Pact Magic</h5>
<hr>
<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting.</p>
<h6><b>Cantrips</b></h6>
<p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>
<h6><b>Spell Slots</b></h6>
<p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock
spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
<p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
<h6><b>Spells Known of 1st Level and Higher</b></h6>
<p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
<p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level.
When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p>
<p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>
<h6><b>Spellcasting Ability</b></h6>
<p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell
you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>
<h6><b>Spellcasting Focus</b></h6>
<p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>
<h6><b>Spell Versatility</b></h6>
<p>Whenever you finish a long rest, you can replace one spell you learned from this Pact Magic feature with another spell from the warlock spell list. The new spell must be the same level as the spell you replace.</p>
`, 1, CharacterClasses.WARLOCK),
    new WarlockFeature("Otherworldly Patron: Archfey", `<h4 class="text-center">The Archfey</h4>
<p>Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten
    before the mortal races were born. This being's motivations are often inscrutable, and sometimes
    whimsical, and might involve a striving for greater magical power or the settling of age-old grudges.
    Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming
    Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and
    ancient hags.</p>
<h5>Expanded Spell List</h5>
<hr>
<p>The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The
    following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
    <thead>
        <tr>
            <th class="col-2 text-center">Spell Level</th>
            <th class="col-10">Spells</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="col-2 text-center">1st</td>
            <td class="col-10">Faerie fire, Sleep</td>
        </tr>
        <tr>
            <td class="col-2 text-center">2nd</td>
            <td class="col-10">Calm emotions, Phantasmal force</td>
        </tr>
        <tr>
            <td class="col-2 text-center">3rd</td>
            <td class="col-10">blink, Plant growth</td>
        </tr>
        <tr>
            <td class="col-2 text-center">4th</td>
            <td class="col-10">Dominate beast, Greater invisibility</a>
            </td>
        </tr>
        <tr>
            <td class="col-2 text-center">5th</td>
            <td class="col-10">Dominate person, Seeming</td>
        </tr>
    </tbody>
</table>`, 1, CharacterClasses.WARLOCK, ""),
    new WarlockFeature("Fey Presence", `<h5>Fey Presence</h5>
<hr>
<p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
`, 1, CharacterClasses.WARLOCK, "Archfey"),
    new WarlockFeature("Otherworldly Patron: Fiend", `<h4 class="text-center">The Fiend</h4>
<p>You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even
    if you strive against those aims. Such beings desire the corruption or destruction of all things,
    ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon,
    Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial;
    pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.</p>
<h5>Expanded Spell List</h5>
<hr>
<p>The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The
    following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
    <thead>
        <tr>
            <th class="col-2 text-center">Spell Level</th>
            <th class="col-10">Spells</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="col-2 text-center">1st</td>
            <td class="col-10">Burning hands, Command</td>
        </tr>
        <tr>
            <td class="col-2 text-center">2nd</td>
            <td class="col-10">Blindness/deafness, Scorching ray</td>
        </tr>
        <tr>
            <td class="col-2 text-center">3rd</td>
            <td class="col-10">Fireball, Stinking cloud</td>
        </tr>
        <tr>
            <td class="col-2 text-center">4th</td>
            <td class="col-10">Fire shield, Wall of fire</a>
            </td>
        </tr>
        <tr>
            <td class="col-2 text-center">5th</td>
            <td class="col-10">Flame strike, Hallow</td>
        </tr>
    </tbody>
</table>`, 1, CharacterClasses.WARLOCK, "Fiend"),
    new WarlockFeature("Dark One's Blessing", `<h5>Dark One's Blessing</h5>
<hr>
<p>Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit
    points equal to your Charisma modifier + your warlock level (minimum of 1).</p>
`, 1, CharacterClasses.WARLOCK, "Fiend"),
    new WarlockFeature("Otherworldly Patron: Great Old One", `<h4 class="text-center">The Great Old One</h4>
<p>Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might
    come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in
    legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even
    the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be
    unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to
    draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun,
    the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable
    beings.</p>
<h5>Expanded Spell List</h5>
<hr>
<p>The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The
    following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
    <thead>
        <tr>
            <th class="col-2 text-center">Spell Level</th>
            <th class="col-10">Spells</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="col-2 text-center">1st</td>
            <td class="col-10">Dissonant whispers, Tasha's hideous laughter</td>
        </tr>
        <tr>
            <td class="col-2 text-center">2nd</td>
            <td class="col-10">Detect thoughts, Phantasmal force</td>
        </tr>
        <tr>
            <td class="col-2 text-center">3rd</td>
            <td class="col-10">Clairvoyance, Sending</td>
        </tr>
        <tr>
            <td class="col-2 text-center">4th</td>
            <td class="col-10">Dominate beast, Evard's black tentacles</a>
            </td>
        </tr>
        <tr>
            <td class="col-2 text-center">5th</td>
            <td class="col-10">Dominate person, Telekinesis</td>
        </tr>
    </tbody>
</table>`, 1, CharacterClasses.WARLOCK, "Great Old One"),
    new WarlockFeature("Awakened Mind", `<h5>Awakened Mind</h5>
<hr>
<p>Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other
creatures. You can communicate telepathically with any creature you can see within 30 feet of you.
You don't need to share a language with the creature for it to understand your telepathic
utterances, but the creature must be able to understand at least one language.</p>`, 1, CharacterClasses.WARLOCK, "Great Old One"),
    new CharacterClassFeature("Spellcasting (Wizard)", `<h5>Spellcasting</h5>
<hr>
<p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>
<h6><b>Cantrips</b></h6>
<p>At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.</p>
<h6><b>Spellbook</b></h6>
<p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p>
<p>The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during
your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.</p>
<p><i>Copying a Spell into the Book.</i> <br>When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it. Copying a
spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required,
then transcribe it into your spellbook using your own notation.</p>
<p>For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent
this time and money, you can prepare the spell just like your other spells.</p>
<p>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the
check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.</p>
<p><i>Replacing the Book.</i> <br>You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier,
since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells
that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.</p>
<p><i>The Book's Appearance.</i> <br>Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely
bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.</p>
<h6><b>Preparing and Casting Spells</b></h6>
<p>The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a
long rest.</p>
<p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be
of a level for which you have spell slots.</p>
<p>For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your
spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
<p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at
least 1 minute per spell level for each spell on your list.</p>
<h6><b>Spellcasting Ability</b></h6>
<p>Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition,
you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Intelligence modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Intelligence modifier</p>
<h6><b>Spellcasting Focus</b></h6>
<p>You can use an arcane focus as a spellcasting focus for your wizard spells.</p>
<h6><b>Ritual Casting</b></h6>
<p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p>
<h6><b>Learning Spells of 1st Level and Higher</b></h6>
<p>Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find
other spells that you can add to your spellbook (see "Spellbook").</p>
<h6><b>Cantrip Versatility</b></h6>
<p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the wizard spell list.</p>
`, 1, CharacterClasses.WIZARD),
    new CharacterClassFeature("Arcane Recovery", `<h5>Arcane Recovery</h5>
<hr>
<p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or
less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p>
<p>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.</p>
<p>You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>
`, 1, CharacterClasses.WIZARD),
    new BackgroundFeature("Shelter of the Faithful", `<h5>Shelter of the Faithful</h5>
<p>As an acolyte, you command the respect of those who share your faith, and you can perform the religious
    ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at
    a temple, shrine, or other established presence of your faith, though you must provide any material
    components needed for spells. Those who share your religion will support you (but only you) at a modest
    lifestyle.</p>
<p>You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a
    residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a
    temple where you have found a new home. While near your temple, you can call upon the priests for
    assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your
    temple.</p>`, BackgroundNames.ACOYLTE),
    new BackgroundFeature("False Identity", `<h5>False Identity</h5>
<p>You have created a second identity that includes documentation, established acquaintances, and
    disguises that allow you to assume that persona. Additionally, you can forge documents including official
    papers and personal letters, as long as you have seen an example of the kind of document or the handwriting
    you are trying to copy.</p>`, BackgroundNames.CHARLATAN),
    new BackgroundFeature("Criminal Contact", `<h5>Criminal Contact</h5>
<p>You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You
    know how to get messages to and from your contact, even over great distances; specifically, you know the
    local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>`, BackgroundNames.CRIMINAL),
    new BackgroundFeature("Spy Contact", `<h5>Spy Contact</h5>
<p>You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know
    how to get messages to and from your contact, even over great distances; specifically, you know the local
    messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>`, BackgroundNames.SPY),
    new BackgroundFeature("By Popular Demand", `<h5>By Popular Demand</h5>
<p>You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater,
    or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable
    standard (depending on the quality of the establishment), as long as you perform each night. In addition,
    your performance makes you something of a local figure. When strangers recognize you in a town where you
    have performed, they typically take a liking to you.</p>`, BackgroundNames.ENTERTAINER),
    new BackgroundFeature("By Popular Demand (Gladiator)", `<h5>By Popular Demand</h5>
<p>You can always find a place to perform in any place that features combat for entertainment—perhaps a
    gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a
    modest or comfortable standard (depending on the quality of the establishment), as long as you perform each
    night. In addition, your performance makes you something of a local figure. When strangers recognize you in
    a town where you have performed, they typically take a liking to you.</p>`, BackgroundNames.GLADIATOR),
    new BackgroundFeature("Rustic Hospitality", `<h5>Rustic Hospitality</h5>
<p>Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to
    hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They
    will shield you from the law or anyone else searching for you, though they will not risk their lives for
    you.</p>`, BackgroundNames.FOLKHERO),
    new BackgroundFeature("Guild Membership", `<h5>Guild Membership</h5>
<p>As an established and respected member of a guild, you can rely on certain benefits that membership provides.
    Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if
    needed. In some cities and towns, a guildhall offers a central place to meet other members of your
    profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
<p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if
    a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful
    political figures through the guild, if you are a member in good standing. Such connections might require
    the donation of money or magic items to the guild's coffers.</p>
<p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain
    in the guild's good graces.</p>`, BackgroundNames.GUILDARTISAN),
    new BackgroundFeature("Guild Membership (Guild Merchant)", `<h5>Guild Membership</h5>
<p>As an established and respected member of a guild, you can rely on certain benefits that membership provides.
    Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if
    needed. In some cities and towns, a guildhall offers a central place to meet other members of your
    profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
<p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if
    a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful
    political figures through the guild, if you are a member in good standing. Such connections might require
    the donation of money or magic items to the guild's coffers.</p>
<p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain
    in the guild's good graces.</p>`, BackgroundNames.GUILDMERCHANT),
    new BackgroundFeature("Discovery", `<h5>Discovery</h5>
<p>The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact
    nature of this revelation depends on the nature of your seclusion. It might be a great truth about the
    cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site
    that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed
    some relic of the past that could rewrite history. It might be information that would be damaging to the
    people who or consigned you to exile, and hence the reason for your return to society.</p>
<p>Work with your DM to determine the details of your discovery and its impact on the campaign.</p>`, BackgroundNames.HERMIT),
    new BackgroundFeature("Position of Privilege", `<h5>Position of Privilege</h5>
<p>Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society,
    and people assume you have the right to be wherever you are. The common folk make every effort to
    accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same
    social sphere. You can secure an audience with a local noble if you need to.</p>`, BackgroundNames.NOBLE),
    new BackgroundFeature("Retainers", `<h5>Retainers</h5>
<p>You have the service of three retainers loyal to your family. These retainers can be attendants or
    messengers, and one might be a majordomo. One of your retainers is a noble who serves as your squire, aiding
    you in exchange for training on his or her own path to knighthood (This person could be your bond.). Your
    two remaining retainers might include a groom to care for your horse and a servant who polishes your armor
    (and even helps you put it on).</p>
<p>Your retainers can perform mundane tasks for you, but they do not fight for you, will not follow you into
    obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.</p>`, BackgroundNames.KNIGHT),
    new BackgroundFeature("Wanderer", `<h5>Wanderer</h5>
<p>You have an excellent memory for maps and geography, and you can always recall the general layout of terrain,
    settlements, and other features around you. In addition, you can find food and fresh water for yourself and
    up to five other people each day, provided that the land offers berries, small game, water, and so forth.</p>`, BackgroundNames.OUTLANDER),
    new BackgroundFeature("Researcher", `<h5>Researcher</h5>
<p>When you attempt to learn or recall a piece of lore, if you do not know that information, you often know
    where and from whom you can obtain it. Usually, this information comes from a library, scriptorium,
    university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is
    secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest
    secrets of the multiverse can require an adventure or even a whole campaign.</p>`, BackgroundNames.SAGE),
    new BackgroundFeature("Ship's Passage", `<h5>Ship's Passage</h5>
<p>When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions.
    You might sail on the ship you served on, or another ship you have good relations with (perhaps one
    captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or
    route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you
    need to go. In return for your free passage, you and your companions are expected to assist the crew during
    the voyage.</p>`, BackgroundNames.SAILOR),
    new BackgroundFeature("Bad Reputation", `<h5>Bad Reputation</h5>
<p>No matter where you go, people are afraid of you due to your reputation. When you are in a civilized
    settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or
    breaking down doors at a local shop, since most people will not report your activity to the authorities.</p>`, BackgroundNames.PIRATE),
    new BackgroundFeature("Military Rank", `<h5>Military Rank</h5>
<p>You have a military rank from your career as a soldier. Soldiers loyal to your former military organization
    still recognize your authority and influence, and they defer to you if they are of a lower rank. You can
    invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for
    temporary use. You can also usually gain access to friendly military encampments and fortresses where your
    rank is recognized.</p>`, BackgroundNames.SOLDIER),
    new BackgroundFeature("City Secrets", `<h5>City Secrets</h5>
<p>You know the secret patterns and flow to cities and can find passages through the urban sprawl that others
    would miss. When you are not in combat, you (and companions you lead) can travel between any two locations
    in the city twice as fast as your speed would normally allow.</p>`, BackgroundNames.URCHIN),
    new RaceFeature("Darkvision", `<h5>Darkvision</h5>
    <p>Accustomed to life dark or twilight places, you have superior vision in dark and dim conditions. You can see in dim light
        within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern
        color in darkness, only shades of gray.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF, CharacterRaces.ROCKGNOME, CharacterRaces.FORESTGNOME, CharacterRaces.HIGHELF, CharacterRaces.WOODELF, CharacterRaces.HALFELF, CharacterRaces.TIEFLING, CharacterRaces.HALFORC]),
    new RaceFeature("Draconic Ancestry", `<h5>Draconic Ancestry</h5>
        <p>You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath
            weapon and damage resistance are determined by the dragon type, as shown in the table.</p>
        <table class="rd__table  stripe-odd-table">
            <caption>Draconic Ancestry</caption>
            <thead>
                <tr>
                    <th class="col-3 text-center">Dragon</th>
                    <th class="col-3 text-center">Damage Type</th>
                    <th class="col-6">Breath Weapon</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-3 text-center">Black</td>
                    <td class="col-3 text-center">Acid</td>
                    <td class="col-6">5 by 30 ft. line (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Blue</td>
                    <td class="col-3 text-center">Lightning</td>
                    <td class="col-6">5 by 30 ft. line (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Brass</td>
                    <td class="col-3 text-center">Fire</td>
                    <td class="col-6">5 by 30 ft. line (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Bronze</td>
                    <td class="col-3 text-center">Lightning</td>
                    <td class="col-6">5 by 30 ft. line (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Copper</td>
                    <td class="col-3 text-center">Acid</td>
                    <td class="col-6">5 by 30 ft. line (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Gold</td>
                    <td class="col-3 text-center">Fire</td>
                    <td class="col-6">15 ft. cone (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Green</td>
                    <td class="col-3 text-center">Poison</td>
                    <td class="col-6">15 ft. cone (Con. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Red</td>
                    <td class="col-3 text-center">Fire</td>
                    <td class="col-6">15 ft. cone (Dex. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">Silver</td>
                    <td class="col-3 text-center">Cold</td>
                    <td class="col-6">15 ft. cone (Con. save)</td>
                </tr>
                <tr>
                    <td class="col-3 text-center">White</td>
                    <td class="col-3 text-center">Cold</td>
                    <td class="col-6">15 ft. cone (Con. save)</td>
                </tr>
            </tbody>
        </table>`, CharacterRaces.DRAGONBORN),
    new RaceFeature("Breath Weapon", `<h5>Breath Weapon</h5>
            <p>You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape,
                and damage type of the exhalation.</p>
            <p>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw,
                the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your
                Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as
                much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at
                16th level.</p>
            <p>After you use your breath weapon, you can't use it again until you complete a short or long rest.</p>`, CharacterRaces.DRAGONBORN),
    new RaceFeature("Damage Resistance", `<h5>Damage Resistance</h5>
        <p>You have resistance to the damage type associated with your draconic ancestry.</p>`, CharacterRaces.DRAGONBORN),
    new RaceFeature("Dwarven Resilience", `<h5>Dwarven Resilience</h5>
        <p>You have advantage on saving throws against poison, and you have resistance against poison damage.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
    new RaceFeature("Dwarven Combat Training", `<h5>Dwarven Combat Training</h5>
        <p>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
    new RaceFeature("Stonecunning", `<h5>Stonecunning</h5>
        <p>Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
    new RaceFeature("Dwarven Toughness", `<h5>Dwarven Toughness</h5>
        <p>Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>`, CharacterRaces.HILLDWARF),
    new RaceFeature("Dwarven Armor Training", `<h5>Dwarven Armor Training</h5>
        <p>You have proficiency with light and medium armor.</p>`, CharacterRaces.MOUNTAINDWARF),
    new RaceFeature("Superior Darkvision", `<h5>Superior Darkvision</h5>
        <p>Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see
            in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You
            can't discern color in darkness, only shades of gray.</p>`, CharacterRaces.DROW),
    new RaceFeature("Keen Senses", `<h5>Keen Senses</h5>
            <p>You have proficiency in the Perception skill.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
    new RaceFeature("Fey Ancestry", `<h5>Fey Ancestry</h5>
            <p>You have advantage on saving throws against being charmed, and magic can't put you to sleep.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF, CharacterRaces.HALFELF]),
    new RaceFeature("Trance", `<h5>Trance</h5>
        <p>Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The
            Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams
            are actually mental exercises that have become reflexive through years of practice. After resting in this
            way, you gain the same benefit that a human does from 8 hours of sleep.</p>
        <p>If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules
            for a long rest; only the duration is changed.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
    new RaceFeature("Sunlight Sensitivity", `<h5>Sunlight Sensitivity</h5>
        <p>You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the
            target of your attack, or whatever you are trying to perceive is in direct sunlight.</p>`, CharacterRaces.DROW),
    new RaceFeature("Drow Magic", `<h5>Drow Magic</h5>
        <p>You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per
            day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th
            level, you can also cast the darkness spell once per day; you must finish a long rest in order to cast the
            spell again using this trait. Charisma is your spellcasting ability for these spells.</p>`, CharacterRaces.DROW),
    new RaceFeature("Drow Weapon Training", `<h5>Drow Weapon Training</h5>
        <p>You have proficiency with rapiers, shortswords, and hand crossbows.</p>`, CharacterRaces.DROW),
    new RaceFeature("Elf Weapon Training", `<h5>Elf Weapon Training</h5>
        <p>You have proficiency with the longsword, shortsword, shortbow, and longbow.</p>`, [CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
    new RaceFeature("Cantrip", `<h5>Cantrip</h5>
        <p>You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for
            it.</p>`, [CharacterRaces.HIGHELF]),
    new RaceFeature("Fleet of Foot", `<h5>Fleet of Foot</h5>
        <p>Your base walking speed increases to 35 feet.</p>`, [CharacterRaces.WOODELF]),
    new RaceFeature("Mask of the Wild", `<h5>Mask of the Wild</h5>
        <p>You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist,
            and other natural phenomena.</p>`, [CharacterRaces.WOODELF]),
    new RaceFeature("Gnome Cunning", `<h5>Gnome Cunning</h5>
        <p>You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</p>`, [CharacterRaces.FORESTGNOME, CharacterRaces.ROCKGNOME]),
    new RaceFeature("Natural Illusionist", `<h5>Natural Illusionist</h5>
        <p>You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.</p>`, CharacterRaces.FORESTGNOME),
    new RaceFeature("Speak with Small Beasts", `<h5>Speak with Small Beasts</h5>
        <p>Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes
            love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved
            pets</p>`, CharacterRaces.FORESTGNOME),
    new RaceFeature("Artificer's Lore", `<h5>Artificer's Lore</h5>
        <p>Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or
            technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you
            normally apply.</p>`, CharacterRaces.ROCKGNOME),
    new RaceFeature("Tinker", `<h5>Tinker</h5>
        <p>You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp
            worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24
            hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to
            dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such
            devices active at a time.</p>
        <p>When you create a device, choose one of the following options:</p>
        <ul>
            <li>
                <b>Clockwork Toy</b>
                <p>This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier.
                    When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random
                    direction. It makes noises as appropriate to the creature it represents.</p>
            </li>
            <li>
                <b>Fire Starter</b>
                <p>The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using
                    the device requires your action.</p>
            </li>
            <li> <b>Music Box</b>
                <p>When opened, this music box plays a single song at a moderate volume. The box stops playing when it
                    reaches the song's end or when it is closed.</p>
            </li>
    
        </ul>`, CharacterRaces.ROCKGNOME),
    new RaceFeature("Skill Versatility", `<h5>Skill Versatility</h5>
        <p>You gain proficiency in two skills of your choice.</p>`, CharacterRaces.HALFELF),
    new RaceFeature("Menacing", `<h5>Menacing</h5>
        <p>You gain proficiency in the Intimidation skill.</p>`, CharacterRaces.HALFORC),
    new RaceFeature("Relentless Endurance", `<h5>Relentless Endurance</h5>
        <p>When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.</p>`, CharacterRaces.HALFORC),
    new RaceFeature("Savage Attacks", `<h5>Savage Attacks</h5>
        <p>When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.</p>`, CharacterRaces.HALFORC),
    new RaceFeature("Lucky", `<h5>Lucky</h5>
        <p>When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
    new RaceFeature("Brave", `<h5>Brave</h5>
        <p>You have advantage on saving throws against being frightened.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
    new RaceFeature("Halfling Nimbleness", `<h5>Halfling Nimbleness</h5>
        <p>You can move through the space of any creature that is of a size larger than yours.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
    new RaceFeature("Naturally Stealthy", `<h5>Naturally Stealthy</h5>
        <p>You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.</p>`, CharacterRaces.LIGHTFOOTHALFLING),
    new RaceFeature("Stout Resilience", `<h5>Stout Resilience</h5>
        <p>You have advantage on saving throws against poison, and you have resistance against poison damage.</p>`, CharacterRaces.STOUTHALFLING),
    new RaceFeature("Languages (Human)", `<h5>Languages</h5>
        <p>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>`, CharacterRaces.HUMAN),
    new RaceFeature("Hellish Resistance", `<h5>Hellish Resistance</h5>
        <p>You have resistance to fire damage.</p>`, CharacterRaces.TIEFLING),
    new RaceFeature("Infernal Legacy", `<h5>Infernal Legacy</h5>
        <p>You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.</p>`, CharacterRaces.TIEFLING)
];

export function getFeature(featureName) {
    for (const feature of features) {
        if (feature.name === featureName) {
            return feature
        }
    }
};
export function getCharaterFeatures(characterClass) {
    return features.filter(element => element.characterClass === characterClass)
};
export function getRaceFeatures(race) {
    return features.filter(element => { if (Array.isArray(element.races)) { return element.races.includes(race) } else { return element.races === race } }) //  because of the else path this checks both if .races exists and/or is an array. Needed because all features are in one array.
}
export function getBackgroundFeatures(background) {
    return features.filter(element => element.background === background)
}






// let raceFeatures = [
//     new RaceFeature("Draconic Ancestry", `<h5>Draconic Ancestry</h5>
//     <p>You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath
//         weapon and damage resistance are determined by the dragon type, as shown in the table.</p>
//     <table class="rd__table  stripe-odd-table">
//         <caption>Draconic Ancestry</caption>
//         <thead>
//             <tr>
//                 <th class="col-3 text-center">Dragon</th>
//                 <th class="col-3 text-center">Damage Type</th>
//                 <th class="col-6">Breath Weapon</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="col-3 text-center">Black</td>
//                 <td class="col-3 text-center">Acid</td>
//                 <td class="col-6">5 by 30 ft. line (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Blue</td>
//                 <td class="col-3 text-center">Lightning</td>
//                 <td class="col-6">5 by 30 ft. line (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Brass</td>
//                 <td class="col-3 text-center">Fire</td>
//                 <td class="col-6">5 by 30 ft. line (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Bronze</td>
//                 <td class="col-3 text-center">Lightning</td>
//                 <td class="col-6">5 by 30 ft. line (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Copper</td>
//                 <td class="col-3 text-center">Acid</td>
//                 <td class="col-6">5 by 30 ft. line (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Gold</td>
//                 <td class="col-3 text-center">Fire</td>
//                 <td class="col-6">15 ft. cone (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Green</td>
//                 <td class="col-3 text-center">Poison</td>
//                 <td class="col-6">15 ft. cone (Con. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Red</td>
//                 <td class="col-3 text-center">Fire</td>
//                 <td class="col-6">15 ft. cone (Dex. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">Silver</td>
//                 <td class="col-3 text-center">Cold</td>
//                 <td class="col-6">15 ft. cone (Con. save)</td>
//             </tr>
//             <tr>
//                 <td class="col-3 text-center">White</td>
//                 <td class="col-3 text-center">Cold</td>
//                 <td class="col-6">15 ft. cone (Con. save)</td>
//             </tr>
//         </tbody>
//     </table>`, CharacterRaces.DRAGONBORN),
//     new RaceFeature("Breath Weapon", `<h5>Breath Weapon</h5>
//         <p>You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape,
//             and damage type of the exhalation.</p>
//         <p>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw,
//             the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your
//             Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as
//             much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at
//             16th level.</p>
//         <p>After you use your breath weapon, you can't use it again until you complete a short or long rest.</p>`, CharacterRaces.DRAGONBORN),
//     new RaceFeature("Damage Resistance", `<h5>Damage Resistance</h5>
//     <p>You have resistance to the damage type associated with your draconic ancestry.</p>`, CharacterRaces.DRAGONBORN),
//     new RaceFeature("Dwarven Resilience", `<h5>Dwarven Resilience</h5>
//     <p>You have advantage on saving throws against poison, and you have resistance against poison damage.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
//     new RaceFeature("Dwarven Combat Training", `<h5>Dwarven Combat Training</h5>
//     <p>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
//     new RaceFeature("Stonecunning", `<h5>Stonecunning</h5>
//     <p>Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>`, [CharacterRaces.HILLDWARF, CharacterRaces.MOUNTAINDWARF]),
//     new RaceFeature("Dwarven Toughness", `<h5>Dwarven Toughness</h5>
//     <p>Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</p>`, CharacterRaces.HILLDWARF),
//     new RaceFeature("Dwarven Armor Training", `<h5>Dwarven Armor Training</h5>
//     <p>You have proficiency with light and medium armor.</p>`, CharacterRaces.MOUNTAINDWARF),
//     new RaceFeature("Superior Darkvision", `<h5>Superior Darkvision</h5>
//     <p>Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see
//         in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You
//         can't discern color in darkness, only shades of gray.</p>`, CharacterRaces.DROW),
//     new RaceFeature("Keen Senses", `<h5>Keen Senses</h5>
//         <p>You have proficiency in the Perception skill.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
//     new RaceFeature("Fey Ancestry", `<h5>Fey Ancestry</h5>
//         <p>You have advantage on saving throws against being charmed, and magic can't put you to sleep.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF, CharacterRaces.HALFELF]),
//     new RaceFeature("Trance", `<h5>Trance</h5>
//     <p>Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The
//         Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams
//         are actually mental exercises that have become reflexive through years of practice. After resting in this
//         way, you gain the same benefit that a human does from 8 hours of sleep.</p>
//     <p>If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules
//         for a long rest; only the duration is changed.</p>`, [CharacterRaces.DROW, CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
//     new RaceFeature("Sunlight Sensitivity", `<h5>Sunlight Sensitivity</h5>
//     <p>You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the
//         target of your attack, or whatever you are trying to perceive is in direct sunlight.</p>`, CharacterRaces.DROW),
//     new RaceFeature("Drow Magic", `<h5>Drow Magic</h5>
//     <p>You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per
//         day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th
//         level, you can also cast the darkness spell once per day; you must finish a long rest in order to cast the
//         spell again using this trait. Charisma is your spellcasting ability for these spells.</p>`, CharacterRaces.DROW),
//     new RaceFeature("Drow Weapon Training", `<h5>Drow Weapon Training</h5>
//     <p>You have proficiency with rapiers, shortswords, and hand crossbows.</p>`, CharacterRaces.DROW),
//     new RaceFeature("Elf Weapon Training", `<h5>Elf Weapon Training</h5>
//     <p>You have proficiency with the longsword, shortsword, shortbow, and longbow.</p>`, [CharacterRaces.HIGHELF, CharacterRaces.WOODELF]),
//     new RaceFeature("Cantrip", `<h5>Cantrip</h5>
//     <p>You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for
//         it.</p>`, [CharacterRaces.HIGHELF]),
//     new RaceFeature("Fleet of Foot", `<h5>Fleet of Foot</h5>
//     <p>Your base walking speed increases to 35 feet.</p>`, [CharacterRaces.WOODELF]),
//     new RaceFeature("Mask of the Wild", `<h5>Mask of the Wild</h5>
//     <p>You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist,
//         and other natural phenomena.</p>`, [CharacterRaces.WOODELF]),
//     new RaceFeature("Gnome Cunning", `<h5>Gnome Cunning</h5>
//     <p>You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</p>`, [CharacterRaces.FORESTGNOME, CharacterRaces.ROCKGNOME]),
//     new RaceFeature("Natural Illusionist", `<h5>Natural Illusionist</h5>
//     <p>You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.</p>`, CharacterRaces.FORESTGNOME),
//     new RaceFeature("Speak with Small Beasts", `<h5>Speak with Small Beasts</h5>
//     <p>Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes
//         love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved
//         pets</p>`, CharacterRaces.FORESTGNOME),
//     new RaceFeature("Artificer's Lore", `<h5>Artificer's Lore</h5>
//     <p>Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or
//         technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you
//         normally apply.</p>`, CharacterRaces.ROCKGNOME),
//     new RaceFeature("Tinker", `<h5>Tinker</h5>
//     <p>You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp
//         worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24
//         hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to
//         dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such
//         devices active at a time.</p>
//     <p>When you create a device, choose one of the following options:</p>
//     <ul>
//         <li>
//             <b>Clockwork Toy</b>
//             <p>This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier.
//                 When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random
//                 direction. It makes noises as appropriate to the creature it represents.</p>
//         </li>
//         <li>
//             <b>Fire Starter</b>
//             <p>The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using
//                 the device requires your action.</p>
//         </li>
//         <li> <b>Music Box</b>
//             <p>When opened, this music box plays a single song at a moderate volume. The box stops playing when it
//                 reaches the song's end or when it is closed.</p>
//         </li>

//     </ul>`, CharacterRaces.ROCKGNOME),
//     new RaceFeature("Skill Versatility", `<h5>Skill Versatility</h5>
//     <p>You gain proficiency in two skills of your choice.</p>`, CharacterRaces.HALFELF),
//     new RaceFeature("Menacing", `<h5>Menacing</h5>
//     <p>You gain proficiency in the Intimidation skill.</p>`, CharacterRaces.HALFORC),
//     new RaceFeature("Relentless Endurance", `<h5>Relentless Endurance</h5>
//     <p>When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.</p>`, CharacterRaces.HALFORC),
//     new RaceFeature("Savage Attacks", `<h5>Savage Attacks</h5>
//     <p>When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.</p>`, CharacterRaces.HALFORC),
//     new RaceFeature("Lucky", `<h5>Lucky</h5>
//     <p>When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
//     new RaceFeature("Brave", `<h5>Brave</h5>
//     <p>You have advantage on saving throws against being frightened.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
//     new RaceFeature("Halfling Nimbleness", `<h5>Halfling Nimbleness</h5>
//     <p>You can move through the space of any creature that is of a size larger than yours.</p>`, [CharacterRaces.LIGHTFOOTHALFLING, CharacterRaces.STOUTHALFLING]),
//     new RaceFeature("Naturally Stealthy", `<h5>Naturally Stealthy</h5>
//     <p>You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.</p>`, CharacterRaces.LIGHTFOOTHALFLING),
//     new RaceFeature("Stout Resilience", `<h5>Stout Resilience</h5>
//     <p>You have advantage on saving throws against poison, and you have resistance against poison damage.</p>`, CharacterRaces.STOUTHALFLING),
//     new RaceFeature("Languages (Human)", `<h5>Languages</h5>
//     <p>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>`, CharacterRaces.HUMAN),
//     new RaceFeature("Hellish Resistance", `<h5>Hellish Resistance</h5>
//     <p>You have resistance to fire damage.</p>`, CharacterRaces.TIEFLING),
//     new RaceFeature("Infernal Legacy", `<h5>Infernal Legacy</h5>
//     <p>You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.</p>`, CharacterRaces.TIEFLING),
// ]
// let backgrounds = [
//     new BackgroundFeature("Shelter of the Faithful", `<h5>Shelter of the Faithful</h5>
//     <p>As an acolyte, you command the respect of those who share your faith, and you can perform the religious
//         ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at
//         a temple, shrine, or other established presence of your faith, though you must provide any material
//         components needed for spells. Those who share your religion will support you (but only you) at a modest
//         lifestyle.</p>
//     <p>You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a
//         residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a
//         temple where you have found a new home. While near your temple, you can call upon the priests for
//         assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your
//         temple.</p>`, BackgroundNames.ACOYLTE),
//     new BackgroundFeature("False Identity", `<h5>False Identity</h5>
//     <p>You have created a second identity that includes documentation, established acquaintances, and
//         disguises that allow you to assume that persona. Additionally, you can forge documents including official
//         papers and personal letters, as long as you have seen an example of the kind of document or the handwriting
//         you are trying to copy.</p>`, BackgroundNames.CHARLATAN),
//     new BackgroundFeature("Criminal Contact", `<h5>Criminal Contact</h5>
//     <p>You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You
//         know how to get messages to and from your contact, even over great distances; specifically, you know the
//         local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>`, BackgroundNames.CRIMINAL),
//     new BackgroundFeature("Spy Contact", `<h5>Spy Contact</h5>
//     <p>You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know
//         how to get messages to and from your contact, even over great distances; specifically, you know the local
//         messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>`, BackgroundNames.SPY),
//     new BackgroundFeature("By Popular Demand", `<h5>By Popular Demand</h5>
//     <p>You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater,
//         or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable
//         standard (depending on the quality of the establishment), as long as you perform each night. In addition,
//         your performance makes you something of a local figure. When strangers recognize you in a town where you
//         have performed, they typically take a liking to you.</p>`, BackgroundNames.ENTERTAINER),
//     new BackgroundFeature("By Popular Demand (Gladiator)", `<h5>By Popular Demand</h5>
//     <p>You can always find a place to perform in any place that features combat for entertainment—perhaps a
//         gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a
//         modest or comfortable standard (depending on the quality of the establishment), as long as you perform each
//         night. In addition, your performance makes you something of a local figure. When strangers recognize you in
//         a town where you have performed, they typically take a liking to you.</p>`, BackgroundNames.GLADIATOR),
//     new BackgroundFeature("Rustic Hospitality", `<h5>Rustic Hospitality</h5>
//     <p>Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to
//         hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They
//         will shield you from the law or anyone else searching for you, though they will not risk their lives for
//         you.</p>`, BackgroundNames.FOLKHERO),
//     new BackgroundFeature("Guild Membership", `<h5>Guild Membership</h5>
//     <p>As an established and respected member of a guild, you can rely on certain benefits that membership provides.
//         Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if
//         needed. In some cities and towns, a guildhall offers a central place to meet other members of your
//         profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
//     <p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if
//         a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful
//         political figures through the guild, if you are a member in good standing. Such connections might require
//         the donation of money or magic items to the guild's coffers.</p>
//     <p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain
//         in the guild's good graces.</p>`, BackgroundNames.GUILDARTISAN),
//     new BackgroundFeature("Guild Membership (Guild Merchant)", `<h5>Guild Membership</h5>
//     <p>As an established and respected member of a guild, you can rely on certain benefits that membership provides.
//         Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if
//         needed. In some cities and towns, a guildhall offers a central place to meet other members of your
//         profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
//     <p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if
//         a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful
//         political figures through the guild, if you are a member in good standing. Such connections might require
//         the donation of money or magic items to the guild's coffers.</p>
//     <p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain
//         in the guild's good graces.</p>`, BackgroundNames.GUILDMERCHANT),
//     new BackgroundFeature("Discovery", `<h5>Discovery</h5>
//     <p>The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact
//         nature of this revelation depends on the nature of your seclusion. It might be a great truth about the
//         cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site
//         that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed
//         some relic of the past that could rewrite history. It might be information that would be damaging to the
//         people who or consigned you to exile, and hence the reason for your return to society.</p>
//     <p>Work with your DM to determine the details of your discovery and its impact on the campaign.</p>`, BackgroundNames.HERMIT),
//     new BackgroundFeature("Position of Privilege", `<h5>Position of Privilege</h5>
//     <p>Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society,
//         and people assume you have the right to be wherever you are. The common folk make every effort to
//         accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same
//         social sphere. You can secure an audience with a local noble if you need to.</p>`, BackgroundNames.NOBLE),
//     new BackgroundFeature("Retainers", `<h5>Retainers</h5>
//     <p>You have the service of three retainers loyal to your family. These retainers can be attendants or
//         messengers, and one might be a majordomo. One of your retainers is a noble who serves as your squire, aiding
//         you in exchange for training on his or her own path to knighthood (This person could be your bond.). Your
//         two remaining retainers might include a groom to care for your horse and a servant who polishes your armor
//         (and even helps you put it on).</p>
//     <p>Your retainers can perform mundane tasks for you, but they do not fight for you, will not follow you into
//         obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.</p>`, BackgroundNames.KNIGHT),
//     new BackgroundFeature("Wanderer", `<h5>Wanderer</h5>
//     <p>You have an excellent memory for maps and geography, and you can always recall the general layout of terrain,
//         settlements, and other features around you. In addition, you can find food and fresh water for yourself and
//         up to five other people each day, provided that the land offers berries, small game, water, and so forth.</p>`, BackgroundNames.OUTLANDER),
//     new BackgroundFeature("Researcher", `<h5>Researcher</h5>
//     <p>When you attempt to learn or recall a piece of lore, if you do not know that information, you often know
//         where and from whom you can obtain it. Usually, this information comes from a library, scriptorium,
//         university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is
//         secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest
//         secrets of the multiverse can require an adventure or even a whole campaign.</p>`, BackgroundNames.SAGE),
//     new BackgroundFeature("Ship's Passage", `<h5>Ship's Passage</h5>
//     <p>When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions.
//         You might sail on the ship you served on, or another ship you have good relations with (perhaps one
//         captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or
//         route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you
//         need to go. In return for your free passage, you and your companions are expected to assist the crew during
//         the voyage.</p>`, BackgroundNames.SAILOR),
//     new BackgroundFeature("Bad Reputation", `<h5>Bad Reputation</h5>
//     <p>No matter where you go, people are afraid of you due to your reputation. When you are in a civilized
//         settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or
//         breaking down doors at a local shop, since most people will not report your activity to the authorities.</p>`, BackgroundNames.PIRATE),
//     new BackgroundFeature("Military Rank", `<h5>Military Rank</h5>
//     <p>You have a military rank from your career as a soldier. Soldiers loyal to your former military organization
//         still recognize your authority and influence, and they defer to you if they are of a lower rank. You can
//         invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for
//         temporary use. You can also usually gain access to friendly military encampments and fortresses where your
//         rank is recognized.</p>`, BackgroundNames.SOLDIER),
//     new BackgroundFeature("City Secrets", `<h5>City Secrets</h5>
//     <p>You know the secret patterns and flow to cities and can find passages through the urban sprawl that others
//         would miss. When you are not in combat, you (and companions you lead) can travel between any two locations
//         in the city twice as fast as your speed would normally allow.</p>`, BackgroundNames.URCHIN),
// ]
//-------------------------------------------------------------Barbarian-----------------------------------------------------------------------------
// let barbarianFeatures = [new CharacterClassFeature("Rage", `<h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
// <hr>
// <div class="collapse show" id="feature1">
//     <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>
//     <p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p>
//     <ul>
//         <li>You have advantage on Strength checks and Strength saving throws.</li>
//         <li>When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.</li>
//         <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
//     </ul>
//     <p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p>
//     <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus
//         action.
//     </p>
//     <p>Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.</p>
// </div>`, 1, CharacterClasses.BARBARIAN),
// new CharacterClassFeature("Unarmored Defense", `<h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
// <hr>
// <div class="collapse show" id="feature2">
//     <p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
// </div>`, 1, CharacterClasses.BARBARIAN)];
//-------------------------------------------------------------Bard-----------------------------------------------------------------------------
// let bardFeatures = [
//     new CharacterClassFeature("Bardic Inspriration", `
//     <h5>Bardic Inspiration<span class="ml-2"></h5>
//     <hr>
//     <div>
//         <p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a
//             d6.
//         </p>
//         <p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic
//             Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p>
//         <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p>
//         <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
//         <h6><b>Magical Inspiration</b></h6>
//         <p>If a creature has a Bardic Inspiration die from you and casts a spell, the creature can roll that die and add the number rolled to one damage or healing roll of the spell. The Bardic Inspiration die is then lost.</p>
//     </div>`, 1, CharacterClasses.BARD),
//     new CharacterClassFeature("Spellcasting (Bard)", `
//     <h5>Spellcasting<span class="ml-2"></h5>
//     <hr>

//     <div class="collapse show" id="feature3">
//         <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 of the Players Handbook for the general rules of
//             spellcasting.</p>

//         <h6><b>Cantrips</b></h6>
//         <p>You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.</p>

//         <h6><b>Spell Slots</b></h6>
//         <p>The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
//             a long rest.</p>
//         <p>For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.</p>

//         <h6><b>Spells Known of 1st Level and Higher</b></h6>
//         <p>You know four 1st-level spells of your choice from the bard spell list.</p>
//         <p>You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn
//             one new spell of 1st or 2nd level.</p>
//         <p>Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p>

//         <h6><b>Spellcasting Ability</b></h6>
//         <p>Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In
//             addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p>

//         <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
//         <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>

//         <h6><b>Ritual Casting</b></h6>
//         <p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p>

//         <h6><b>Spellcasting Focus</b></h6>
//         <p>You can use a musical instrument as a spellcasting focus for your bard spells.</p>

//         <h6><b>Spell Versatility</b></h6>
//         <p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the bard spell list. The new spell must be the same level as the spell you replace.</p>

//     </div>`, 1, CharacterClasses.BARD)];
//-------------------------------------------------------------Cleric-----------------------------------------------------------------------------

// let clericFeatures = [
//     new CharacterClassFeature("Spellcasting (Cleric)", `<h5>Spellcasting<span class="ml-2"></h5>
//     <hr>
//     <div>
//         <p>As a conduit for divine power, you can cast cleric spells.</p>
//         <h6><b>Cantrips</b></h6>
//         <p>At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.</p>

//         <h6><b>Preparing and Casting Spells</b></h6>
//         <p>The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
//             a long rest.</p>
//         <p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The
//             spells must be of a level for which you have spell slots.</p>
//         <p>For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level
//             spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
//         <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>

//         <h6><b>Spellcasting Ability</b></h6>
//         <p>Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom
//             modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.</p>
//         <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
//         <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

//         <h6><b>Ritual Casting</b></h6>
//         <p>You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>

//         <h6><b>Spellcasting Focus</b></h6>
//         <p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>

//         <h6><b>Cantrip Versatility</b></h6>
//         <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the cleric spell list.</p>
//     </div>`, 1, CharacterClasses.CLERIC),
//     new ClericFeature("Divine Domain: Knowledge", `<h4 class="text-center">Knowledge Domain<span class="ml-2"></h4>
//     <div>
//         <p>The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding
//             above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or
//             promote the practical knowledge of
//             craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise
//             their followers that they will gain tremendous power if they unlock the secrets of the multiverse.
//             Followers of these gods study esoteric
//             lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of
//             knowledge promote the practical knowledge of craft and invention, including smith deities like Gond,
//             Reorx, Onatar, Moradin, Hephaestus,
//             and Goibhniu.</p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10">command, identify</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">augury, suggestion</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">nondetection, speak with dead</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">arcane eye, confusion</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">legend lore, scrying</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>`, 1, CharacterClasses.CLERIC, "Knowledge Domain"),
//     new ClericFeature("Blessings of Knowledge", `<h5>Blessings of Knowledge<span class="ml-2"></h5>
//     <hr>
//     <div class="collapse show" id="featureBlessing">
//         <p>At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of
//             the following skills: Arcana, History, Nature, or Religion.</p>
//         <p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p>
//     </div>`, 1, CharacterClasses.CLERIC, "Knowledge Domain"),
//     new ClericFeature("Divine Domain: Life", `<h4 class="text-center">Life Domain</h4>
//     <div>
//         <p>The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that
//             sustains all life. The gods of life promote vitality and health through healing the sick and wounded,
//             caring for those in need, and driving
//             away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain,
//             particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander,
//             Pelor, and Re-Horakhty), gods
//             of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and
//             community (such as Hestia, Hathor, and Boldrei).</p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10"> bless, cure wounds</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">lesser restoration, spiritual weapon</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">beacon of hope, revivify</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">death ward, guardian of faith</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">mass cure wounds, raise dead</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>`, 1, CharacterClasses.CLERIC, "Life Domain"),
//     new ClericFeature("Disciple of Life", `<h5>Disciple of Life</h5>
//     <hr>
//     <div>
//         <p>Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level
//             or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 +
//             the spell's level.</p>
//     </div>`, 1, CharacterClasses.CLERIC, "Life Domain"),
//     new ClericFeature("Divine Domain: Light", `   <h4 class="text-center">Light Domain</h4>
//     <div>
//         <p>Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and
//             Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the
//             symbol of the sun. Some of these gods
//             are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are
//             tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of
//             beauty and artistry, who teach that
//             art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused
//             with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning
//             away darkness.</p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10">burning hands, faerie fire</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">flaming sphere, scorching ray</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">daylight, fireball</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">guardian of faith, wall of fire</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">flame strike, scrying</td>
//                 </tr>
//             </tbody>
//         </table>

//         <h5>Bonus Cantrip</h5>
//         <hr>
//         <div>
//             <p>When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.
//             </p>
//         </div>
//     </div>`, 1, CharacterClasses.CLERIC, "Light Domain"),
//     new ClericFeature("Warding Flare", `<h5>Warding Flare</h5>
//     <hr>
//     <div class="collapse show" id="featureFlare">
//         <p>Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are
//             attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose
//             disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An
//             attacker that can't be blinded
//             is immune to this feature.</p>
//         <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain
//             all expended uses when you finish a long rest.</p>
//     </div>`, 1, CharacterClasses.CLERIC, "Light Domain"),
//     new ClericFeature("Divine Domain: Nature", `<h4 class="text-center">Nature Domain</h4>
//     <div>
//         <p>Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such
//             as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs
//             and groves (such as Eldath).
//             Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and
//             reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as
//             well, champions who take a more
//             active role in advancing the interests of a particular nature god. These clerics might hunt the evil
//             monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of
//             those who anger their gods.</p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10">animal friendship, speak with animals</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">barkskin, spike growth</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">plant growth, wind wall</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">dominate beast, grasping vine</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">insect plague, tree stride</td>
//                 </tr>
//             </tbody>
//         </table>

//         <h5>Bonus Proficiency</h5>
//         <hr>

//         <div>
//             <p>Also at 1st level, you gain proficiency with heavy armor.</p>
//         </div>
//     </div>`, 1, CharacterClasses.CLERIC, "Nature Domain"),
//     new ClericFeature("Acolyte of Nature", `<h5>Acolyte of Nature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
//     data-target="#featureFlare" aria-expanded="true" aria-controls="featureFlare">[-]</button></span>
// </h5>
// <hr>
// <div class="collapse show" id="featureFlare">
// <p>At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.</p>
// </div>`, 1, CharacterClasses.CLERIC, "Nature Domain"),
//     new ClericFeature("Divine Domain: Tempest", `<h4 class="text-center">Tempest Domain</h4>
//     <div>
//         <p>Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer,
//             Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of
//             earthquakes, some fire gods, and certain
//             gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over
//             other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring
//             people, gods of this domain are
//             ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common
//             folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of
//             propitiation to ward off divine
//             wrath.
//         </p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10"> fog cloud, thunderwave</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">gust of wind, shatter
//                 </tr>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">call lightning, sleet storm</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">control water, ice storm</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">destructive wave, insect plague</td>
//                 </tr>
//             </tbody>
//         </table>

//         <h5>Bonus Proficiency</h5>
//         <hr>
//         <div>
//             <p>When you choose this domain at 1st level, you gain proficiency with heavy armor and martial weapons.</p>
//         </div>
//     </div>`, 1, CharacterClasses.CLERIC, "Tempest Domain"),
//     new ClericFeature("Wrath of the Storm", `<h5>Wrath of the Storm</h5>
//     <hr>
//     <div>
//         <p>Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you
//             can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity
//             saving throw. The creature takes
//             2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a
//             successful one.</p>
//         <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain
//             all expended uses when you finish a long rest.</p>
//     </div>`, 1, CharacterClasses.CLERIC, "Tempest Domain"),
//     new ClericFeature("Divine Domain: Trickery", `<h4 class="text-center">Trickery Domain</h4>
//     <div>
//         <p>Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are
//             mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods
//             and mortals. They're patrons of thieves,
//             scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world,
//             puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow
//             traditions. They prefer subterfuge, pranks,
//             deception, and theft rather than direct confrontation.</p>
//         <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-2 text-center">Cleric Level</th>
//                     <th class="col-10">Spells</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-2 text-center">1st</td>
//                     <td class="col-10">charm person, disguise self</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">3rd</td>
//                     <td class="col-10">mirror image, pass without trace
//                 </tr>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">5th</td>
//                     <td class="col-10">blink, dispel magic</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">7th</td>
//                     <td class="col-10">dimension door, polymorph</td>
//                 </tr>
//                 <tr>
//                     <td class="col-2 text-center">9th</td>
//                     <td class="col-10">dominate person, modify memory</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>`, 1, CharacterClasses.CLERIC, "Trickery Domain"),
//     new ClericFeature("Blessing of the Trickster", `<h5>Blessing of the Trickster</h5>
//     <hr>
//     <div>
//         <p>Starting when you choose this domain at 1st level, you can use your action to touch a willing creature
//             other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour
//             or until you use this feature
//             again.
//         </p>
//     </div>`, 1, CharacterClasses.CLERIC, "Trickery Domain"),
// ];
//-------------------------------------------------------------Druid-----------------------------------------------------------------------------
// let druidFeatures = [
//     new CharacterClassFeature("Druidic", `<h5>Druidic</h5>
//     <hr>
//     <div>
//         <p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden
//             messages. You and others who know this language automatically spot such a message. Others spot the
//             message's presence with a successful
//             DC 15 Wisdom (Perception) check but can't decipher it without magic.</p>
//     </div>`, 1, CharacterClasses.DRUID),
//     new CharacterClassFeature("Spellcasting (druid)", `<h5>Spellcasting</h5>
//     <hr>
//     <div>
//         <p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.
//             See chapter 10 of the Player's Handbook for the general rules of spellcasting.</p>

//         <h6><b>Cantrips</b></h6>
//         <p>At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid
//             cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.</p>

//         <h6><b>Preparing and Casting Spells</b></h6>
//         <p>The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To
//             cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all
//             expended spell slots when you
//             finish a long rest.</p>
//         <p>You prepare the list of druid spells that are available for you to cast, choosing from the druid spell
//             list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level
//             (minimum of one spell). The spells
//             must be of a level for which you have spell slots.</p>
//         <p>For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a
//             Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any
//             combination. If you prepare the 1st-level
//             spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove
//             it from your list of prepared spells.</p>
//         <p>You can also change your list of prepared spells when you finish a long rest. Preparing a new list of
//             druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each
//             spell on your list.</p>

//         <h6><b>Spellcasting Ability</b></h6>
//         <p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and
//             attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In
//             addition, you use your Wisdom modifier
//             when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p>
//         <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
//         <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

//         <h6><b>Ritual Casting</b></h6>
//         <p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.
//         </p>

//         <h6><b>Spellcasting Focus</b></h6>
//         <p>You can use a druidic focus as a spellcasting focus for your druid spells</p>

//         <h6><b>Cantrip Versatility</b></h6>
//         <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting
//             feature with another cantrip from the druid spell list.</p>
//     </div>`, 1, CharacterClasses.DRUID),
// ];
//-------------------------------------------------------------Fighter-----------------------------------------------------------------------------
// let fighterFeatures = [
//     new CharacterClassFeature("Fighting Style", `<div><h5>Fighting Style</h5>
//     <hr>
//     <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You
//         can't take the same Fighting Style option more than once, even if you get to choose again.</p>
// </div>
// <div><h6>Archery</h6>
//     <hr>
//     <p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>
// </div>
// <!-- <div>
//     <h6>Blind Fighting</h6>
//     <hr>
//     <p>You have blindsight with a range of 10 feet. Within that range, you can effectively see anything
//         that
//         isn't behind total cover,
//         even if you're blinded or in darkness. Moreover, you can see an invisible creature within that
//         range, unless the creature successfully hides from you.</p>
// </div>
// <div><h6>Close Quarters Shooter</h6>
//     <hr>
//     <p>When making a ranged attack while you are within 5 feet of a hostile creature, you do not have
//         disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover
//         against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.
//     </p>
// </div> -->
// <div> <h6>Defense</h6>
//     <hr>
//     <p>While you are wearing armor, you gain a +1 bonus to AC.</p>
// </div>
// <div> <h6>Dueling</h6>
//     <hr>
//     <p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to
//         damage rolls with that weapon.</p>
// </div>
// <div><h6>Great Weapon Fighting</h6>
//     <hr>
//     <p>When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are
//         wielding with two hands, you can reroll the die and must use the new roll, even if the new roll
//         is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this
//         benefit.</p>
// </div>
// <!-- 
// <div>
//     <h6>Interception</h6>
//     <hr>
//     <p>When a creature you can see hits a target, other than you, within 5 feet of you with an attack,
//         you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to
//         a
//         minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this
//         reaction.
//     </p>
// </div>
// <div><h6>Mariner</h6>
//     <hr>
//     <p>As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a
//         climbing speed equal to your normal speed, and you gain a +1 bonus to AC.</p>
// </div>
// -->
// <div><h6>Protection</h6>
//     <hr>
//     <p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can
//         use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>
// </div>
// <!-- 
// <div>
//     <h6>Superior Technique</h6>
//     <hr>
//     <p>You learn one maneuver of your choice from among those available to the Battle Master archetype. If a
//         maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the
//         saving
//         throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).</p>
//     <p>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from
//         another
//         source). This die is used to
//         fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority
//         dice when you finish a short or long rest.</p>
// </div>
// <div>
//     <h6>Thrown Weapon Fighting</h6>
//     <hr>
//     <p>You can draw a weapon that has the thrown property as part of the attack you make with the
//         weapon.</p>
//     <p>In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the
//         damage roll.</p>
// </div>
// <div><h6>Tunnel Fighter</h6>
//     <hr>
//     <p>As a bonus action, you can enter a defensive stance that lasts until the start of your next turn.
//         While in your defensive stance, you can make opportunity attacks without using your reaction,
//         and you can use your reaction to make a melee attack against a creature that moves more than 5
//         feet while within your reach.</p>
// </div>
// -->
// <div> <h6>Two-Weapon Fighting</h6>
//     <hr>
//     <p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the
//         second attack.</p>
// </div>
// <!-- 
// <div>
//     <h6>Unarmed Fighting</h6>
//     <hr>
//     <p>Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you
//         aren't wielding any weapons or a shield when you make the
//         attack roll, the d6 becomes a d8.
//     </p>
//     <p>At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.
//     </p>
// </div>
// -->`, 1, CharacterClasses.FIGHTER),
//     new CharacterClassFeature("Second Wind", `<h5>Second Wind</h5>
//     <hr>
//         <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you
//             can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
//         <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>`, 1, CharacterClasses.FIGHTER),
//     new CharacterClassFeature("Martial Versatility", `<div>
//     <h6><b>Martial Versatility</b></h6>
//     <p>Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style.</p>
// </div>`, 1, CharacterClasses.FIGHTER),
// ];
//-------------------------------------------------------------Monk-----------------------------------------------------------------------------
// let monkFeatures = [
//     new CharacterClassFeature("Unarmored Defense", `<h5>Unarmored Defense</h5>
//     <hr>
//     <p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p>`, 1, CharacterClasses.MONK),
//     new CharacterClassFeature("Martial Arts", `<h5>Martial Arts</h5>
//     <hr>
//     <p>Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons,
//         which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.</p>
//     <p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing
//         armor or wielding a shield.</p>
//     <ul>
//         <li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and
//             monk weapons.</li>
//         <li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes
//             as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>
//         <li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one
//             unarmed strike as a bonus action. For example, if you take the Attack action and attack with a
//             quarterstaff, you can also make an
//             unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li>
//     </ul>
//     <p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two
//         lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade
//         (called a kama).</p>`, 1, CharacterClasses.MONK),
//     new CharacterClassFeature("Monk Weapons", `<h5>Monk Weapons</h5>
//     <hr>
//     <p>You can use this feature to define your monk weapons, rather than using the definition in Martial Arts.</p>
//     <p>You practice your martial arts with specially chosen weapons, which become monk weapons for you. You can
//         choose a number of weapons to be your monk weapons equal to 5 + your Wisdom modifier (minimum of five
//         weapons). The chosen weapons
//         must each meet the following criteria:</p>
//     <ul>
//         <li>The weapon must be a simple or martial weapon.</li>
//         <li>You must be proficient with the weapon.</li>
//         <li>The weapon must lack these properties: heavy, special, or two-handed.</li>
//     </ul>`, 1, CharacterClasses.MONK),
// ];

//-------------------------------------------------------------Paladin-----------------------------------------------------------------------------
// let paladinFeatures = [
//     new CharacterClassFeature("Divine Sense", `<h5>Divine Sense</h5>
//     <hr>
//     <p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like
//         heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end
//         of your next turn, you know
//         the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You
//         know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the
//         vampire Count Strahd
//         von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object
//         that has been consecrated or desecrated, as with the hallow spell.</p>

//     <p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest,
//         you regain all expended uses.</p>`, 1, CharacterClasses.PALADIN),
//     new CharacterClassFeature("Lay on Hands", `<h5>Lay on Hands</h5>
//     <hr>
//     <p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long
//         rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.</p>
//     <p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that
//         creature, up to the maximum amount remaining in your pool.</p>
//     <p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or
//         neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a
//         single use of Lay on Hands,
//         expending hit points separately for each one.</p>
//     <p>This feature has no effect on undead and constructs.</p>`, 1, CharacterClasses.PALADIN),
// ];
//-------------------------------------------------------------Ranger-----------------------------------------------------------------------------
// let rangerFeatures = [
//     new CharacterClassFeature("Favored Enemy", `<h5>Favored Enemy</h5>
//     <p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to
//         a certain type of enemy commonly encountered in the wilds.</p>
//     <p>Choose a type of favored enemy: fey, humanoids,monstrosities, or undead. You gain a +2 bonus to damage rolls
//         with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom
//         (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information
//         about them.</p>
//     <p>When you gain this feature, you also learn one language of your choice, typically one spoken by your
//         favored enemy or creatures associated with it. However, you are free to pick any language you wish to
//         learn.</p>`, 1, CharacterClasses.RANGER),
//     new CharacterClassFeature("Natural Explorer", `<h5>Natural Explorer</h5>
//     <hr>
//     <p>You are a master of navigating the natural world, and you react with swift and decisive action when
//         attacked. This grants you the following benefits:</p>
//     <ul>
//         <li>You ignore difficult terrain.</li>
//         <li>You have advantage on initiative rolls.</li>
//         <li>On your first turn during combat, you have advantage on attack rolls against creatures that have
//             not yet acted.</li>
//     </ul>
//     <p>In addition, you are skilled at navigating the wilderness. You gain the following benefits when
//         traveling for an hour or more:</p>
//     <ul>
//         <li>Difficult terrain doesn't slow your group's travel.</li>
//         <li>Your group can't become lost except by magical means.</li>
//         <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or
//             tracking), you remain alert to danger.</li>
//         <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
//         <li>When you forage, you find twice as much food as you normally would.</li>
//         <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago
//             they passed through the area.</li>
//     </ul>
// `, 1, CharacterClasses.RANGER),
// ];
//-------------------------------------------------------------Rogue-----------------------------------------------------------------------------
// let rogueFeatures = [
//     new CharacterClassFeature("Expertise", `<h5>Expertise</h5>
//     <hr>
//     <p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your
//         proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make
//         that uses either of the chosen proficiencies.</p>
//     <p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to
//         gain this benefit.</p>`, 1, CharacterClasses.ROGUE),
//     new CharacterClassFeature("Sneak Attack", `<h5>Sneak Attack</h5>
//     <hr>
//     <p>Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn,
//         you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the
//         attack roll. The attack must use a finesse or a ranged weapon.</p>
//     <p>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it,
//         that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.</p>
//     <p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak
//         Attack column of the Rogue table.</p>`, 1, CharacterClasses.ROGUE),
//     new CharacterClassFeature("Thieves' Cant", `<h5>Thieves' Cant</h5>
//     <hr>
//     <p>During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows
//         you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant
//         understands such messages. It takes four times longer to convey such a message than it does to speak the
//         same idea plainly.</p>
//     <p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as
//         whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the
//         people in an area are easy marks or will provide a safe house for thieves on the run.</p>`, 1, CharacterClasses.ROGUE),
// ];
//-------------------------------------------------------------Sorcerer-----------------------------------------------------------------------------

// let sorcererFeatures = [
//     new CharacterClassFeature("Spellcasting (Sorcerer)", `<h5>Spellcasting</h5>
//     <hr>
//     <p>An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing
//         you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p>
//     <h6><b>Cantrips</b></h6>
//     <p>At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional
//         sorcerer cantrip of your choice at 4th level and another at 10th level.</p>
//     <h6><b>Spell Slots</b></h6>
//     <p>The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and
//         higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You
//         regain all expended spell slots
//         when you finish a long rest.</p>
//     <p>For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell
//         slot available, you can cast burning hands using either slot.</p>
//     <h6><b>Spells Known of 1st Level and Higher</b></h6>
//     <p>You know two 1st-level spells of your choice from the sorcerer spell list.</p>
//     <p>You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th,
//         and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you
//         reach 3rd level in this class,
//         you can learn one new spell of 1st or 2nd level.</p>
//     <p>Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and
//         replace it with another spell from the sorcerer spell list, which also must be of a level for which you
//         have spell slots.</p>
//     <h6><b>Spellcasting Ability</b></h6>
//     <p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on
//         your ability to project your will into the world. You use your Charisma whenever a spell refers to your
//         spellcasting ability. In addition,
//         you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when
//         making an attack roll with one.</p>
//     <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
//     <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>
//     <h6><b>Spellcasting Focus</b></h6>
//     <p>You can use an arcane focus as a spellcasting focus for your sorcerer spells.</p>
//     <h6><b>Spell Versatility</b></h6>
//     <p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature
//         with another spell from the sorcerer spell list. The new spell must be the same level as the spell you
//         replace.</p>`, 1, CharacterClasses.SORCERER),
//     new SorcererFeature("Draconic Bloodline", `<h4 class="text-center">Draconic Bloodline</h4>
//     <p>Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.
//         Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times
//         who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these
//         bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the
//         first of a new bloodline, as a result of a pact or some other exceptional circumstance.</p>
//     <h5>Dragon Ancestor</h5>
//     <hr>
//         <p>At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each
//             dragon is used by features you gain later.</p>
//         <table class="table-striped table-hover mb-2">
//             <thead>
//                 <tr>
//                     <th class="col-6 text-center" data-rd-isroller="false">Dragon</th>
//                     <th class="col-6 text-center" data-rd-isroller="false">Damage Type</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="col-6 text-center">Black</td>
//                     <td class="col-6 text-center">Acid</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Blue</td>
//                     <td class="col-6 text-center">Lightning</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Brass</td>
//                     <td class="col-6 text-center">Fire</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Bronze</td>
//                     <td class="col-6 text-center">Lightning</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Copper</td>
//                     <td class="col-6 text-center">Acid</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Gold</td>
//                     <td class="col-6 text-center">Fire</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Green</td>
//                     <td class="col-6 text-center">Poison</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Red</td>
//                     <td class="col-6 text-center">Fire</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">Silver</td>
//                     <td class="col-6 text-center">Cold</td>
//                 </tr>
//                 <tr>
//                     <td class="col-6 text-center">White</td>
//                     <td class="col-6 text-center">Cold</td>
//                 </tr>
//             </tbody>
//         </table>
//         <p>You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when
//             interacting with dragons, your proficiency bonus is doubled if it applies to the check.</p>
// `, 1, CharacterClasses.SORCERER, "Draconic Bloodline"),
//     new SorcererFeature("Draconic Resilience", `<h5>Draconic Resilience</h5>
//     <hr>
//     <p>As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.</p>
//     <p>Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.</p>
// `, 1, CharacterClasses.SORCERER, "Draconic Bloodline"),
//     new SorcererFeature("Wild Magic", `<h4 class="text-center">Wild Magic</h4>
//     <p>Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have
//         endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the
//         Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or
//         marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason.
//         However it came to be, this chaotic magic churns within you, waiting for any outlet.</p>
// `, 1, CharacterClasses.SORCERER, "Wild Magic"),
//     new SorcererFeature("Wild Magic Surge", `<h5>Wild Magic Surge</h5>
//     <hr>
//     <p>Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed
//         magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll
//         a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild
//         Magic Surge can happen once per turn.</p>
//     <p>If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires
//         concentration, it doesn't require concentration in this case; the spell lasts for its full duration.
//     </p>
//     <table class="table-striped table-hover mb-2">
//         <thead>
//             <tr>
//                 <th class="col-1 text-center"><span>d100</span>
//                 </th>
//                 <th class="col-11">Effect</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="col-1 text-center">01-02</td>
//                 <td class="col-11">Roll on this table at the start of each of your turns for the next
//                     minute, ignoring this result on subsequent rolls.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">03-04</td>
//                 <td class="col-11">For the next minute, you can see any invisible creature if you have line of
//                     sight to it.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">05-06</td>
//                 <td class="col-11">A modron chosen and controlled by the DM appears in an unoccupied space
//                     within 5 feet of you, then disappears 1 minute later.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">07-08</td>
//                 <td class="col-11">You cast fireball as a 3rd-level spell centered on yourself.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">09-10</td>
//                 <td class="col-11">You cast magic missile as a 5th-level spell.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">11-12</td>
//                 <td class="col-11">Roll a d10. Your height changes by a number of inches equal to the roll. If
//                     the roll is odd, you shrink. If the roll is even, you grow.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">13-14</td>
//                 <td class="col-11">You cast confusion centered on yourself.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">15-16</td>
//                 <td class="col-11">For the next minute, you regain 5 hit points at the start of each of your
//                     turns.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">17-18</td>
//                 <td class="col-11">You grow a long beard made of feathers that remains until you sneeze, at
//                     which point the feathers explode out from your face.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">19-20</td>
//                 <td class="col-11">You cast grease centered on yourself.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">21-22</td>
//                 <td class="col-11">Creatures have disadvantage on saving throws against the next spell you
//                     cast in the next minute that involves a saving throw.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">23-24</td>
//                 <td class="col-11">Your skin turns a vibrant shade of blue. A remove curse spell can end this
//                     effect.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">25-26</td>
//                 <td class="col-11">An eye appears on your forehead for the next minute. During that time,
//                     you have advantage on Wisdom (Perception) checks that rely on sight.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">27-28</td>
//                 <td class="col-11">For the next minute, all your spells with a casting time of 1 action have
//                     a casting time of 1 bonus action.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">29-30</td>
//                 <td class="col-11">You teleport up to 60 feet to an unoccupied space of your choice that you
//                     can see.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">31-32</td>
//                 <td class="col-11">You are transported to the Astral Plane until the end of your next turn,
//                     after which time you return to the space you previously occupied or the nearest
//                     unoccupied space if that space is occupied.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">33-34</td>
//                 <td class="col-11">Maximize the damage of the next damaging spell you cast within the next
//                     minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">35-36</td>
//                 <td class="col-11">Roll a d10. Your age changes by a number of years equal to the roll. If the
//                     roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">37-38</td>
//                 <td class="col-11">1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet
//                     of you and are frightened of you. They vanish after 1 minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">39-40</td>
//                 <td class="col-11">You regain 2d10 hit points.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">41-42</td>
//                 <td class="col-11">You turn into a potted plant until the start of your next turn. While a
//                     plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit
//                     points, your pot breaks, and your form reverts.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">43-44</td>
//                 <td class="col-11">For the next minute, you can teleport up to 20 feet as a bonus action on
//                     each of your turns.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">45-46</td>
//                 <td class="col-11">You cast levitate on yourself.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">47-48</td>
//                 <td class="col-11">A unicorn controlled by the DM appears in a space within 5 feet of you, then
//                     disappears 1 minute later.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">49-50</td>
//                 <td class="col-11">You can't speak for the next minute. Whenever you try, pink bubbles float
//                     out of your mouth.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">51-52</td>
//                 <td class="col-11">A spectral shield hovers near you for the next minute, granting you a +2
//                     bonus to AC and immunity to magic missile.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">53-54</td>
//                 <td class="col-11">You are immune to being intoxicated by alcohol for the next 5d6 days.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">55-56</td>
//                 <td class="col-11">Your hair falls out but grows back within 24 hours.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">57-58</td>
//                 <td class="col-11">For the next minute, any flammable object you touch that isn't being worn
//                     or carried by another creature bursts into flame.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">59-60</td>
//                 <td class="col-11">You regain your lowest-level expended spell slot.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">61-62</td>
//                 <td class="col-11">For the next minute, you must shout when you speak.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">63-64</td>
//                 <td class="col-11">You cast fog cloud centered on yourself.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">65-66</td>
//                 <td class="col-11">Up to three creatures you choose within 30 feet of you take 4d10 lightning
//                     damage.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">67-68</td>
//                 <td class="col-11">You are frightened by the nearest creature until the end of your next turn.
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">69-70</td>
//                 <td class="col-11">Each creature within 30 feet of you becomes invisible for the next minute.
//                     The invisibility ends on a creature when it attacks or casts a spell.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">71-72</td>
//                 <td class="col-11">You gain resistance to all damage for the next minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">73-74</td>
//                 <td class="col-11">A random creature within 60 feet of you becomes poisoned for 1d4 hours.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">75-76</td>
//                 <td class="col-11">You glow with bright light in a 30-foot radius for the next minute. Any
//                     creature that ends its turn within 5 feet of you is blinded until the end of its next turn.
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">77-78</td>
//                 <td class="col-11">You cast polymorph on yourself. If you fail the saving throw, you turn into a
//                     sheep for the spell's duration.
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">79-80</td>
//                 <td class="col-11">Illusory butterflies and flower petals flutter in the air within 10 feet
//                     of you for the next minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">81-82</td>
//                 <td class="col-11">You can take one additional action immediately.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">83-84</td>
//                 <td class="col-11">Each creature within 30 feet of you takes 1d10 necrotic damage. You regain
//                     hit points equal to the sum of the necrotic damage dealt.
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">85-86</td>
//                 <td class="col-11">You cast mirror image.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">87-88</td>
//                 <td class="col-11">You cast fly on a random creature within 60 feet of you.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">89-90</td>
//                 <td class="col-11">You become invisible for the next minute. During that time, other creatures
//                     can't hear you. The invisibility ends if you attack or cast a spell.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">91-92</td>
//                 <td class="col-11">If you die within the next minute, you immediately come back to life as
//                     if by the reincarnate spell.
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">93-94</td>
//                 <td class="col-11">Your size increases by one size category for the next minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">95-96</td>
//                 <td class="col-11">You and all creatures within 30 feet of you gain vulnerability to
//                     piercing damage for the next minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">97-98</td>
//                 <td class="col-11">You are surrounded by faint, ethereal music for the next minute.</td>
//             </tr>
//             <tr>
//                 <td class="col-1 text-center">99-00</td>
//                 <td class="col-11">You regain all expended sorcery points.</td>
//             </tr>
//         </tbody>
//     </table>`, 1, CharacterClasses.SORCERER, "Wild Magic"),
//     new SorcererFeature("Tides of Chaos", `<h5>Tides of Chaos</h5>
//     <hr>
//     <p>Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.</p>
//     <p>Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.</p>
// `, 1, CharacterClasses.SORCERER),
//     // new SorcererFeature("", ``, 1, CharacterClasses.SORCERER,)
// ];
//-------------------------------------------------------------Warlock-----------------------------------------------------------------------------

// let warlockFeatures = [
//     new CharacterClassFeature("Pact Magic", `<h5>Pact Magic</h5>
//     <hr>
//     <p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting.</p>
//     <h6><b>Cantrips</b></h6>
//     <p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>
//     <h6><b>Spell Slots</b></h6>
//     <p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock
//     spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
//     <p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
//     <h6><b>Spells Known of 1st Level and Higher</b></h6>
//     <p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
//     <p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level.
//     When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p>
//     <p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>
//     <h6><b>Spellcasting Ability</b></h6>
//     <p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell
//     you cast and when making an attack roll with one.</p>
//     <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
//     <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>
//     <h6><b>Spellcasting Focus</b></h6>
//     <p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>
//     <h6><b>Spell Versatility</b></h6>
//     <p>Whenever you finish a long rest, you can replace one spell you learned from this Pact Magic feature with another spell from the warlock spell list. The new spell must be the same level as the spell you replace.</p>
// `, 1, CharacterClasses.WARLOCK),
//     new WarlockFeature("Otherworldly Patron: Archfey", `<h4 class="text-center">The Archfey</h4>
//     <p>Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten
//         before the mortal races were born. This being's motivations are often inscrutable, and sometimes
//         whimsical, and might involve a striving for greater magical power or the settling of age-old grudges.
//         Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming
//         Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and
//         ancient hags.</p>
//     <h5>Expanded Spell List</h5>
//     <hr>
//     <p>The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The
//         following spells are added to the warlock spell list for you.</p>
//     <table class="table-striped table-hover mb-2">
//         <thead>
//             <tr>
//                 <th class="col-2 text-center">Spell Level</th>
//                 <th class="col-10">Spells</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="col-2 text-center">1st</td>
//                 <td class="col-10">Faerie fire, Sleep</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">2nd</td>
//                 <td class="col-10">Calm emotions, Phantasmal force</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">3rd</td>
//                 <td class="col-10">blink, Plant growth</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">4th</td>
//                 <td class="col-10">Dominate beast, Greater invisibility</a>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">5th</td>
//                 <td class="col-10">Dominate person, Seeming</td>
//             </tr>
//         </tbody>
//     </table>`, 1, CharacterClasses.WARLOCK, ""),
//     new WarlockFeature("Fey Presence", `<h5>Fey Presence</h5>
//     <hr>
//     <p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.</p>
//     <p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
// `, 1, CharacterClasses.WARLOCK, "Archfey"),
//     new WarlockFeature("Otherworldly Patron: Fiend", `<h4 class="text-center">The Fiend</h4>
//     <p>You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even
//         if you strive against those aims. Such beings desire the corruption or destruction of all things,
//         ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon,
//         Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial;
//         pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.</p>
//     <h5>Expanded Spell List</h5>
//     <hr>
//     <p>The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The
//         following spells are added to the warlock spell list for you.</p>
//     <table class="table-striped table-hover mb-2">
//         <thead>
//             <tr>
//                 <th class="col-2 text-center">Spell Level</th>
//                 <th class="col-10">Spells</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="col-2 text-center">1st</td>
//                 <td class="col-10">Burning hands, Command</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">2nd</td>
//                 <td class="col-10">Blindness/deafness, Scorching ray</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">3rd</td>
//                 <td class="col-10">Fireball, Stinking cloud</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">4th</td>
//                 <td class="col-10">Fire shield, Wall of fire</a>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">5th</td>
//                 <td class="col-10">Flame strike, Hallow</td>
//             </tr>
//         </tbody>
//     </table>`, 1, CharacterClasses.WARLOCK, "Fiend"),
//     new WarlockFeature("Dark One's Blessing", `<h5>Dark One's Blessing</h5>
//     <hr>
//     <p>Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit
//         points equal to your Charisma modifier + your warlock level (minimum of 1).</p>
// `, 1, CharacterClasses.WARLOCK, "Fiend"),
//     new WarlockFeature("Otherworldly Patron: Great Old One", `<h4 class="text-center">The Great Old One</h4>
//     <p>Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might
//         come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in
//         legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even
//         the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be
//         unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to
//         draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun,
//         the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable
//         beings.</p>
//     <h5>Expanded Spell List</h5>
//     <hr>
//     <p>The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The
//         following spells are added to the warlock spell list for you.</p>
//     <table class="table-striped table-hover mb-2">
//         <thead>
//             <tr>
//                 <th class="col-2 text-center">Spell Level</th>
//                 <th class="col-10">Spells</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="col-2 text-center">1st</td>
//                 <td class="col-10">Dissonant whispers, Tasha's hideous laughter</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">2nd</td>
//                 <td class="col-10">Detect thoughts, Phantasmal force</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">3rd</td>
//                 <td class="col-10">Clairvoyance, Sending</td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">4th</td>
//                 <td class="col-10">Dominate beast, Evard's black tentacles</a>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="col-2 text-center">5th</td>
//                 <td class="col-10">Dominate person, Telekinesis</td>
//             </tr>
//         </tbody>
//     </table>`, 1, CharacterClasses.WARLOCK, "Great Old One"),
//     new WarlockFeature("Awakened Mind", `<h5>Awakened Mind</h5>
//     <hr>
//     <p>Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other
//     creatures. You can communicate telepathically with any creature you can see within 30 feet of you.
//     You don't need to share a language with the creature for it to understand your telepathic
//     utterances, but the creature must be able to understand at least one language.</p>`, 1, CharacterClasses.WARLOCK, "Great Old One"),
// ];
//-------------------------------------------------------------Wizard-----------------------------------------------------------------------------
// let wizardFeatures = [
//     new CharacterClassFeature("Spellcasting (Wizard)", `<h5>Spellcasting</h5>
//     <hr>
//    <p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>
//     <h6><b>Cantrips</b></h6>
//     <p>At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.</p>
//     <h6><b>Spellbook</b></h6>
//     <p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p>
//     <p>The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during
//     your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.</p>
//     <p><i>Copying a Spell into the Book.</i> <br>When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it. Copying a
//     spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required,
//     then transcribe it into your spellbook using your own notation.</p>
//     <p>For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent
//     this time and money, you can prepare the spell just like your other spells.</p>
//     <p>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the
//     check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.</p>
//     <p><i>Replacing the Book.</i> <br>You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier,
//     since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells
//     that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.</p>
//     <p><i>The Book's Appearance.</i> <br>Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely
//     bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.</p>
//     <h6><b>Preparing and Casting Spells</b></h6>
//     <p>The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a
//     long rest.</p>
//     <p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be
//     of a level for which you have spell slots.</p>
//     <p>For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your
//     spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
//     <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at
//     least 1 minute per spell level for each spell on your list.</p>
//     <h6><b>Spellcasting Ability</b></h6>
//     <p>Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition,
//     you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p>
//     <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Intelligence modifier</p>
//     <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Intelligence modifier</p>
//     <h6><b>Spellcasting Focus</b></h6>
//     <p>You can use an arcane focus as a spellcasting focus for your wizard spells.</p>
//     <h6><b>Ritual Casting</b></h6>
//     <p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p>
//     <h6><b>Learning Spells of 1st Level and Higher</b></h6>
//     <p>Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find
//     other spells that you can add to your spellbook (see "Spellbook").</p>
//     <h6><b>Cantrip Versatility</b></h6>
//     <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the wizard spell list.</p>
// `, 1, CharacterClasses.WIZARD),
//     new CharacterClassFeature("Arcane Recovery", `<h5>Arcane Recovery</h5>
//     <hr>
//     <p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or
//     less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p>
//     <p>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.</p>
//     <p>You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>
// `, 1, CharacterClasses.WIZARD),
// ];