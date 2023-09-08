// Getting input via STDIN
const readline = require("readline");
const { fileURLToPath } = require("url");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    let [length, breadth] = userInput[0].split(' ').map(value => parseFloat(value));

    // console.log((length * breadth).toFixed(5));

    console.log(Math.floor(length * breadth*100000)/100000);
    
    // console.log(userInput[0].split(' ').map(value => parseFloat(value)));
  //end-here
});

// input will be in the b48.txt file
// for getting the value/input from b48.txt to terminal for b48.js

// cd particular foldername
// cat b48.txt | node b48.js