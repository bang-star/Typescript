interface Person {
    name: string;
    age: number;
}

// 인터페이스 사용하지 않은 경우
function logPerson(person: {name: string; age: number; }) {
    console.log(person.name, person.age)
}

// 인터페이스를 사용한 경우
function logPerson(person: Person) {
    console.log(person.name, person.age)
}

let person = {
    name: "dummy",
    age: 25
}

logPerson(person);


// == Indexed signature == //

interface Person {
    name: string;
    age: number;
}

// 인터페이스를 사용한 경우
function logPerson(person: Person) {
    console.log(person.name, person.age)
}

let person = {
    name: "dummy",
    age: 25,
    height: 180
}

// 위에서 다른 프로퍼티를 추가해도 문제가 없었는데
logPerson( {
    name: "dummy",
    age: 25
});

// 아래와 같이 직접 값을 줄 경우 초과 프로퍼티 검사가 발생한다.
// 초과 프로퍼티가 진행되서 타입 검사를 할 때,
// 정의되지 않은 프로퍼티가 존재할 경우 문제를 삼게 된다.
logPerson( {
    name: "dummy",
    age: 25,
    height: 180
});

// 이러한 경우에 인덱스 시그니처를 사용하면 좋다.
interface Person2 {
    name: string;
    age: number;
    [key: string]: any;
}

function logPerson2(person: Person2) {
    console.log(person.name, person.age)
}

logPerson2( {
    name: "dummy",
    age: 25,
    height: 180,
    Yn: "Y"
});


// === extends === //
interface Building {
    room : number;
    floor : number;
    address : string;
}

// == 중복 == //
// interface Officetel {
//     room : number;
//     floor : number;
//     address : string;
//     addition: string;
// }
//
// interface apartment {
//     room : number;
//     floor : number;
//     address : string;
//     addition: string;
//     count: number;
// }

// == 중복 제거 == //
interface Officetel extends Building {
    addition: string;
}

interface apartment extends Building {
    addition: string;
    count: number;
}
