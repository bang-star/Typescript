type A = string | number;   // typescript default is global

export type B = number[];   // export -> 해당 파일의 범위가 local로 변경됨.

declare global {            // 전역
    type C = string | number;
}