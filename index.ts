/**
 * instanceOf
 */

class Person {
    name: string = "Kim";
    job: string = "artist";
}

class Dog {
    name: string = "foo";
    breed: string = "poodle";
}

function checkAndLog(input: Person | Dog) {
    console.log(input.name);

    if(input instanceof Person) {
        console.log("person")
        console.log(input.job);
    }

    if(input instanceof Dog) {
        console.log("dog")
        console.log(input.breed)
    }
}

checkAndLog(new Dog());