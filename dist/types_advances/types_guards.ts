//Type Guards

//Functions that return a boolean

//Safe, maintainable

//Checking if value is a string

function isString(value: any): value is string {
   return typeof value === 'string'
}

const str = "Rice"

if(isString(str)){
    console.log(str.toLowerCase);
}


// For checking if value is array

function isArray(value: any): value is number[] {
   return Array.isArray(value);
}

const arr = [1,2,3,4]

if(isArray(arr)){
    console.log('true')
}