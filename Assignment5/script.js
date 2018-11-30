'use strict';

let money, time;

function start() {
  money = +prompt ("Ваш бюджет на месяц?", "");
  time = prompt ("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt ("Ваш бюджет на месяц?", "");
  }
}
start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpanses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
          b = prompt ("Во сколько обойдется?", "");

      if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    console.log ("Бюджет на 1 день составляет " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log ("Это высокий уровень достатка!");
    } else {
      console.log ("Произошла ошибка");
    }
  },
  checkSaving: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');
      appData.monthIncome = save/100/12*percent;
      console.log(appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      appData.optionalExpenses[i] = prompt("Статья необязательных расходов");
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt('New (,)', '')
    appData.income = items.split(', ')
    appData.income.push(prompt('May be more'))
    appData.income.sort();
  }
};

console.log(appData)












// let arr = ['first', 2, 3, 4, 'end'];
//
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// arr.forEach(function (item, i, mass) {
//   console.log(i + ': ' + item + '(масив: ' + mass + ')');
// });
//
// for (let key in arr) {
//   console.log(key);
// }
// for (let key of arr) {
//   console.log(key);
// }

// split, join, sort

