function logJoin(array, separator) {
  console.log(array.join(separator));
}

logJoin(['max', 'john', 123, null], '_'); // max_john_123_
logJoin([1, 2, 3], '-'); // 1-2-3
