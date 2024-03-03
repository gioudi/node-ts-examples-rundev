// Find second largest  number in array


const arrayNumbers = [8,5,9,6];


function findSecondLargestNumber(data: number[]){
    //[5,6,8,9]

    const sortedArray = data.sort((a,b)=> b-a);
    //<0 less a before b
    //0 not change
    //>0 b before a

    return sortedArray[1]

}


console.log(`The second largest number is: ${findSecondLargestNumber(arrayNumbers)}`)

