import chalk from 'chalk';

function getWeatherForecast() {
  const random = Math.floor(Math.random() * 62) + 19;
  const celaya = random * 10;
  const drobnaya = Math.random().toFixed(6).slice(2);
  const temp = celaya + '.' + drobnaya;

  console.log(`Прогноз погоды на TerraRandomis: Температура завтра ${chalk.blue(temp)} C`);
}

getWeatherForecast();
getWeatherForecast();
getWeatherForecast();
getWeatherForecast();
getWeatherForecast();
