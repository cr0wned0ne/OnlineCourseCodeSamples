/**
 * Underscore.
 */

var arr1 = [1,2,3];
var arr2 = _.map(arr1, function(item) { return item *3});
console.log(arr2);

var arr3 = _.filter([2,4,5,6,7,8,9,0], function(item) {return item % 2 === 0});
console.log(arr3);