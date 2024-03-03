"use strict";
//Count occurrences inside a string
function countOccurrences(data1, data2) {
    //Hello world
    //["Hell", "wrld"]
    // 0,1,2
    return data1.split(data2).length - 1;
}
console.log(`Ocurrences: ${countOccurrences("Hola que tal", "a ")}`);
