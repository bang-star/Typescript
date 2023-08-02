/**
 * Namespace
 */

namespace Foo {
    export let count = 10;

    export function increase(val: number) {
        count += val;
    }
}

namespace Bar {
    export const count = 30;
}

Foo.increase(5);
console.log(Foo.count)
console.log(Bar.count)