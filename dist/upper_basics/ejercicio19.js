"use strict";
//Generate fibonacci
function generateFibonacci(data) {
    const sequence = [0, 1];
    for (let index = 3; index < data; index++) {
        //0,1,2
        //[0,1,1]
        // 1 + 0 = 1
        // 1 + 1= 2
        sequence.push(sequence[index - 1] + sequence[index - 2]);
    }
    return sequence;
}
const limit = 15;
console.log(`Fibonacci Sequence: ${generateFibonacci(limit)}`);
