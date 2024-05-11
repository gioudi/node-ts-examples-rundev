//Intersection of object types

type Goku ={attack: number, punch: string}
type Vegeta = {defence: number, kick: string}

type Gogeta = Goku & Vegeta

const gogeta: Gogeta={attack:200, defence: 350, punch:"puño del dragon", kick:"patadita"}


//Intersection of type and an interface

interface Animal {
    name: string
}


type Dog = Animal & {
    bark: ()=> void
}

const dog: Dog ={name:'Salmon', bark: ()=>console.log("Woff")}