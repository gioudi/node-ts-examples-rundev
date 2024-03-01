// remove vowels in string


function removeVowels(data:string){
    return data.replace(/[aeiou]/gi,'')
}


console.log(`The text without values is: ${removeVowels("This is a manner to remove vowels")}`)