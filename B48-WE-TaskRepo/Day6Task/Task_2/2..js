/* Question
Write a code to print the numbers in the array

Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string);
*/




//Correct code
let numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_Array = [];
let new_string = "";
 
for (let i = 0; i < 11; i++) {
 new_Array.push(numsArr[i]);
}
new_string += new_Array.join(',')
console.log(new_string);

//Output: 1,2,3,4,5,6,7,8,9,10,11