const person = {
  name: 'Миша',
  age: 25,
  city: 'Москва',
};
console.log('1. ', person);

person.profession = 'Программист Backend';
console.log('2. ', person);

person['любимый цвет'] = 'синий';
person['e-mail'] = 'michael@example.com';
console.log('3. :', person);

delete person.profession;
delete person['любимый цвет'];
console.log('4. :', person);

person.address = {
  street: 'Тверская',
  house: 10,
};
console.log('5. ', person);

person.address.apartment = 42;
console.log('6. ', person);

person.address.house = 15;
console.log('7. ', person);

const name = 'hobby';
const value = 'Программирование';
person[name] = value;
console.log('8. ', person);

const brand = 'Haval';
const model = 'F7x';
const year = 2022;
const color = 'белый';

const car = {
  brand,
  model,
  year,
  color,
};
console.log('9. ', car);
