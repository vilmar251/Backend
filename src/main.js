import { generateInteger } from './zad.generate.functions.js';

console.log('Случайное число от 1 до 10:', generateInteger(1, 11));

const min = 1;
const max = 7;
console.log(`Случайное число от ${min} до ${max - 1}:`, generateInteger(min, max));
