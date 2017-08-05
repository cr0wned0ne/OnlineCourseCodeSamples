/**
 * Comparison
 */
//##################################################
//1.  Comparison stuff
console.log(3 < 2 < 1); //	<-- (false < 1) and false becomes 0 (check in console: Number(false))

console.log(3 == 3); //		<-- true
console.log("3" == 3); //	<-- true

console.log(false == 0) //	<-- true
var a = false;
console.log(a == 0) // 		<-- true
console.log(null == 0)//	<-- false not conheres to 0
console.log(null < 1) //	<-- true conheres to 0

console.log(false === 0)//	<-- false
//##################################################
//2. Default values
function greet(name) {
	name = name || "Default name"; //<-- Set default value
	console.log("hello " + name);
}
greet("Tony");
greet();
greet(0); //<-- converts to false too, so default value is used.
//##################################################
//3. Default values and Frameworks
// see lib1.js and lib2.js
console.log(libraryName);
console.log(lib3.libraryName);