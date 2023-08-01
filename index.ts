/**
 * Conditional Type
 */

interface Person {
    name: string;
}

interface Developer extends Person {
    field: string;
}

interface Designer {
    field: string;
}

type Foo = Developer extends Person ? string : number;  // => string
type Bar = Designer extends Person ? string : number;   // => number
type Baz = Person extends Developer ? string : number;  // => number


type StringOrNumber<T extends number | string> = T extends number ? number : string;

function getType<T extends number | string>(input: T):StringOrNumber<T> {
    return;
}

let foo = getType("string");        // string
let bar = getType(100);            // number