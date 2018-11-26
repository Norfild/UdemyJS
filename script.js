'use strict';


let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  optionalExpenses: {},
  income: [],
  expenses: [],
  savings: false,
};

// if(money) { appData.budget = money }
// if(time)  { appData.timeData = time }

let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    question2 = prompt('Во сколько обойдется?', ''),
    question3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    question4 = prompt('Во сколько обойдется?', '');

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

alert('Your budget per 1 day - ' + appData.budget/30);
