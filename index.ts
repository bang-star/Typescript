function getProfile(person: { name: string; age: number}) {
    return person.name + ", " + person.age.toString();
}

console.log(getProfile("daniel", 25));                   // X
console.log(getProfile({name: "daniel", age: 25}));      // O

function getProfile2(person: { name: string; age?: number}) {
    if(person.age) {
        return person.name + ", " + person.age.toString();
    }else {
        return person.name;
    }
}

console.log(getProfile2({name: "daniel"}));               // O
console.log(getProfile2({name: "daniel", age: 25}));      // O