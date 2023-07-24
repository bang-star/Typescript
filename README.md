# Typescript

자바스크립트는 동적 타입 언어라 타입은 존재하지만, 타입을 이해하기 힘들다.

타입스크립트는 자바스크립트의 Superset을 지향한다.
=> 자바스크립트에서 동작하던 코드를 그대로 사용해도 동작한다.

타입스크립트는 컴파일언어로 브라우저 위에서 실행되는 것이 아니고 타입스크립트 코드를 컴파일하면 자바스크리비트 코드가 생성된다.

트랜스파일링 - 타입스크립트에서 자바스크립트 코드로 변화되는 과정.

# 기본 타입 

## Type Annotation

- 대상의 타입을 명시적으로 알려주는 것

```typescript
let foo: string = "foo";
```

- 타입을 직접 지정하지 않으면 타입스크립트가 알아서 타입을 추론한다.

## 원시 타입(Primitives Type)

자바스크립트의 7가지 원시 자료형을 기반으로 두는 타입

- string
- number
- boolean
- bigint
- symbol
- undefined
- null


### String => 문자열

 - "word"와 같이 "" 또는 ''으로 표기

```typescript
let foo: string = "foo";
let bar: string = "ba" + "r";
let someString: string = `my name is ${name}`;
```

### Number => 숫자

 - 부동 소수 방식의 숫자 타입

```typescript
let someNumber: Number = 10;
let hexNumber: number = 0x3fee7;
```

### Boolean => 참/거짓

```typescript
let isSignIn: boolean = false
```

## Null & undefined

- 자바스크립트와 타입스크립트의 자료형이자 값
- 자기 자신만을 값으로 가짐
- 값이 할당되지 않으면 undefined, 의도저그로 빈 값을 할당하는 것은 null

### StrictNullChecks

- null, undefined 와 관련된 tsconfig 설정
- 디폴트 off(단, strict 옵션이 있으면 on이 디폴트)
- off => string 과 같은 타입에 null 또는 undefined 할당 가능
- on => any 와 각자 자신의 타입에만 할당 가능


## Any & unknown

- 타입스크립트의 타입 체크를 패스
- 어느 타입이나 할당 가능하고, 어느 타입에도 할당 가능(never는 예외)
- 깅력하지만 유의해서 사용해야 함.

### nolmplicitAny

- any와 관련된 tsconfig 설정
- 디폴트는 off(단, strict 옵션이 있으면 on이 디폴트)
- 타입 지정을 하지 않으면 any로 추론
- off => any로의 추론을 허용
- on => any로의 추론을 허용 X

### unknown 

- any와 비슷하지만 다른 타입
- unknown 과 any 에만 할당 가능
- "모르는 타입"의 경우 unknown 을 사용하는 것을 권장

## 배열

- 특정한 값들의 묶음


### 배열의 타입(표기 방법)

```typescript
let foo: number[] = [1, 2, 3];

let bar: Array[number] = [1, 2, 3];
```

### 요소의 타입이 다양할 경우

- any를 사용하는 방법
- union type 을 사용하는 방법
- type alias 를 사용하는 방법