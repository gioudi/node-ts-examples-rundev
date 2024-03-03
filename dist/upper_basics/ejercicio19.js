"use strict";
//Generate fibonacci
function generateFibonacci(data) {
    const sequence = [0, 1];
    for (let index = 2; index < data; index++) {
        sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
    return sequence;
}
const limit = 15;
console.log(`Fibonacci Sequence: ${generateFibonacci(limit)}`);
