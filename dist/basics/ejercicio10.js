"use strict";
// Get factorial of a number
function getFactorial(data) {
    if (data === 0 || data === 1) {
        return 1;
    }
    else {
        return data * getFactorial(data - 1);
    }
}
const numberFact = 5;
console.log(`Factorial of number ${numberFact} is ${getFactorial(numberFact)}`);
