// Check if number is even or odd


function checkNumber(data:number){
    return data % 2 === 0 ? 'even' : 'odd'
}

const resultCheck = checkNumber(5)
const resultCheck2 = checkNumber(4)

console.log(`The number is: ${resultCheck}`)
console.log(`The number is: ${resultCheck2}`)