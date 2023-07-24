function getProfile(name: string, age: number) {
    return name + ", " + age.toString();
}

console.log(getProfile("daniel", 25));  // "daniel, 25"

// console.log(getProfile("daniel"))            // X

function getProfile2(name: string, age?: number) {
    if(age) {
        return name + ", " + age.toString();
    }else {
        return name;
    }
}

console.log(getProfile2("daniel"))            // "daniel"

function getProfile3(name: string, age: number = 20) {
    return name + ", " + age.toString();
}

console.log(getProfile2("daniel"))                  // "daniel, 20"
console.log(getProfile2("daniel", 25))         // "daniel, 25"