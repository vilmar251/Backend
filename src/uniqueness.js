function add(list, item) {
  if (list.indexOf(item) === -1) {
    list.push(item);
  }
}

const list = [];
add(list, 'Картошка');
add(list, 'Капуста');
add(list, 'Морковь');
add(list, 'Картошка');
add(list, 'Лук');
add(list, 'Морковь');

console.log(list); // [ 'Картошка', 'Капуста', 'Морковь', 'Лук' ]

const list2 = [];
add(list2, 3);
add(list2, 4);
add(list2, 4);
add(list2, 4);
add(list2, 3);
add(list2, 2);

console.log(list2); // [ 3, 4, 2 ]
