class Person {
    name: string;
    age: number;
    height: number = 10;

    public setOlder(n: number) {
        this.age += n;
    }
}

const person = new Person();
person.name = 'BBB';
person.age = 25;            // X
person.height = 180;        // X

console.log(person.name, person.age, person.height);

person.setOlder(3);         // 28

console.log(person.name, person.age, person.height);