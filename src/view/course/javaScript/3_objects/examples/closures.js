/**
 *  Closures.
 */
//##############################################
function greet(whattosay) {
	
	return function(name) {
		console.log(whattosay + " " +name);
	}
}

var sayHi = greet("Hi");
sayHi("Bob");

//##############################################
function buildFunctions() { 
	var arr = [];
	
	for (var i =0; i<3; i++) { //<-- i is called free-variable
		arr.push(
				function() { //<-- all 3 functions are nested within context of buildFunctions and can access its variables.
					console.log(i); // the functions are not being called here.
				});
	}
	return arr;
}

var fs = buildFunctions();

fs[0](); // <-- here they are called and print the value of i to this point of time!
fs[1]();
fs[2](); // <-- all log 3. 

// MAKE IT WORK:
function buildFunctions2() { 
	var arr = [];
	
	for (var i =0; i<3; i++) { 
//		let j = i; //<--- with ES6
		arr.push(
				(function(j) { //<-- create a new execution context to store j with current value of i!
					return function() {
						console.log(j);
					}
				}(i))
				);
	}
	return arr;
}

var fs2 = buildFunctions2();

fs2[0](); 
fs2[1]();
fs2[2](); 
//##############################################
// Framework aside: Function Factories:

function makeGreeting(language){ //<-- language is trapped in a closure
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log("Hi " + firstname + " " + lastname);
		}
		if (language === 'es') {
			console.log("Hola " + firstname + " " + lastname);
		}
	}
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Bean");
greetSpanish("Jèsus", "Labara");

//##############################################
// Closures and Callbacks
function sayHiLater() {
	var greeting ="Oh...Hi!";
	setTimeout(function() { //<-- Using callback
		console.log(greeting); // <-- Using closure
	}, 3000)
}
sayHiLater();

//Jquery uses function expressions and first-class-functions 
//$("button").click(function() {});

function tellMeWhenDone(callback) {
	var a = 1000;
	var b = 2000; // just do some work;
	callback();
}
tellMeWhenDone(function() {console.log("done!")});
tellMeWhenDone(function() {console.log("All done..")});

//##############################################
// call() apply() bind()
//Methods of functions.
var person = {
		firstname: "John",
		lastname: "Doe",
		getFullName: function() {
			var fullname = this.firstname + " " + this.lastname;
			return fullname;
		}	
}

var person2 = {
		firstname: "Mary",
		lastname: "May",
		getFullName: function() {
			var fullname = this.firstname + " " + this.lastname;
			return fullname;
		}	
}

var logName = function(lang1, lang2) {
	console.log("logged: " + this.getFullName());
	console.log("Arguments: " + lang1 + " " + lang2)
	console.log("---------------------------")
}
// or:
var logPersonName = logName.bind(person); //<-- copy function and bind object to 'this'
logPersonName();

// or
logName.call(person2, "en", "es"); //<-- also binds param to this, + normal params
// or
logName.apply(person, ["de", "tr"]); //<-- same like call() but params as array
//##############################################
// function borrowing
var person3 = {
		firstname: "Kid",
		lastname: "Rock"	
}
console.log(person.getFullName.apply(person3));
//##############################################
//function currying
function multiply(a, b) {
	return a* b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
