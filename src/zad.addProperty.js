function AddProperty(obj, prop, value) {
  obj[prop] = value;
}

const user = { id: 5, name: 'max' };

AddProperty(user, 'address', 'ул. Углеродная 5');
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5' }

AddProperty(user, 'age', 50);
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5', age: 50 }

AddProperty(user, 'id', -3);
console.log(user); // { id: -3, name: 'max', address: 'ул. Углеродная 5', age: 50 }
// ОБРАТИТЕ ВНИМАНИЕ!       👆  Поле id уже было, и значение перезаписалось!
