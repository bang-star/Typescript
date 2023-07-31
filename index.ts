class Person {
    private _name: string = 'Kim';
    private _age : number = 10;

    // person.name (O)
    get name() {
        return this._name;
    }
    // person.name = "Lee";
    set name(name: string) {
        if(name != '') {
            this._name = name;
        }
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }
}

const person = new Person();
console.log(person.name + "-" + person.age)

person.name = 'Lee';

console.log(person.name + "-" + person.age)
