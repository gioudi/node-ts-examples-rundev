//Show reverse string off


function reverseString(data: string){
    // Hello, there ['Hello', 'there']
    return data.split('').reverse().join('')
}

const reverseResult = reverseString("Hello, there")

console.log(`Reversed text ${reverseResult}`)