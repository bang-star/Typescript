/**
 * Partial
 */

type Developer = {
    name?: string
    age?: number
    field: string
}

// OK
let somePerson1: Developer = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// X(field 프로퍼티는 필수)
let somePerson2: Developer = {
    name: '김개발',
    age: 25,
};

// O
let somePerson3: Partial<Developer> = {
    name: '김개발',
    age: 25,
};