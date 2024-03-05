"use strict";
//Find intersection of two arrays
const data1 = [4, 5, 6, 8, 9];
const data2 = [8, 5, 6, 2, 3];
function findIntersection(data1, data2) {
    return data1.filter((elem) => data2.includes(elem));
}
console.log(`Intersection: ${findIntersection(data1, data2)}`);
