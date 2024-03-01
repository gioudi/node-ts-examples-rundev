"use strict";
// Get sum of array of numbers
const numbers = [1, 2, 3, 4, 5]; //15
function sumArray(arr) {
    return arr.reduce((res, val) => res + val, 0);
}
const resultArray = sumArray(numbers);
console.log(`The sum of the array is: ${resultArray}`);
