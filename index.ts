let foo: string;

let bar: "test";    // 특정한 값만 가질 수 있음.

bar = "asd";    // X

bar = "test";   // O

let Yn: "Y" | "N";

Yn = "Y";   // O
Yn = "N";   // O
Yn = "K";   // X

const woo: string = "foo";  // O