/**
 * Nullish coalescing
 */

const foo = null;
const bar = "hi!";

const baz = foo ?? bar;

console.log(baz);   // "hi!";

const coo = "oh!";
const coz = coo ?? bar;
console.log(coz);   // "oh!";

const aoz = foo || bar;
console.log(aoz);   // "hi!"; null 에 경우는 동일하게 동작

const buz = 0;
const boz = buz || bar;
console.log(boz);   // "hi!";

const doz = buz ?? bar; // null 과 undefined에 대해서만 검사
console.log(doz);   // 0