/**
 * Objects
 */
//##################################################
var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var propertyFirstName = "firstname";

console.log(person);
console.log(person[propertyFirstName]);

console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";

var man = {	firstname: "Bob",
			lastname: "Hook",
			address: {
				street : "Main st.",
				city: "New York"
			}
};
function greet(person) {
	console.log("Hi "+ person.firstname);
}

greet(man);
greet({firstname:'Mary'});
//##################################################
// Namespaces
var greeting ="Hello!";
var greeting = "Hola!"; //<-- Overwrites!

console.log(greeting);
//define namespace to capsule.
var english = {greeting:"hello!"};
var spanish = {greeting:"hola!"};
console.log(english.greeting);
//##################################################
//JSON
var objectLiteral = {firstname:'mary', isMale: false};

console.log(JSON.stringify(objectLiteral));

var jsonObj = JSON.parse('{"firstname" : "Tom", "isMale" : true}');
console.log(jsonObj);
//##################################################
// Functions are Objects
// a function is a object that has variables, attributes, other functions a name property and an attribute "code" that can be invoked.
function greet() {
	if(this.language === 'english') {
		console.log("hi");
	} else {
		console.log("Ahoi");
	}
}
greet.language = 'english';
console.log(greet());

//##################################################
// Expressions (unit of code that resolves to a value)
// & Statements ( just does work, doesn't return a value (if-statements))
greetSome() //						<-- works! statement functions are hoisted
function greetSome() { //			<-- this is a statement: functions name is greetSome
	console.log("Some Greetings!");
}
greetSome(); //						<-- invoke with name

//greetFrench() //					<-- does not work: greetFrench is undefined. hoisting sets variables to undefined.
var greetFrench = function() { //	<-- this is an expression: anonymous function: no name!
	console.log("Bonjour!");
}
greetFrench() //					<-- invoke with variable

function log(a) {
	a();
}
log(function() {console.log("test-function logging!");});
//##################################################
// by value or by reference?
// primitives = value (copying)
var a =3, b;
b = a;
a = 2;
console.log(a);
console.log(b);
// objects = references!
var c = {name: "Tom"};
var d;
d = c;
c.name = "Helga"; //<-- mutate (big word "change something") immutable = not changeable.
console.log(d.name);
// even as parameters:
function changeName(obj) {
	obj.name = "Horst";
}
changeName(d);
console.log(c);
//##################################################
//Understanding "this"
console.log(this); //		<-- Global window
function fun() {
	console.log(this); //	<-- Also the global window
	this.newVar = "New!"; //<-- Attached to global object!
}
fun();
console.log(newVar);

var funVar = function() {
	console.log(this); //	<-- Also the global window
}
funVar();
// Lexical environment?
// this in a function refers to the object that contains that function! Not working for functions objects!
var ooo = {
		name: "The ooo Object",
		sayName: function() { 
			this.name = "Updated";
			console.log("I'am " + this.name)
			var setName = function(newname) {
				this.name = newname;  // <-- Gets attached to the global object!
			}
			setName("updated again! No Longer C Object");
			console.log(this);
		}		
}
ooo.sayName();
// Pattern to fix this:
var ppp = {
		name: "The ppp Object",
		sayName: function() { 
			var self = this;  //<-- reference!
			self.name = "Updated";
			console.log("I'am " + self.name)
			var setName = function(newname) {
				self.name = newname;  // <-- Gets attached to the outer object!
			}
			setName("updated again! No Longer C Object");
			console.log(self);
		}		
}
ppp.sayName();
//##################################################
// Arrays
var arr = [1,
           false,
           {
				name:"Olga"
           },
           function(name) {
        	   var greeting = "Hello";
        	   console.log(greeting + " " + name);
           }, 
           "hello"
           ];
console.log(arr);
arr[3](arr[2].name);
//##################################################
// Arguments:
// are created when Execution Context is created for a function
// Arguments are hoisted too!!

function greetingFunction(firstname, lastname, language) {
	if (arguments.length === 0) {
		console.log("Missing Parameters!")
		return;
	}
	language = language || "en";
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log("----------");
}

greetingFunction(); //<-- all undefined.
greetingFunction("John");
greetingFunction("John", "Doe");
greetingFunction("John", "Doe", "de");

//##################################################
//Immediately Invoked Function Expressions (IIFE)

var greetingText = function(name) {
	return "Aloha " + name;
	
}('John'); //<-- IIFE
console.log(greetingText);

// this is valid code, that does nothing
3;
"I just sit here, valid!";
// functions in (). 
(function(name) {
	console.log("howdy " + name);
})("Johnny")