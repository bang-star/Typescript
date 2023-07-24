// printPerson과 printPerson2 는 동일
function printPerson(person: { name: string } & { age: number}) {
    console.log("이름: ", person.name)
    console.log("나이: ", person.age)
}

function printPerson2(person: { name: string , age: number}) {
    console.log("이름: ", person.name)
    console.log("나이: ", person.age)
}