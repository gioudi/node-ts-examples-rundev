"use strict";
//Find median of an array
const medianArray = [1, 5, 6, 38, 8];
function findMedian(param) {
    //0 not change
    //<0 a before b
    //>0 b before a
    const sortedArray = param.sort((a, b) => a - b);
    const middle = Math.floor(sortedArray.length / 2); //2
    return sortedArray.length % 2 === 0 ? (sortedArray[middle - 1] + sortedArray[middle]) / 2 : sortedArray[middle];
}
console.log(`Median: ${findMedian(medianArray)}`);
