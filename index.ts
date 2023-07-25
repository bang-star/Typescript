let foo = 3;        // number
let fuz = "string";  // string

// === Best Common type === //
let bar = [1, 2, "string"]  // => (string | number)[]

// === Contextual typing === //
[1, 2, 3, 4].forEach((element) => { console.log(element)} );

let fifo = function (param) {
    console.log(param);
}

