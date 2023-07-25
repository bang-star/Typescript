let foo = 3;        // number
let fuz = "string";  // string

// === Best Common type === //
let bar = [1, 2, "string"]  // => (string | number)[]

// === Contextual typing === //
[1, 2, 3, 4].forEach((element) => { console.log(element)} );

let fifo = function (param) {
    console.log(param);
}

enum FrontEnd {
    HTML,
    CSS,
    JavaScript
}


console.log(FrontEnd.HTML);         // 0
console.log(FrontEnd.JavaScript);   // 2
console.log(FrontEnd.CSS);          // 1

enum FrontEnd2 {
    HTML,
    CSS = 7,
    JavaScript
}

console.log(FrontEnd2.HTML)         // 0
console.log(FrontEnd2.CSS)          // 7
console.log(FrontEnd2.JavaScript)   // 8


enum FrontSkill {
    HTML = "HTML",
    CSS = 1,
    JavaScript = "JavaScript"
}

console.log(FrontSkill.HTML)              // "HTML"
console.log(FrontSkill.CSS)               // 1
console.log(FrontSkill.JavaScript)        // "1"
