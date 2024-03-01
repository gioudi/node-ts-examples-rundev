"use strict";
// Get average from array of number
function getAverage(data) {
    const resultArray = data.reduce((result, val) => result + val, 0);
    return resultArray / data.length;
}
const averageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultAverage = getAverage(averageArray);
console.log(`Average is: ${resultAverage}`);
