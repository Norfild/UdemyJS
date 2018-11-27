'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
   time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  optionalExpenses: {},
  income: [],
  expenses: {},
  savings: false,
};

for (let i = 0; i < 2; i++ ) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

  if (typeof(a) === 'string' && (typeof(a) != null) && (typeof(b) != null)
    && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
  } else {
    i--;
  }

};

// let i = 0;
// while (i < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько обойдется?', '');
//
//   if (typeof(a) === 'string' && (typeof(a) != null) && (typeof(b) != null)
//     && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//   }
//
//   i++;
// }



appData.moneyPerDay = appData.budget/30;

alert('Your budget per 1 day - ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
  console.log('Min level')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Middle level')
} else if (appData.moneyPerDay > 2000) {
  console.log('Top level')
} else {
  console.log('Incorect data')
}

// switch (appData.moneyPerDay)  {
//   case appData.moneyPerDay < 100:
//     console.log('Min level')
//     break;
//   case (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000):
//     console.log('Middle level')
//     break;
//   case appData.moneyPerDay > 2000:
//     console.log('Top level')
//     break;
//   default:
//     console.log('Incorect data')
//     break;
// }


console.log(appData)

