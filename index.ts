/**
 * 제네릭 제약조건을 사용하지 않은 경우
 *
 * name이라는 프로퍼티가 없을 수 있으므로 name을 출력하기 위해서는 조건문을 통해 name 프로퍼티 검사가 이루어져야 한다.
 */
function logName<T>(input: T) {
 console.log(input.name);
}

/**
 * 제네릭 제약조건을 사용하는 경우
 */
interface WithName {
    name: string;
}

function logName2<T extends WithName>(input: T) {
    console.log(input.name);
}

/**
 * 타입 매개변수의 활용
 */
function logPropertyValue<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
}

const foo = { a: 1, b: 2};

logPropertyValue(foo, "a"); // O
logPropertyValue(foo, "d"); // X