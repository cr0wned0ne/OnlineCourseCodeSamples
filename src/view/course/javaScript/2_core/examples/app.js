/**
 * Types and Operations.
 */
//##################################################
// 1. Six Primitive types  - everything that is not an object
var undef = undefined; // 	<-- initial value for engine (do not set by yourself).
var nill = null; //			<-- use this to set something to 'undefined'
var bool = true; // 		<-- or false
var number = 42; // 		<-- floating point
var string = "Hello" // 	<-- '' oder ""
//var symbol 		<-- Used in ES6 (is coming)
//##################################################
// 2. Associativity
var a = 3, b= 4, c = 5;
a = b = c;
console.log(a);
console.log(b);
console.log(c);// <-- all are 5 because '=' is left-to-right!
//##################################################
// 3. Coercion
 var a = 1 + '2';
 console.log(a);
//##################################################

 