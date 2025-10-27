function RemoveProperty(obj, prop) {
  delete obj[prop];
}

const user1 = { id: 1, age: 20, name: 'alex' };

RemoveProperty(user1, 'id');
console.log(user1); // { age: 20, name: 'alex' }

RemoveProperty(user1, 'age');
console.log(user1); // { name: 'alex' }

RemoveProperty(user1, 'name');
console.log(user1); // {}
