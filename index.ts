const add = (a: number, b: number) => a + b;

const minus = (a: number, b: number) => a - b;

const genericFunction = (a: number, b: number, type: '+' | '-') => type === '+' ? a+b : a-b

