interface PersonSpec {
    name: string;
    think: (thoughts: string) => void;
}

class Person implements PersonSpec {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    think(thoughts: string): void {
        console.log(thoughts);
    }
}

const person = new Person("Kim");

person.think("TypeScript");