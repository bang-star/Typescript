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
