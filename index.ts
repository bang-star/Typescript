/**
 * Assertion
 */

// ========== EX 1 ========== //
let someString: string = "10";

function logInput(input: "10") {
    console.log(input);
}

logInput(someString as "10");

// ========== EX 2 ========== //

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    field: string;
}

function getName(person : Person) {
    return person.name;
}

getName({name: "Kim", age: 25, field: "FE"} as Person);

// ========== EX 3 ========== //

const errCase: string = "error!" as number;                 // X
const errCase: string = "error!" as unknown as number;      // O
