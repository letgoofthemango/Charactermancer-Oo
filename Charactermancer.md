# Charactermancer

Goal: A playcer can create a complete DnD character.

## User stories

- As a player, I can select a class, race and background. 
  There are several classes with subclasses.
  There are several races with different subraces.
  There are several backgrounds.
- As a player, I can distribute my ability scores.
  There are three systems to choose ability scores.
  - Roll
  - Standard array
  - point-buy
- As a player, I can review my character sheet. 
- As a player, I can reverse a step and change my choices.
- As a player, I can get the output in different file formats. 


## Character sheet

Overview
- Name
- Class 
- Level
- Race
- Background
- Alignment
- ....

Ability scores
- Strength
- Dexterity
- Constitution
- Intelligence
- Wisdom
- Charisma

Hitpoints (dependent on constitution)

Skills
- ....

Saving Throws
- ....

Inventory
- ....

Magic
-


## Data structure / models

- class Character
  - name: string  // freely selectable
  - charClass: CharacterClass // freely from pre-defined list
  - level: integer  // constant at 1
  - race: Race  // freely from list
  - background: Background  // ditto
  - alignment: string  // ditto from list of pre-defined values
  - abilityScores: List of AbilityScore / only six of it.
  - hitpoints: integer  // calculated from class, constitution modifiers.
  - skills: List of Skill / 17 of it.   // depends on class
  - inventory: List of InventoryItem     // depends on class
  - magic: List of MagicItem     // ditto

- class AbilityScore   
    - name: string   
    - modificator: int
    - value: int
    - savingThrowModificator: int
  
- class Skill
  - abilityScore: AbilityScore
  - name: string
  - modificator: integer
  - proficiencyLevel: integer / enum

- class CharacterClass
  - name: string
  - skillProficiencies: List of SkillProficiency
  - hitDice: integer
  - lots of other properties ....
  - features...

  - 13 objects / instances of this class

  - object fighter: CharacterClass
    - name = "Fighter"
    - characterFightingStyle = ["archery", 'blight fighting', 'defense', 'duelling'];
    possibleSkillChoices = ['acrobatics', 'athletics', 'history', 'insight', 'intimidation', ...];
    numberOfSkillsToChoose = 2;
    characterPossibleToolChoices = [];
    characterMaxToolProficiencies = 0;
    maxLanguageProficiencies = 0;
    possibleLanguageProficiencies = [];
    characterFeatures = ['fighting style', 'martial versatility', 'second wind'];
    possibleCharacterEquipment = ['sword', 'shield', ... ];
    possibleCantripSpells = [];
    firstLevelSpells = [];
    firstLevelSpellSlots = [];
    hitDice = 10;
  - TODO: for all other classes
    
- class Race
  
  - object mountainDwarf: Race
    - name = "Dwarf (Mountain)"
    - size = "Medium"
    - speed = 25
    - abilityScoreModifications = {"Strength": 2, "Constitution": 2}
    - features = ["darkvision", "dwarfen resilience"]
  - TODO: for all other races

- enum Background
- enum InventoryItem
- enum MagicItem

## Player choices

- Name (free)
- Class (free)
- Race (free)
- Background (free)
- Alignment (free)
- Ability scores (depends on system that player can freely choose)
- Skills (dependent on the class, race and background)
- Starting gear / inventory (dependent on class or freely)

All other properties are calculated.


## Workflow

1. Select distribution of ability scores
1. Select class / subclass
   1. Select skill proficiencies
   2. Select skills
   3. Select languages, if applicable,
   4. Select tools, if applicable.
   5. Select features
   6. Select magic.
2. Select race / subrace
   2. Select skills
   3. Select languages, if applicable,
   4. Select tools, if applicable.
   5. Select features
3. Select background
   2. Select skills
   3. Select languages, if applicable,
   4. Select tools, if applicable.
   5. Select features
  
5. Select name, alignment, description etc.


## On Property (conceptual)

Is an (abstractly speaking) attribute or state of an object.
E.g. obj.property1
dynamical attribute

Optionally a getter o a setter.

Getter:
e.g. obj.property1
obj.getProperty1() // Java

Setter:
e.g. 
obj.property1 = newValue
obj.setProperty1(newValue) // Java


Version 1

class A { // simplest version
  constructor(property1) {
    this.property1 = property1
  }

}

a = new A(something)
a.property1 // Getter
a.property1 = newSomething // Setter


Version 2

class A { // JS style
  constructor(property1) {
    this._property1 = property1  // private
  }

  get property1() {
    return this._property1
  }

  set property1(newVal) {
    this._property1 = newVal
  }
}

a = new A(something)
a.property1 // Getter
a.property1 = newSomething // Setter


Version 3

class A { // Java style
  constructor(property1) {
    this.property1 = property1  // private
  }

  getProperty1() {
    return this.property1
  }

  setProperty1(newVal) {
    this.property1 = newVal
  }
}

a = new A(something)
a.getProperty1() // Getter
a.setProperty1(newSomething) // Setter



Comparision

Version 1 and 2: same form of access
Version 2 and 3: same structure


## TODO

User requirements / User stories

1. As a player, I can select Barbarian / Artificier as a class.
   I have a large checkbox, where I select ...
2. As a b
