// function:

// function add(a,b){
//     return a+b;
//     // console.log("this portion will not be executed after the return keyword")
// }
// console.log(add(2,3));

// another method without using return mehtod
// function add(a,b){
//     console.log(a+b);
// }
// add(2,3); 
// return value will be undefined
// it will not return anything just display/pprint the result inside the function

// Write a function to print odd inside the array
// array[12,13,14,15];

// var arr = [12,13,14,15];
// function isOdd(arr){
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!==0)
//         {
//             console.log(arr[i]);
//         }
//     }
// }
// isOdd(arr);  
// O/p:
// 13 
// 15

// var arr = [12,13,14,15];
// function isOdd(arr){
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!==0)
//         {
//             return arr[i];
//         }
//     }
// }
// console.log(isOdd(arr));
// o/p:
// 13
// it will return the first result which matches the condition and end/come out of the loop instead we can use arrow funtion or MRF method to iterate the arrays

// var arr = [12,13,14,15];
// var odd = [];
// function isOdd(arr){
//     for(var i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!==0)
//         {
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }
// console.log(isOdd(arr));
// O/p:
// [13,15]


// var arr = [12,13,14,15];
// var odd = [];
// function isOdd(arr){
//     arr.map((value) =>
//     {
//         if(value%2!==0)
//         {
//             odd.push(value);
//         }
//     });
//     return odd;
// }
// console.log(isOdd(arr));
// [13,15]


// var arr = [12,13,14,15];
// var odd = [];
// function isOdd(arr){
//     const result = arr.filter((value) =>
//     {
//         if(value%2!==0)
//         {
//             return odd.push(value);
//         }
//     });
//     console.log(result);
// }
// isOdd(arr);
// O/P:
// [13,15]
// undefined (this is for function calling) since its not returning any values


// var arr = [12,13,14,15];
// var odd = [];

// function isOdd(arr){
//     const result = arr.filter((value) =>
//     {
//         if(value%2!==0)
//         {
//             return odd.push(value);
//         }
//     });
//     return result;
// }
// console.log(isOdd(arr));
// O/P
// [13,15]

// Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 
// 'n' elements of the array

// Test cases: 
// i/p foo([0,1,2,3,4])
// o/p: 0

// i/p foo([0,1,2,3,4],-3)
// o/p: []

// i/p foo([0,1,2,3,4],3)
// o/p: [0,1,2]

// i/p foo([0,1,2,3,4],6)
// o/p: [0,1,2,3,4]


// function foo(arr,n){
//     if(n===undefined){
//         return arr[0];
//     }
//     if(n<0)
//     {
//         return [];
//     }
//     return arr.slice(0,n);

// }
// console.log(); any testcases above the code



// Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the last 
// 'n' elements of the array
// Testcases:
// i/p last([0,1,3,-4])
// o/p: -4

// i/p last([0,1,3,-4],3)
// o/p: [1,3,-4]

// i/p last([0,1,3,-4],6)
// o/p: [0,1,3,-4]

// function last(arr,n){
//     if(n===undefined){
//         return arr[arr.length-1];
//         or 
//         return arr.slice(-1);
//     }
//     return arr.slice(-n);
// }
// console.log(last([0,1,3,-4],3));



// codekata doubt session
// find the count of the prime numbers in the range

let left = 2;
let right =6;
let count = 0;

function isPrime(number){
  let isPrime = true;
    for(let i=2;i<number;i++)
    {
        if(number % i ===0)
        {
          isPrime = false;
          break;
        }
    }
    return isPrime;
}

for(let i=left;i<=right;i++)
{
    if(isPrime(i))
    {
        count++;
    }
}
console.log(count);


// We can use this function for any individual number for finding whether its prime or not
function isPrime(number){
    let isPrime = true;
      for(let i=2;i<number;i++)
      {
          if(number % i ===0)
          {
            isPrime = false;
            break;
          }
      }
      return isPrime;
  }

  console.log(isPrime(anynumber));





