const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log(getRandomItem(['max', 'john', 123, null]));
console.log(getRandomItem([1, 2, 3]));
