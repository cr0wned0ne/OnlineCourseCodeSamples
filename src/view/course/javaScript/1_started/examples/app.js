/**
 * Execution Context is generated in 2 Phases:
 * 1. Creation Phase: Global Object, 'this', Outer Environment & Memory Space for Variables and Functions ("Hoisting") set up and in memory.
 * 2. Execution Phase: Runs your code line by line.
 */
//##################################################
// 1. Example to see Hoisting 
//b();
//console.log(a); //<-- a is undefined
//var a = "Hello World"; //<-- remove this: error!
//
//function b() {
//	console.log('called b!');
//}
//##################################################
// 2. Example 'undefined', all variables are set to 'undefined' in hoisting phase
//var a; //<-- remove: error a is not defined. UncaughtReference
//console.log(a) //<-- logs undefined
//
//if (a === undefined) { // <-- undefined is keyword. That means this is the value initially set by javaScript.
//	console.log("a is undefined");
//} else {
//	console.log("a is defined");
//	
//}
// never set a variable to 'undefined' by yourself!
//##################################################
// 3. Example Invocation and Execution Stack:
//function a() {  //		<-- 1. Creation Phase: in memory
//	b(); //<-- 3. new Execution Context (b()) is created and placed on the execution stack.
//}
//function b() { //			<-- 1. Creation Phase: in memory
//	console.log("b");
//}
//
//a(); //					<-- 2. new Execution Context (a()) is created and placed on the execution stack.
// Every time a function is called a new execution context and 'this' is created and put on the stack.
// what is on top of the stack is executed.
//##################################################
// 4. Example Scopes & Execution Environments for variables
//function b() {
//	var myVar; // 		<-- 4. b.myVar = undefined;
//	console.log(myVar);
//}
//function a() {
//	var myVar = 2; //	<-- 3. a.myVar = 2;
//	console.log(myVar);
//	b();
//}
//var myVar = 1; //		<-- 1. Executed first global.myVar = 1
//console.log(myVar);
//a(); //				<-- 2. new Execution Context a()
//console.log(myVar);
//##################################################
// 5. Example Outer Environment, Lexical Environment & Scope Chains
////function b() { //			<--3. Lexical Environment! b sits on Global Context! Outer Environment = Global!
////	console.log(myVar); // 	<--1. logs 1! Value of the global execution context.
////}
////function a() {  // 			<--2.  Outer Environment = Global!
////	var myVar = 2;
////	b();
////}
////var myVar = 1;
////a();
// EXAMPLE 2:
//function a() {  // 			<--5. Outer Environment = Global!
//	var myVar = 2;
//	function b() { //			<--6. Lexical Environment! b sits on a! Outer Environment = a!
//		console.log(myVar); //	<--4. logs 2! Value of the a execution context.
//	}
//	b();
//}
//var myVar = 1;
//a();
//b() 							<--7. Can no longer be called here!
// function b is created in create phase of a!! not global! (better explanation than lexical environment).
//##################################################
// 6. Example Asynchronous and Event Queue
function waitThreeSeconds() {
	var ms= 3000 + new Date().getTime();
	while (new Date() < ms) {}
	console.log('finished function');
	
}

function clickHandler() {
	console.log("click event!");
}

document.addEventListener("click", clickHandler);
waitThreeSeconds(); // <-- When clicking during the 3 secs, the event is still processed afterwards!
console.log("finished execution!");
