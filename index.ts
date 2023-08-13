/**
 * Optional Chaining
 */

type OptionalObject = {
    foo?: {
        bar?: {
            baz?: string;
        }
    }
}

function logInputProp(input: OptionalObject) {
    // console.log(input.foo.bar.baz);  << null or undefined 에러 발생

    // Not Optional Chaining
    if(input.foo && input.foo.bar) {
        console.log(input.foo.bar.baz);
    }

    // Optional Chaining
    console.log(input.foo?.bar?.baz);
}

// OK
logInputProp({ foo: {}});
// OK
logInputProp({
    foo: {
        bar: {
            baz: "baz!!"
        }
    }
});

type MyArr = number[] | undefined;

let myArr: MyArr;

console.log(myArr?.length)