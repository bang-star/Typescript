let foo;

function bar(a: string) {
    console.log(a);
}

function baz(a: any) {
    console.log(a);
}

let foz: number;

let buz: unknown;

buz = 10;
foz = buz;  // X