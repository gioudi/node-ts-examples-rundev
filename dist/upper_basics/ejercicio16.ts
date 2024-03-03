//Check is a string palindrome

function isPalindrome(data:string){
    //hola //aloh //radar //radar

   return data === data.split('').reverse().join('');
}


console.log(`Is racecar palindrome: ${isPalindrome('racecar')}`)
console.log(`Is sabanas palindrome: ${isPalindrome('sabanas')}`)