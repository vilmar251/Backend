import chalk from 'chalk';

const currentDate = new Date().toISOString();

console.log(chalk.bgBlue.gray(currentDate));

console.log(chalk.bgBlack.green(currentDate));

console.log(chalk.bgGray.red(currentDate));

console.log(chalk.bgGreen.blue(currentDate));
