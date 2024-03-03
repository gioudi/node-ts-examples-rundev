"use strict";
// [1,2,3,4,5] -> [5,4,3,2,1]
function reverseArray(data) {
    return data.reverse();
}
const normalArray = [9, 8, 7, 6, 5, 4];
console.log(`Reversed array: ${reverseArray(normalArray)}`);
