// Types more flexible

//Union of string and number types

type NumberOrStringType = number | string;

const value1:NumberOrStringType = 1
const value2:NumberOrStringType = 'rice'

// Union of array types

type NumberArrayOrStringArray = number[] | string[];

const array1:NumberArrayOrStringArray = [1,2,3,5];
const array2:NumberArrayOrStringArray = ['a'];


// Union of object types

type Cat = {name: string, purrs:boolean};
type Snail = {name:string, slice: boolean};

type CatOrSnail = Cat | Snail 

const pet1: CatOrSnail = {name: 'patitas', purrs: true}