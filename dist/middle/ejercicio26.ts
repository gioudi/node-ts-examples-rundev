 //Calculate factorial of number using recursion

// !4 = 4*3*2*1 = 24

function calculateFactorial(data: number):number {
  return data <= 1 ? 1 : data * calculateFactorial(data - 1)
}


console.log(`Factorial of 4 is: ${calculateFactorial(4)}`)