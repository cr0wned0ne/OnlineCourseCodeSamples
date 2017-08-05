/**
 * Building Objects
 */
//##############################################
// Function Constructor
function Person(firstname, lastname) {
	console.log(this) //<-- empty object
	this.firstname = firstname;
	this.lastname = lastname;
	console.log("Person() is invoked")
	//<-- Dont add functions in the constructor, they take up memory space - add it to the prototype!!
}

//all objects have prototypes, functions are objects, if "new" is used with a function as constructor, the protoype is set to the object that is created with it.
Person.prototype.getFullname = function() {
	return this.firstname + " " + this.lastname;
};


var john = new Person("John", "Doe"); // <-- new creates empty Object and invokes function Person(), in this case "this" is set to previously generated empty Object and returns it (if Person() has no return value).
console.log(john);

Person.prototype.getFormalFullname = function() {
	return this.firstname + ", " + this.lastname;
};

console.log(john.getFormalFullname());
//##############################################
//Dangerouse Aside: new and functions
var mary = Person("Mary", "Doe"); //<-- forget "new" mary is undefined.
//##############################################
//Build in Constructors
String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}
console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
	return this >0;
}
//2.isPositive(); // does not work!

var x = new Number();
console.log(x.isPositive());
//##############################################
//Dangerouse Aside: Build in Constructors
var a = 3;
var b = new Number(3);
console.log(a == b) //<-- true
console.log(a === b) // <-- false

//example for Dates: use moments.js!!

//##############################################
//Dangerouse Aside: Arrays and for..in
//for example if a framework adds feature to array
Array.prototype.myCustomFeature = "cooool!";

var nameArr = ["John", "Jane", "Jim"];
for (var prop in nameArr) {
	console.log(prop + ":" + nameArr[prop]);
}
//array are objects!
// dont use for..in with arrays, use i loops.
//##############################################
// Object.create - Pure Prototypal Inheritance in newer browsers
var pig = {
		firstname:'default',
		oink: function() {
			return "Oink " + this.firstname + " !";
		}
}

var piglet = Object.create(pig);
piglet.firstname = "Piggy";
console.log(piglet.oink());
console.log(piglet);

// old browsers - use polyfill:
if (!Object.create) {
	Object.create = function(o) {
		if (arguments.length > 1) {
			throw new Error("Object.create implementation only accepts the first parameter.");
		}
		function F() {};
		f.prototype = o;
		return new F();
	};
}

