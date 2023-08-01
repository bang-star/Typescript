let foo: Array<number> = [1, 2, 3];

/**
 * Union 타입을 이용한 방법
 * => 파라미터와 반환 타입이 동일하게 설정되어 리턴타입이 하나로 고정되는 것을 기대할 수 없음.
 * number => number | string
 * string => number | string
 * 이로 인해 원하지 않는 방식으로 동작할 수 있게 됨.
 */
function returnInput1(input: number | string) {
    return input;
}

/**
 * any 타입
 * @param input
 * any로 설정하면 반환 값도 any가 되어 적절하지 않음.
 */
function returnInput2(input: any) {
    return input;
}

/**
 * 제네릭을 이용한 방법
 * @param input
 * 제네릭을 이용하면 모든 타입을 받을 수 있으면서 파라미터와 반환 타입을 동일하게 일치시켜줄 수 있다.
 */
function returnInput3<T>(input: T) {
    return input;
}

console.log(typeof returnInput3(3))          // number
console.log(typeof returnInput3("ABC"))      // string
console.log(typeof returnInput3([1, 2, 3]))  // array

console.log(returnInput3<number>(3));        // 명시적으로 사용할 수 있음.


interface GenericItems<T> {
    items: T[];
}

function genericFunction(args: GenericItems<number>) {
    console.log(args.items);
}

class GenericClass<T> {
    someProperty: T;
}

let generic = new GenericClass<number>();

generic.someProperty = "asd";   // X
generic.someProperty = 333;     // O