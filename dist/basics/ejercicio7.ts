// Get longest string in Array


const stringsExample = ['flower','apple', 'polluted','amazing']

function getLongestString(data: string[]){
   return data.reduce((longest, val)=> (val.length > longest.length ? val : longest),'')
}


console.log(`The longest text is: ${getLongestString(stringsExample)}`)