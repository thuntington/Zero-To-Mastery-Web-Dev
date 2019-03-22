//reference type 
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2 
//> true 

object1 === object3
//> false 

object.value = 15;

object2.value;
// > 15 

object3.value;
// > 10


//context vs scope 

//scope is created by adding {}, creating a new scope. 
//this refers to whatever object you are in 

const object4 = {
    a:function() {
        console.log(this);
    }
}



// instantiation

//when you make a copy of an object and reuse the code. 
// MP online game for example, different objects e.g wizards, humans etc. 
// making multiple copies of an object

// when you want to make a copy of an object use class.
class Player {
    constructor(name, type) {   //constructor: everytime im making a copy of a player the first thing that gets run is the constructor function, which creates these properties on the player object (name and type)
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type) // whenever you extend a class you use super so that you have access to the Player properties
    }
    play() {
        console.log(`Let's play, I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Gandalf', 'Healer');
const wizard2 = new Wizard('Sauruman', 'Dark Mage');

wizard1.introduce();

wizard2.play()


// OLD WAY OF DOING THE ABOVE : Classical Inheritance 

var Player = function(name, type) {
    this.name = name;
    this.type = type;
}
Player.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Jon', 'Dark Mage');

wizard1.play = function() {
    console.log(`Let's play, I'm a ${this.type}`)
}

wizard2.play = function() {
    console.log(`Let's play, I'm a ${this.type}`)
}