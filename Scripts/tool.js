class Tool extends InventoryItem {
    constructor(name, type, copper, silver, gold, weight, description) {
        super(name, type, copper, silver, gold, weight, description)
        this.proficiency = false;
        this.possibleTool=false;
    }
    
}
let alchemist= new Tool(ToolName.ALCHEMIST, ItemType.ARTISAN, 0, 0, 50, 8, "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire. Components: Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water.");
let bagpipes= new Tool(ToolName.BAGPIPES, ItemType.INSTRUMENT, 0, 0, 30, 6, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let brewer= new Tool(ToolName.BREWER, ItemType.ARTISAN, 0, 0, 20, 9, "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work. Components: Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing.");
let calligrapher= new Tool(ToolName.CALLIGRAPHER, ItemType.ARTISAN, 0, 0, 10, 5, "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design. Components: Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills.");
let cards= new Tool(ToolName.CARDS, ItemType.GAMING, 0, 5, 0, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.");
let carpenter= new Tool(ToolName.CARPENTER, ItemType.ARTISAN, 0, 0, 8, 6, "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.  Components: Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel.");
let cartographer= new Tool(ToolName.CARTOGRAPHER, ItemType.ARTISAN, 0, 0, 15, 6, "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level. Components: Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler.");
let cobbler= new Tool(ToolName.COBBLER, ItemType.ARTISAN, 0, 0, 5, 5, "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons. Components: Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread.");
let cook= new Tool(ToolName.COOK, ItemType.ARTISAN, 0, 0, 1, 8, "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit. Components: Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle.");
let dice= new Tool(ToolName.DICE, ItemType.GAMING, 0, 1, 0, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.");
let disguise= new Tool(ToolName.DISGUISE, ItemType.KIT, 0, 0, 25, 3, "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity. Components: A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing.");
let dragonAnte= new Tool(ToolName.DRAGONANTE, ItemType.GAMING, 0, 0, 1, 0, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.");
let dragonchess= new Tool(ToolName.DRAGONCHESS, ItemType.GAMING, 0, 0, 1, 0.5, "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.");
let drum= new Tool(ToolName.DRUM, ItemType.INSTRUMENT, 0, 0, 6, 3, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let dulcimer= new Tool(ToolName.DULCIMER, ItemType.INSTRUMENT, 0, 0, 25, 10, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let flute= new Tool(ToolName.FLUTE, ItemType.INSTRUMENT, 0, 0, 2, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let forgery= new Tool(ToolName.FORGERY, ItemType.KIT, 0, 0, 15, 5, "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document. A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature. Components: A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal.");
let glassblower= new Tool(ToolName.GLASBLOWER, ItemType.ARTISAN, 0, 0, 30, 5, "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects. Components: The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass.");
let herbalism= new Tool(ToolName.HERBALISM, ItemType.KIT, 0, 0, 5, 3, "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing. Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements. Components: An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars.");
let horn= new Tool(ToolName.HORN, ItemType.INSTRUMENT, 0, 0, 3, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let jewler= new Tool(ToolName.JEWLER, ItemType.ARTISAN, 0, 0, 25, 2, "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones. Components: Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers.");
let leatherworker= new Tool(ToolName.LEATHERWORKER, ItemType.ARTISAN, 0, 0, 5, 5, "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods. Components: Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps.");
let lute= new Tool(ToolName.LUTE, ItemType.INSTRUMENT, 0, 0, 35, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let lyre= new Tool(ToolName.LYRE, ItemType.INSTRUMENT, 0, 0, 30, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let mason= new Tool(ToolName.MASON, ItemType.ARTISAN, 0, 0, 10, 8, "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick. Components: Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square.");
let navigators= new Tool(ToolName.NAVIGATOR, ItemType.KIT, 0, 0, 25, 3, "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea. Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction. Components: Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill.");
let painter= new Tool(ToolName.PAINTER, ItemType.ARTISAN, 0, 0, 10, 5, "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art. Components: Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette.");
let pan= new Tool(ToolName.PAN, ItemType.INSTRUMENT, 0, 0, 12, 2, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let poisoner= new Tool(ToolName.POISONER, ItemType.KIT, 0, 0, 50, 2, "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons. Additionally, the Crafting and Harvesting Poison rules require the use of a poisoner's kit. A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them. Components: A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod.");
let potter= new Tool(ToolName.POTTER, ItemType.ARTISAN, 0, 0, 10, 3, "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels. Components: Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers.");
let shawm= new Tool(ToolName.SHAWM, ItemType.INSTRUMENT, 0, 0, 2, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let smith= new Tool(ToolName.SMITH, ItemType.ARTISAN, 0, 0, 20, 8, "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items. Components: Smith's tools include hammers, tongs, charcoal, rags, and a whetstone.");
let thieves= new Tool(ToolName.THIEVES, ItemType.KIT, 0, 0, 25, 1, "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks. Components: Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.");
let tinker= new Tool(ToolName.TINKER, ItemType.ARTISAN, 0, 0, 50, 10, "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Components: Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue.");
let vehicles = new Tool(ToolName.VEHICLES, ItemType.GENERAL, 0, 0, 0, 0, "You know how to operate certain land or water vehicles.");
let viol= new Tool(ToolName.VIOL, ItemType.INSTRUMENT, 0, 0, 30, 1, "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.");
let weaver= new Tool(ToolName.WEAVER, ItemType.ARTISAN, 0, 0, 1, 5, "Weaver's tools allow you to create cloth and tailor it into articles of clothing. Components: Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport.");
let woodcarver= new Tool(ToolName.WOODCARVER, ItemType.ARTISAN, 0, 0, 1, 5, "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows. Components: Woodcarver's tools consist of a knife, a gouge, and a small saw.")

