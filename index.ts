// 실제로 존재하는 것이 아님
type Person = {
    name: string,
    age: number
}

interface Music {
    lyrics: string;
    artists: Person[];
}

interface Human {
    name: string;
    age: number;
}

interface Developer extends Person {
    field: string;
}