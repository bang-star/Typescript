/**
 * Pick
 */

type Developer = {
    name: string
    age: number
    field?: string
}

// X -> 특정 필드만 가지고 있어야 함.
let somePerson1: Pick<Developer, "name"> = {
    name: '김개발',
    age: 25,
    field: 'FE'
};

// OK
let somePerson2: Pick<Developer, "name" | "age"> = {
    name: '김개발',
    age: 25,
};
