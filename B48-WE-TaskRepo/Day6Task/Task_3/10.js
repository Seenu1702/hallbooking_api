/* Question
Fix the code to reverse.

Code:

(function(str){
 str1 = str.split(“ “).reverse().join(“”);
 console.log(str1); 
})(“abcd”)
*/



//Correct code
(function(str){
    let str1 = str.split("").reverse().join("");
    console.log(str1);
   })("abcd")