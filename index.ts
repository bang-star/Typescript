class Person {
    readonly name: string = 'Kim';
}

const person = new Person();

console.log(person.name);   // 'Kim'

person.name = 'KKK';    // X

console.log(person.name);   // 'Kim'