/*
  Prototype Refactor
  1. Copy and paste your code or the solution from yesterday
  2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
    this.name = obj.name;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class ObjectStats extends GameObject {
  constructor(obj) {
    super(obj);
    this.healthPoints = obj.healthPoints;
  }
  takeDamage(dmg) {
    this.healthPoints -= dmg;
    return `${this.name} took ${dmg} damage. HP now at ${this.healthPoints}pts.`;
  }
}

class Humanoid extends ObjectStats {
  constructor(obj) {
    super(obj);
    this.damage = obj.damage;
    this.defense = obj.defense;
    this.language = obj.language;
    this.team = obj.team;
    this.weapons = obj.weapons;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

class Supers extends Humanoid {
  constructor(obj) {
    super(obj);
    this.alignment = obj.alignment;
  }
  attack(target) {
    const dmg = (this.damage - target.defense);
    return `${this.name} attacked ${target.name}! ${target.takeDamage(dmg)}`;
  }
}

class Villain extends Supers {
  constructor(obj) {
    super(obj);
    this.alignment = `Evil`;
  }
  speak() {
    if (this.language === `Common Tongue`) {
      return `${this.name} yells "PREPARE YOURSELF! I WILL DESTROY YOU!"`;
    }
    else {
      return `${this.name} yells something in ${this.language}! Although you weren't able to understand it, you get the feeling it wasn't something good.`;
    }
  }
}

class Hero extends Supers {
  constructor(obj) {
    super(obj);
    this.alignment = `Good`;
  }
  attack(target) {
    if(target.alignment===`Evil` && this.damage>target.defense) { 
      const dmg = (this.damage - target.defense);
      return `${this.name} attacked ${target.name}! ${target.takeDamage(dmg)}`;
    }
    else if (this.damage<=target.defense) {
      return `${this.name} is too scared to move.`;
    }
    else {
      return `I refuse to attack anyone who isn't evil!`;
    }
  }
  speak() {
    if (this.language === `Common Tongue`) { 
      return `${this.name} yells "JUSTICE WILL ALWAYS PREVAIL!"`;
    }
    else {
      return `${this.name} yells something in ${this.language}! Although you weren't able to understand it, you get the feeling ${this.name} is good and you have nothing to fear.`;
    }
  }
}

// Character Creation
const dwarfKnight = new Hero({
  createdAt: new Date(),
  dimensions: { length: 2, width: 2, height: 3, },
  healthPoints: 20, damage: 5, defense: 5,
  name: 'Hajime', team: 'Dwarven Guard', language: 'Common Tongue',
  weapons: [ 'Bow', 'Short Sword', ],
});

const goblin = new Villain({
  createdAt: new Date(),
  dimensions: { length: 1, width: 1, height: 3, },
  healthPoints: 15, damage: 8, defense: 1,
  name: 'Skrull', team: 'Goblin Army', language: 'Goblinese',
  weapons: [ 'Dagger', ],
});

// "battle"
const battle = function(p1, p2) {
  this.i = 0;
  console.log(
    p1.greet(),`\n`, p2.greet(), `\n`,
    `...There is a brief pause as tension suddenly escalates!\n`,
    p1.speak(), `\n`, p2.speak()
  );
  do {
    this.i++
    console.log(`ROUND ${this.i}! FIGHT!\n`, p1.attack(p2), `\n`, p2.attack(p1));
    if (p1.healthPoints<=0) { p1.destroy(); }
    if (p2.healthPoints<=0) { p2.destroy(); }
  } while (p1.healthPoints>0 && p2.healthPoints>0);
  if(p1.healthPoints>0 && p2.healthPoints>0) { console.log(`DRAW!`); }
  else if(p1.healthPoints<=0) { console.log(`${p2.name} WINS!`); }
  else if(p2.healthPoints<=0) { console.log(`${p1.name} WINS!`); }
}
battle(dwarfKnight, goblin);