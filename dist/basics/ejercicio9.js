"use strict";
// remove vowels in string
function removeVowels(data) {
    return data.replace(/[aeiou]/gi, '');
}
console.log(`The text without values is: ${removeVowels("This is a manner to remove vowels")}`);
