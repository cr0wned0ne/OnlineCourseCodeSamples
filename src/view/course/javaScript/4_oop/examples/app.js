/**
 * Prototyping
 */
//##############################################
// all objects have a property called proto{}
var person = {
		lastname: "default",
		getFullName: function() {
			return this.firstname + " " + this.lastname;
		}
		
}

var john = {
		firstname: "John",
		lastname: "Doe"
}
// do not do this EVER! It is so slow, just for demo!
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
		firstname:"Jane"
}
jane.__proto__ = person;

console.log(jane.getFullName());
//##############################################
// Everything is an object (or a primitive)
var a = {};
var b = function() {};
var c = [];

console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);
//##############################################
// Reflection
for (var prop in john) {
	// log even the prototypes properties
	console.log(prop + ":" + john[prop]);
	
	// log just johns properties
	if (john.hasOwnProperty(prop)) {
		console.log("-_-_-_-_-_")
		console.log(prop + ":" + john[prop]);
		console.log("-_-_-_-_-_")
	}
}

var jade = {
		address: "111 Main st.",
		getFormalFullName: function() {
			return this.lastname + ", " + this.firstname;
		}
}

var jim = {
		getFirstName: function()  {
			return firstname;
		}
}

_.extend(john, jade, jim);
console.log(john);
