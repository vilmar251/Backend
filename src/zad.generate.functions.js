function generateInteger(min, max) {
  if (min >= max) {
    throw new Error('Минимальное значение должно быть меньше максимального');
  }
  return Math.floor(Math.random() * (max - min) + min);
}

export { generateInteger };
