//mapped types

type ReadOnly<T>={
   readonly [K in keyof T]: T[K]
}



type Person = {
    name: string
    age: number
}

type ReadOnlyPerson = ReadOnly<Person>

const person: ReadOnlyPerson = {name: 'Angie', age: 15}

//person.name = 'Maria'