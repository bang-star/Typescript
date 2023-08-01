/**
 * in
 */

type Developer = { name: string; field: string };

type Designer = { name: string; level: "junior" | "senior" };

function logField(person: Developer | Designer) {
    // console.log(person.field);  // 보장 불가

    if("field" in person)
        console.log(person.field);  // 보장 불가
}

logField({name: 'Kim', field: "BE"});       // BE
logField({name: 'Lee', level: "junior"});   // 출력 X