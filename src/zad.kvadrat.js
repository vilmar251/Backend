import { generateInteger } from './zad.generate.functions.js';

export function calculateSquareArea(side) {
  return side * side;
}

const side = generateInteger(1, 11);

const area = calculateSquareArea(side);

export const squareResult = {
  side: side,
  area: area,
};
