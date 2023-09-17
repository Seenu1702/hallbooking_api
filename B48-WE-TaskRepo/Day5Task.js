/*
1. Do the below programs in anonymous function & IIFE
    a. Print odd numbers in an array
    b. Convert all the strings to title caps in a string array
    c. Sum of all numbers in an array
    d. Return all the prime numbers in an array
    e. Return all the palindromes in an array
    f. Return median of two sorted arrays of the same size.
    g. Remove duplicates from an array
    h. Rotate an array by k times
2. Do the below programs in arrow functions.
    a. Print odd numbers in an array
    b. Convert all the strings to title caps in a string array
    c. Sum of all numbers in an array
    d. Return all the prime numbers in an array
    e. Return all the palindromes in an array
*/


// 1. Do the below programs in anonymous function & IIFE

/*
// a. Print odd numbers in an array --->

// Anonymous function:
let arr = [1,2,3,4,5,6,7,8,9];

let OddNum = function(arr){
    console.log(arr.filter(value => value%2==1));
}
OddNum(arr);

// IIFE:

let arr = [1,2,3,4,5,6,7,8,9];

(function(arr){
    console.log(arr.filter(value => value%2==1));
})(arr);
*/


// b. Convert all the strings to title caps in a string array --->

// Anonymous function
// const stringArray = ["hello world", "goodbye universe", "javascript is fun"];

// const titleCaseAnonymous = function(arr) {
//   return arr.map(function(str) {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       }).join(' ');
//   });
// }

// console.log(titleCaseAnonymous(stringArray));

// IIFE (Immediately Invoked Function Expression)

// const stringArray = ["hello world", "goodbye universe", "javascript is fun"];

// (function(arr) {
//   console.log (arr.map(function(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join(' ');
//   }));
// })(stringArray);


// c. Sum of all numbers in an array --->
/*
// Anonymous function:
let arr = [1,2,3,4,5,6,7,8,9];

let sumOutput = function(arr){
    console.log(arr.reduce((sum,value) =>value+sum));
}
sumOutput(arr);

// IIFE:

let arr = [1,2,3,4,5,6,7,8,9];

(function(arr){
    console.log(arr.reduce((sum,value) =>value+sum));
})(arr);

*/

/*
// d. Return all the prime numbers in an array

// Anonymous function:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbersAnonymous = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(primeNumbersAnonymous(numbers));


  
  // IIFE:
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbersIIFE = ((arr) => {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
  })(numbers);
  console.log("Prime Numbers (IIFE):", primeNumbersIIFE);
  
*/
  

/*
// e. Return all the palindromes in an array

// Anonymous function:

const array = ["racecar", "hello", "level", "world", "seenu", "refer", "madam"];

const isPalindrome = function(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };
  
  const palindromes = array.filter(function(item) {
    return isPalindrome(item);
  });
  
  console.log(palindromes);
  
 
// IIFE:
  
  const array = ["racecar", "hello", "level", "world", "seenu", "refer", "madam"];
  const palindromes = (function(arr) {
    const isPalindrome = str => {
      str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    };
    return arr.filter(item => isPalindrome(item));
  })(array);
  
  console.log(palindromes);
  
  */


  /*
//   f. Return median of two sorted arrays of the same size.

const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const findMedianSortedArrays = (function() {
    return function(nums1, nums2) {
      const mergedArray = [...nums1, ...nums2];
      mergedArray.sort((a, b) => a - b);
      const middle = Math.floor(mergedArray.length / 2);
      
      if (mergedArray.length % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
      } else {
        return mergedArray[middle];
      }
    };
  })();
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log(median);

    
*/


/*
//   g. Remove duplicates from an array

// Anonymous function:

const arr = [1, 2, 3, 1, 4, 3, 2, 5, 1];

let output = [];
const removeDuplicates = function (arr){
    
    return arr.map((value,currentIndex) =>{
        if(arr.indexOf(value) === currentIndex)
        {
            output.push(value);
        }
    });
}(arr);
removeDuplicates(arr);
console.log(output);


// IIFE:

const arr = [1, 2, 3, 1, 4, 3, 2, 5, 1];

let output = [];
(function (arr){    
    return arr.map((value,currentIndex) =>{
        if(arr.indexOf(value) === currentIndex)
        {
            output.push(value);
        }
    });
})(arr);
console.log(output);

*/


/*
//   h. Rotate an array by k times
    
// Anonymous function:
// Define the array and the number of rotations (k)
var arr = [1, 2, 3, 4, 5];
var k = 2;
const rotatedArr =function(arr) {
    // Rotate the array by k times
    for (var i = 0; i < k; i++) {
      var temp = arr.shift();
      arr.push(temp);
    }
    return arr;
  };

  console.log(rotatedArr(arr));

// IIFE: 
// Define the array and the number of rotations (k)

var arr = [1, 2, 3, 4, 5];
var k = 2;
(function() {
    // Rotate the array by k times
    for (var i = 0; i < k; i++) {
      var temp = arr.shift();
      arr.push(temp);
    }
  
    // Print the rotated array
    console.log(arr);
  })();
  
*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Do the below programs in arrow functions.

/*
// a. Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9];

let OddNum = (arr)=>{
    console.log(arr.filter(value => value%2==1));
}
OddNum(arr);

*/

/*
// b. Convert all the strings to title caps in a string array

const stringArray = ["hello world", "goodbye universe", "javascript is fun"];
const titleCaseArrow = arr => arr.map(str =>
  str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
);

console.log(titleCaseArrow(stringArray));

*/

/*
//  c. Sum of all numbers in an array

let arr = [1,2,3,4,5,6,7,8,9];

let sumOutput = (arr)=>{
    console.log(arr.reduce((sum,value) =>value+sum));
}
sumOutput(arr);
*/



/*
// d. Return all the prime numbers in an array

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  const primeNumbersArrow = ((arr) => {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
  })
  
  console.log(primeNumbersArrow(numbers));

 */

  
/*
//  e. Return all the palindromes in an array

const array = ["racecar", "hello", "level", "world", "seenu", "refer", "madam"];
  
const isPalindrome = str => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };
  

  const palindromes = array.filter(item => isPalindrome(item));
  
  console.log(palindromes);
*/

