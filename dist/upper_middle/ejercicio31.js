"use strict";
//Implement merge sort
const exampleArray = [85, 96, 3, 5, 69, 66, 666, 58];
function mergeSort(param) {
    if (param.length <= 1) {
        return param;
    }
    const middle = Math.floor(param.length / 2);
    const left = mergeSort(param.slice(0, middle));
    const right = mergeSort(param.slice(middle));
    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    console.log(`Result: ${result}`);
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(`Sorted Numbers: ${mergeSort(exampleArray)}`);
