/**
 * Required
 */

type Developer = {
    name: string
    age: number
    field?: string
}

// OK
let somePerson1: Developer = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// OK
let somePerson2: Required<Developer> = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// X
let somePerson3: Developer = {
    name: '김개발',
    field: 'FE'
};