import chalk from 'chalk';

function zadIsAdult(age) {
  if (age >= 18) {
    console.log(chalk.green('Пользователь совершеннолетний'));
    return true;
  } else {
    console.log(chalk.red('Пользователь несовершеннолетний'));
    return false;
  }
}

const randomAge = 15 + Math.floor(Math.random() * 8);

console.log(`Возраст: ${randomAge}`);
zadIsAdult(randomAge);
