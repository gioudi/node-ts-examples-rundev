//Generate random number


function generateNumbers(count: number, min: number, max:number) {
   const randomNumbers = []
   for(let index= 0; index < count; index++){
    randomNumbers.push(Math.floor(Math.random()*(max-min+1))+min)
   }
   return randomNumbers;
}


console.log(`Random numbers: ${generateNumbers(5,1,10)}`)


