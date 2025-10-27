import chalk from 'chalk';
export function mapRestaurantStatus(restaurantStatus) {
  let appStatus;
  let colorFn;

  switch (restaurantStatus) {
    case 'Формируются чеки':
    case 'Назначаются повара':
      appStatus = 'Обрабатывается';
      colorFn = chalk.blue;
      break;

    case 'Запекается':
    case 'Нарезается':
    case 'Варится':
    case 'Жарится':
    case 'Поиск курьера':
      appStatus = 'Готовится';
      colorFn = chalk.yellow;
      break;

    case 'Курьер берёт заказ':
    case 'Курьер в пути':
    case 'Курьер подъезжает':
      appStatus = 'У курьера';
      colorFn = chalk.blue;
      break;

    case 'Клиент отказался от заказа':
    case 'Заказ доставлен':
      appStatus = 'Готов';
      colorFn = chalk.green;
      break;

    default:
      appStatus = 'Обрабатывается';
      colorFn = chalk.blue;
      break;
  }

  console.log(colorFn(appStatus));
  return appStatus;
}

mapRestaurantStatus('Формируются чеки');
mapRestaurantStatus('Назначаются повара');
mapRestaurantStatus('Запекается');
mapRestaurantStatus('Нарезается');
mapRestaurantStatus('Варится');
mapRestaurantStatus('Жарится');
mapRestaurantStatus('Поиск курьера');
mapRestaurantStatus('Курьер берёт заказ');
mapRestaurantStatus('Курьер в пути');
mapRestaurantStatus('Курьер подъезжает');
mapRestaurantStatus('Клиент отказался от заказа');
mapRestaurantStatus('Заказ доставлен');
