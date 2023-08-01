/**
 * typeof
 */

function logInputType(input: any) {
    console.log(typeof input);
}

logInputType(10)            // number
logInputType("100")         // string
logInputType(null)          // object
logInputType(undefined)     // undefined
logInputType([1, 2])        // object
logInputType(true)          // boolean
logInputType(() => { return "result"}); // function



function logInputIfNumber(input: string | number) {
    if(typeof input === "number") {
        console.log(input);
    }
}

logInputIfNumber(100);
logInputIfNumber("string");
