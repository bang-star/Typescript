class Person {
    name: string;
    age: number;
    height: number = 10;

    constructor(
        name: string,
        age: number,
        height: number,
    ) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    public setOlder(age: number) {
        this.age += age;
    }
}

class Developer extends Person {
    field: string;

    constructor(
        name: string,
        age: number,
        height: number,
        field: string
    ) {
        super(name, age, height);
        this.field = field;
    }

    getProfile() {
        return this.field + " / " + this.name;
    }
}

const developer = new Developer('GO', 1, 2, 'GI');

console.log(developer.getProfile());
