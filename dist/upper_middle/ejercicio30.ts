//abcbaabccba

//check for palindromic in string


function checkPalindrome(param:string) {
   return param === param.split('').reverse().join('')
}


function findPalindrome(param:string) {
    const result: string[]= []

    //string(inicio, final)

    for(let start= 0; start<param.length;start++){
        for(let end= start+1; end<=param.length;end++){
            const substring = param.substring(start,end)
            //a
            if(checkPalindrome(substring) && substring.length > 1){
                result.push(substring)
            }
        }
    }

    return result
}


const exampleSubstring = 'abcbaabccba'

console.log(`Palindromic substring: ${findPalindrome(exampleSubstring)}`)



