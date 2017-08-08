class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log('${this.name} is my ninja name!');
  }

  showStats() {
    console.log('Ninja stats for ${this.name}: Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}');
  }

  drinkSake() {
    this.health += 10
    console.log('Sake tastes soooooo good that health is now ${this.health}');
  }
};

let new_ninja = new Ninja("Brice");

console.log(new_ninja.name);
console.log(new_ninja);

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("")
  }
  showStats() {
    console.log('Ninja stats for ${this.name}: Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}');
  }
}

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
