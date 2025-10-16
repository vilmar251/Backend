/*
Напишите функцию compareStrings, которая принимает на вход 2 строки и возвращает
результат их сравнения, при этом игнорируя регистры,
то есть сравнение строк "Привет" и "ПРИВЕТ" должно выдать true.


Код ниже должен заработать и написать ожидаемые значения:
 */

function compareStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

let text = 'Начало';
let sub = ` всех ${text.slice(0, text.length - 1)}`;

console.log(compareStrings(text, 'начало')); //true

text += sub;
console.log(compareStrings(text, 'начало всех')); // false
console.log(compareStrings(text, 'начало всех начал')); // true

console.log(compareStrings('РжоМба', 'РЖОМБА')); // true
