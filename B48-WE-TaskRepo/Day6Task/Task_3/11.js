/* Question
Fix the code to remove duplicates.

Code:

var res = function(arr){
 for(var i=0; i < arr.length; i++){
 newArr = [];
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])
*/


//Correct code
let res = function (arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {

            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);


