/**
 * Keyof
 */

type A = { a: string; b: number; 3: boolean; }

type B = keyof A;   // "a" | "b" | 3

type Indexed = { [key: number]: any; };

type IndexedKey = keyof Indexed;

