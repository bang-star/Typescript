function getWidthString(width: number | string | [] | undefined) {
    return `width: ${width}px`;
}

console.log(getWidthString(20));
console.log(getWidthString("20"));

function foo(
    param: {name: string, age: number} | { name: string, height: number}
) {
    if (param.age) 
}