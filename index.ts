let foo: number[] = [1, "a", false];    // X
let bar: any[] = [1, "a", false];       // O

let baz: (string | number | boolean)[] = [1, "a", false];

type fuz = (string | number | boolean);

let buz: fuz[] = [1, "a", false, "b"];