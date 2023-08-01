/**
 * indexed access type
 */

type Person = { name: string; age: number; isDeveloper: boolean; };

type Name = Person["name"];

type NameAndAge = Person["name" | "age"];

type TypeOfPerson = Person["name" | "age" | "isDeveloper"] = Person[keyof Person]
