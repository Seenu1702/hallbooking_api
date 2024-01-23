// rest operator --> it'll be used in arguments of the function
// ...

// function add(x, y) {
//     return x+y;
// }
// console.log(add(5, 6));
// console.log(add(5, 6, 7)); rest values will be truncated
// console.log(add(5, 6, 7, 8, 9));  rest values will be truncated


// function add(...args) {
//     return args;
// }

// console.log(add(5, 6, 7));


// function add(...args) {
//     console.log(args.reduce((sum,value)=> sum = sum + value));
// }
// add(5, 6, 7);  o/p: 18

// in destructuring also rest operators will be used