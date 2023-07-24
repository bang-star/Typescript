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