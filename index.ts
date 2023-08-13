/**
 * Omit
 */

type Developer = {
    name: string
    age: number
    field: string
}

let somePerson1: Developer = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// X
let somePerson2: Omit<Developer, "name" | "age"> = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// O
let somePerson3: Omit<Developer, "name"> = {
    age: 25,
    field: 'FE'
}
