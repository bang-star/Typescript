class Person {
    name: string;                       // public
    private age: number;                // private
    protected height: number = 10;      // protected
}

const person = new Person();
person.name = 'BBB';
person.age = 25;            // X
person.height = 180;        // X

console.log(person.name, person.age, person.height);