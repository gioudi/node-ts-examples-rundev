const nestedArray = [1,2,3,[1,5,6,3],[1,2,3,4]]

//Array of on dimension Flatten


function flattenArray(param:any[]): any[] {
    //[1,2,3,1,5,6,3,1,2,3,4]

    return param.reduce((acc, val)=> acc.concat(Array.isArray(val) ? flattenArray(val) : val)  
    ,[])
}


console.log(`Flattened Array: ${flattenArray(nestedArray)}`)


