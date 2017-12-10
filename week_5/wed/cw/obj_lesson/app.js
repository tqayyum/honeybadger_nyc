console.log('loaded');

// make an object called mustang with the following attributes
// color
// class set to muscle
// horsepower

const mustang = {
	color: 'red',
	class: 'muscle',
	horsepower: 435,
}
// make an object called toyota with the following attributes
// color
// class set to sport
// horsepower

const toyota = {
	color: 'gray',
 	class: 'sport',
	horsepower: 320,
}
// make an object called gallardo with the following attributes
// color
// class set to exotic
// horsepower
const gallardo = {
	color: 'purple',
	muscle: 'exotic',
	horsepower: 5,
}

const appartmentBuilding = {
	floors: 3,
	firstFlr: 'lobby',
	address2Fl: ['2A', '2B', '2C'],
	address3Fl: ['3A', '3B', '3C'],
	Apt2A: 'studio',
	Apt2B: '2 Bedrooms'
}

// MODEL A LAMP

// the lamp should have the following attributes: 

// wattage - a number
// on - a boolean

// the lamp should have the following behaviors

// turnOff - should set the on attribute to false
// turnOn - should set the on attribute to true
// status - should let the owner know if the light is on or off

const lamp = {
	wattage: 250,
	turnOn: false,
	turnOff: function(){
		this.turnOn = true;
	},
	
	status: function (){
		if (this.turnOn) {
			console.log('The light is on');
		} else {
			console.log('The light is off');
		}
	},
}

// MODEL A POKEMON 

// ATTR

// number - num
// name - str
// type - str
// moves - array
// hp - num starting at 100

// behaviors 

// takeDamage - should decrease hp by 10
// visitPokeCenter - restores hp to 100
// isFainted - return true if hp is less than or equal to 0
//           - return false if hp is greater than 0

const pokemon = {
	number: 006,
	name: 'charizard',
	type: 'fire',
	moves: [ 'Air Slash', 'Flare Blitz', 'Heat Wave', 'Dragon Claw'],
	hp: 100,
	takeDamage: function(){
		this.hp=10;
		if (this.hp < 0){
			this.hp = 0;
		}
	},
	visitPokeCenter: function(){
		this.hp=100;
	},
	isFainted: function(){
		return this <= 0;
	}

}

// MAKE A POKEMON FACTORY USING THE SAME ATTRIBUTES AND BEHAVIORS FROM BEFORE

function PFactor(number, name, type, moves, hp) {
	this.number = number;
	this.name = name;
	this.type = type;
	this.moves = moves;
	this.hp = hp;
}
/*
PFactor.protoType.takeDamage = function(hp) {
	this.hp=10;
		if (this.hp < 0){
			this.hp = 0;
		}
}

PFactor.protoType.visitPokeCenter = function(){
	this.hp=100;
}

PFactor.protoType.isFainted = function(){
	return this.hp <=0;
}
*/
// MAKE A MINION FACTORY 

// attr 

// name
// numberOfEyes
// color

// behavior

// eatBanana
// performEvilTask
// changeNumberOfEyes
// changeColors































