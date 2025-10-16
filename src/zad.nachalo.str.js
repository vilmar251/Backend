function zadNachaloStr(text, part) {
  return text.toLowerCase().startsWith(part.toLowerCase());
}

console.log(zadNachaloStr('Ветеринар', 'вет')); // true
console.log(zadNachaloStr('Молоко', 'мол')); // true
console.log(zadNachaloStr('Карго Корги', 'КАРГО ')); // true

console.log(zadNachaloStr('Карго Корги', 'кор ')); // false
console.log(zadNachaloStr('Ковёр', 'кова ')); // false
