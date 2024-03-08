/* [1,2,3]  Return power set of set*/
//[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


function powerSet(param:any[]) {
  const result: any[][]=[[]];
  
  param.forEach((elem)=>{
    const newSubsets = result.map((subset)=> subset.concat(elem))
    console.log(newSubsets)
    result.push(...newSubsets)
  })

  return result
}

console.log(`Power set: ${powerSet([1,2,3])}`)


