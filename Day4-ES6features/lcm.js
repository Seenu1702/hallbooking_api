let values = [1, 2, 3, 4, 5, 6, 7];

// 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, ...., 60

function isDivisible(greatestValue, values) {
    for (let value of values) {
        if (greatestValue % value != 0) return false;
    }
    return true;
}

function findLCM(values) {
    // find the greatest value
    let greatestValue = Math.max(...values);

    // iterate from the maximum value
    while (true) {
        if (isDivisible(greatestValue, values)) return greatestValue;
        greatestValue++;
    }
}


console.log(findLCM(values));



// return prime numbers in an array 
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };
  
  // Sample array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Anonymous Function
  const primeNumbersAnonymous = function(arr) {
    return arr.filter(isPrime);
  }(numbers);
  console.log("Prime Numbers (Anonymous Function):", primeNumbersAnonymous);