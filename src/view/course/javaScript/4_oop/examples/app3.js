/**
 * Odds and ends
 */
//##############################################
//Initialization
var people = [
              {
            	  firstname:"John",
            	  lastname:"Doe",
            	  addresses: [
            	              "11 main str.",
            	              "22 second str."
            	              ]
            	  
              },
              {
            	  firstname:"Mary",
            	  lastname:"Doe",
            	  addresses: [
            	              "333 Third str."
            	              ],
            	   greet: function() {
            		   return "Hi!";
            	   }
            	  
              }
              
              
             ]
// this look odd, but is ok for test data etc.
//##############################################
//typeof and instanceof
var a = 3;
console.log(typeof a);

var b = "String";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird
console.log(Object.prototype.toString.call(d)); // better

function Person(name) {
	this.name = name;
}

var e = new Person("Mona");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null); // a bug

var z = function() {};
console.log(typeof z);
//###########################################
function logNewPerson(){
	"use strict"; //<-- has to be on top of the file or function
	var person2;
	persom2 = {};//<-- typo!
	console.log(persom2);// <-- doesnt work because of strict
	
}
var per;

pers = {}; //<-- typo!
console.log(pers); // <-- works, created empty object on global object

logNewPerson();
