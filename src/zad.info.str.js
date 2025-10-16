import chalk from 'chalk';

function logStringInfo(text) {
  const firstChar = text[0];
  const lastChar = text[text.length - 1];

  console.log(`Символов: ${text.length}
Первый: ${chalk.yellow(firstChar)}
Последний: ${chalk.green(lastChar)}`);
}

logStringInfo('Это строка');
