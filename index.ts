/**
 * Mapping Type
 */

// ========== EX 1 ========== //
// AS-IS
type StatusByRating = {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
}

// TO-BE
type Rating = 1 | 2 | 3 | 4 | 5;

type StatusByRating = {
    [rating in Rating]: boolean;
}

// ========== EX 2 ========== //
// AS-IS
type Person = {
    name: string;
    age: number;
}

type StringPerson = {
    name: string;
    age: number;
}

// TO-BE
type StringPerson = {
    [property in keyof Person] : string;
}