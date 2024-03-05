"use strict";
//Check anagram
const text1 = "roma";
const text2 = "amor";
function findAnagram(param1, param2) {
    //["r","o","m","a"]
    const sortedText1 = param1.split('').sort().join(''); //["r","o","m","a"]
    const sortedText2 = param2.split('').sort().join(''); //["r","o","m","a"]
    return sortedText1 === sortedText2;
}
console.log(`Are ${text1} and ${text2} an anagram? ${findAnagram(text1, text2)}`);
