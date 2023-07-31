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

## literal type

- string, number 는 문자열과 숫자 전체
- literal은 그 중 특정한 문자열/숫자

### 리터럴 타입의 특징

- 특정한 문자열, 특정한 숫자만 값으로 허용
- union type과 활용되는 경우가 많음
- let 과 const의 동작과 관련이 있음

> let과 const의 차이는 let은 재할당을 할 수 있고, const는 할 수 없다.

## Enum Type

### What is Enum?

- 상수를 그룹화 하는 자료형
- Javascript 에는 없고, TypeScript 에만 있음.
- namespace 와 그 안의 멤버들로 구성

```typescript
enum FrontEnd {
    HTML,
    CSS,
    JavaScript
}
```

### 숫자 열거형

- TypeScript enum의 기본 형태
- 별도의 값을 설정하지 않은 경우, 0부터 시작하여 이전 멤버의 + 1
- 상수의 값 자체는 중요하지 않지만, 구분은 가능해야 하는 상황에서 유용

### 문자 열거형

- 값을 직접 초기해줘야 함. 이전 멤버의 값 +1이 불가능
- 상수가 의미있는 값을 가지게 됨으로써 유용할 수 있음
- 숫자 열거형과 동시에 사용은 가능하지만, 특별한 이유가 없다면 지양

### Enum 컴파일

From
```typescript
enum FrontEnd {
    HTML,
    CSS,
    JavaScript
}
```

to

```typescript
var FrontEnd;
(function (FrontEnd) {
    FrontEnd[FrontEnd["HTML"] = 0] = "HTML";
    FrontEnd[FrontEnd["CSS"] = 1] = "CSS";
    FrontEnd[FrontEnd["JavaScript"] = 2] = "JavaScript";
}) (FrontEnd || (FrontEnd = {}));
```

- 멤버의 값의 짝을 만들어준다. 즉 멤버의 이름으로 값에, 멤버의 값으로 이름에 접근 가능하다.

```typescript
var FrontEnd;
(function (FrontEnd) {
    FrontEnd[0] = "HTML";
    FrontEnd["HTML"] = 0;
    FrontEnd[1] = "CSS";
    FrontEnd["CSS"] = 1
    FrontEnd[2] = "JavaScript";
    FrontEnd["JavaScript"] = 2;
}) (FrontEnd || (FrontEnd = {}));
```

# 타입 심화

## 함수와 함수의 타입

### 함수의 타이핑(named function, 기명 함수)

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

### 함수의 타이핑(anonymous function)

```typescript
let add = function (a: number, b: number): number { return  a+ b; }

let add = (a: number, b: number): number => a + b;      // ES 6
```

### 함수 타입

- 함수를 타입으로 표현
- (a: number, b: number) => number 화살표 함수의 형태로 표현
- 리턴 타입은 추론에 의해 생략 가능하지만, 표기를 권장
- 아무 값도 리턴하지 않는 함수의 리턴 타입은 void

### 익명함수의 타이핑

```typescript
let add = function (a: number, b: number): number { return a + b; }

let add: (a: number, b: number) => number = function (a, b) { return a + b; }

let add: (a: number, b: number) => number = (a, b) => a + b;
```

## 선택적 파라미터(Optional parameter)

- 자바스크립트에서는 모든 파라미터가 선택적
- 파라미터에 `?`을 붙이면선택적 파라미터가 되고 해당 파라미터의 타입은 undefined를 포함하는 형태가 됨.
- 선택적 파라미터는 반드시 뒤 순서에 와야 한다.

### 기본 파라미터(default parameter)

- 선택적 파라미터에 값을 전달하지 않으면 해당 값은 undefined가 됨
- 파라미터 뒤에 `=`를 통해 기본 값 지정 가능
- 기본 파라미터가 지정되면 해당 파라미터는 선택적 파라미터로 취급
- 파라미터 순서는 자유롭지만 기본 파라미터 값을 쓰려면 undefined를 명시적으로 전달해야 함.

## Object type

- Key와 Value로 구성된 프로퍼티의 집합

```typescript
const user = {
    name : 'daniel',
    age : 25
}
```

### 함수 파라미터에 적용

파라미터가 객체 형태인 경우

```typescript
function getProfile(person: { name: string; age: number}) {
    return person.name + ", " + person.age.toString();
}
```

## 선택적 프로퍼티(Optional Property)

- 함수의 선택적 파라미터와 유사하게, 객체 프로퍼티도 선택적인 타이핑이 가능
- 프로퍼티 이름 뒤에 ?를 달아서 지정

## Union Type

- 타입의 OR 연산자
- 여러 종류의 타입을 할당 가능하게 하고 싶을 때 사용

```typescript
function getWidthString(width: number) {
    return `width: ${width}px`;
}
```

## intersection type(교차 타입)

- 여러 타입을 결합할 때 사용
- 주로 객체를 대상으로 활용

## Type Alias

```typescript
type MyType = string | number;
```

- 타입에 이름을 부여하는 것
- 새로운 타입을 만드는 것은 아님.

### 사용되는 경우

- 타입에 이름, 즉 의미를 부여하여 가독성 향상
- 객체 타입, 유니언 타입 등에 활용
- 반복되는 코드를 간결하게 표현

## Interface

- 함수나 객체, 클래스의 스펙에 대한 정의
- 어떤 속성을 가지고 있어야 하는지에 대한 정의

```typescript
interface Person {
    name: string;
    age: number;
}
```

### Optional Property

- 객체 타입에서의 선택적 프로퍼티와 유사
- 프로퍼티가 있어도 되고, 없어도 될 때

```typescript
interface Person {
    name : string;
    age? : number;
}
```

### Readonly Property

- 객체가 처음 생성될때만 수정 가능한 프로퍼티
- 처음 생성 이후의 재할당 불가

```typescript
interface Person {
    name: string;
    readonly age: number;
}
```

### Indexed signature

- 정의되지 않은 동적 타입의 할당이 필요할 때

```typescript
interface Person {
    name: string;
    age: number;
    [key: string]: any;
}
```

### Extends

- 다른 인터페이스를 참조하여 확장할 수 있음
- 재사용 가능하게 쪼개고 조합해서 유연하게 사용 가능

```typescript
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    field: string;
}
```

## Type vs Interface

### Type

- 타입을 부를 "이름" 정의
- 확장 불가

### Interface

- 새로운 "인터페이스" 정의
- 확장 가능

## Type inference

- 타입을 따로 지정하지 않은 경우, 타입스크립트가 타입을 추론하여 타입 정보를 제공
- 대부분의 경우 직관적으로 추론
- 변수의 멤버의 초기화, 기본 매개변수의 결정, 함수의 리턴타입 결정 등을 할 때 일어남.

### Best Common type

- 여러 타입들이 있는 경우 그 타입들을 표현할 수 있는 최적 타입을 찾음
- 대부분 유니언 타입 형태로 표현됨

### Contextual typing

- 코드의 위치를 기준으로 암시되는 타입을 추론
- 문맥상 추론이 불가능할 경우, 암묵적 any를 가짐 => nolmplicityAny 옵션이 켜져 있을 경우 에러 발생.


# 클래스

## Class 소개

### 클래스란

자바스크립트는 prototype-base언어 > ES6에서 클래스 문법 추가되었습니다.

자바스크립트는 객체지향 프로그래밍언어라고 하는데 다른 언어들은 클래스라는 개념을 사용하여 객체지향 프로그래밍을 구현하였는데 자바스크립트는 다른 언어들과 다르게 프로토타입이라는 것을 사용하여 객체지향 언어를 구현해놓았는데 그래서 자바스크립트를 prototype-based 언어라고 합니다.

자바스크립트는 prototype을 사용했었는데 사용하기 굉장히 불편하였습니다. 그래서 ES6에서 클래스 문법이 추가되었는데 근본적으로 들어가보면 prototype을 통해서 구현되어있지만, 문법을 사용하는 사용자 입장에서는 prototype이 무엇인지 신경쓰지 않아도 클래스 문법만 사용하여도 객체지향 프로그래밍을 구현할 수 있게 되어서 자바스크립트 상에서 객체지향프로그래밍을 하기 수월해졌습니다.

### 클래스의 기본 형태(ES6)

타입스크립트에 클래스 기본 구조는 ES6와 동일하게 사용할 수 있습니다.

```typescript
class MyClass {
    constructor(foo) {
        this.foo = foo;
    }
    
    bar() {
        return foo;
    }
}
```

대신에 타입스크립트에서는 ES6에서 사용하던 기본 문법에 더해서 더 효율적으로 사용할 수 있도록 문법이 추가되었습니다.

### 타입스크립트에서의 클래스

- 필드(+ 접근 제어자)
- 메소드(+ 접근 제어자)
- 상속
- getter/setter
- static
- readonly
