"use strict";
//Find union of two arrays
//Class Set can created a new set
//Spread operator[...]
const setArray1 = [1, 2, 3, 4, 5];
const setArray2 = [3, 4, 5, 6, 7];
function findUnion(param1, param2) {
    const set = new Set([...param1, ...param2]);
    console.log(set);
    return [...set];
}
console.log(`Union: ${findUnion(setArray1, setArray2)}`);
