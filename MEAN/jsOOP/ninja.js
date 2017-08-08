var Ninja = function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.showStats = function() {
    console.log("Ninja stats for " + this.name + " are the following - Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
  }

  this.kick = function(ninja) {
    var damage = strength * 5;
    ninja.health -= damage
    console.log(ninja.name + " was kicked by " + this.name + " and suffered " + damage + " damage!")
    return this;
  }

  this.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!")
    return this;
  }
};

Ninja.prototype.sayName = function(){
  console.log("Greetings! My ninja name is " + this.name + ".");
  return this;
};

Ninja.prototype.drinkSake = function (){
  this.health += 10;
  return this;
};

var new_ninja = new Ninja("Brice");

var red_ninja = new Ninja("pokemon");
var blue_ninja = new Ninja("papaSmurf");

new_ninja.sayName();
new_ninja.showStats();

red_ninja.punch(blue_ninja).punch(blue_ninja);

blue_ninja.kick(red_ninja);

blue_ninja.drinkSake();

red_ninja.showStats();
blue_ninja.showStats();
