/**
 * Non-Null Assertion
 */

type OptionalObject = {
    foo?: {
        bar?: {
            baz?: string;
        }
    }
}

function logInputProp(input?: OptionalObject) {
    console.log(input.foo!.bar!.baz);
}

// OK
logInputProp({ foo: {}});       // Cannot read properties of undefined 에러 발생.
// OK
logInputProp({
    foo: {
        bar: {
            baz: "baz!!"
        }
    }
});

