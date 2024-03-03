"use strict";
// Get factorial of a number
function getFactorial(data) {
    if (data === 0 || data === 1) {
        return 1;
    }
    else {
        return data * getFactorial(data - 1); // Recursividad 5*4*3*2*1 = 120
    }
}
const numberFact = 5;
console.log(`Factorial of number ${numberFact} is ${getFactorial(numberFact)}`);
