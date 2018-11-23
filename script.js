'use strict';

var money, time;

var appData = {
  budget: '',
  timeData: new Date(),
  optionalExpenses: '',
  income: '',
  expenses: [],
  savings: false,
};

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

if(money) { appData.budget = money }
if(time)  { appData.timeData = time }

let question1, question2,
    question3, question4;

question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
question2 = prompt('Во сколько обойдется?', '');
question3 = prompt('Введите обязательную статью расходов в этом месяце', '');
question4 = prompt('Во сколько обойдется?', '');

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

alert('Your budget per 1 day - ' + appData.budget/30);