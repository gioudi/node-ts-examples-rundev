//Implement binary search
//number in side an array


const target = 5;
const targetNumber = [1,2,5,6,9];//0,1,2

function binarySearch(data: number[], target: number){
    let left = 0;
    let right = data.length -1;

    while(left <= right){
        const middle = Math.floor((left+right)/2);
        if(data[middle] === target) return middle
        if(data[middle] < target) left= middle+1
        else right = middle - 1
    }

    return -1
}

console.log(`Index of ${target}: ${binarySearch(targetNumber, target)}`)