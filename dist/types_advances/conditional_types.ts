//CONDITION ? YES : NO


type isString<T> = T extends string ? "Yes" : "No"


type Test1 = isString<string>  // "Yes"
type Test2 = isString<number> // "No"


type isArray<T> = T extends Array<any> ? "Yes" : "No"

type TestArray = isArray<string> // "No"
type TestArray2 = isArray<string[]> // "Yes"