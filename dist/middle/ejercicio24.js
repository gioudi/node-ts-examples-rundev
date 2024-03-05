"use strict";
// Bubble sort 
const bubbleArray = [8, 6, 9, 63, 4, 7, 86];
function sortedBubble(param) {
    //reduce((a,b)=> a-b)
    for (let index = 0; index < param.length - 1; index++) {
        for (let index2 = 0; index2 < param.length - 1 - index; index2++) {
            if (param[index2] > param[index2 + 1]) {
                let temp = param[index2];
                param[index2] = param[index2 + 1];
                param[index2 + 1] = temp;
            }
        }
    }
    return param;
}
console.log(`Sorted Array by bubble method: ${sortedBubble(bubbleArray)}`);
