"use strict";
//Check is a number is Prime
//Bigger than 1
//Can divide by himself and by one
function isPrime(data) {
    if (data <= 1)
        return false;
    for (let index = 2; index <= Math.sqrt(data); index++) {
        if (data % index === 0)
            return false;
    }
    return true;
}
console.log(`Is 15 a prime number: ${isPrime(15)}`);
console.log(`Is 17 a prime number: ${isPrime(17)}`);
