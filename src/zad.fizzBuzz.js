/*
FizzBuzz

Напишите функцию, которая принимает на вход число, и возвращает:
- Fizz, если число делится нацело на 3
- Buzz, если число делится нацело на 5
- FizzBuzz, если число делится и на 3 и на 5

Вызовите функцию и передайте туда случайное число от 9 до 20 и выведите результат
*/

function zadFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

const randomNum = 9 + Math.floor(Math.random() * 12);

console.log(`Число: ${randomNum}`);
console.log(`Результат: ${zadFizzBuzz(randomNum)}`);
