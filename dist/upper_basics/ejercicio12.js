"use strict";
// Get largest number in array
const numbersExample = [5, 20, 58, 25];
function findLargestNum(data) {
    return Math.max(...data); //58
}
console.log(`The largest number in array is ${findLargestNum(numbersExample)}`);
