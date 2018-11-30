'use strict';

let btnStart = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem =  document.querySelectorAll('.expenses-item'),



    btn = document.getElementsByTagName('button'),
    btnExpenses = btn[0],
    btnExpensesOptional = btn[1],
    btnCountBudget = btn[2],

    optionalExpensesItem =  document.querySelectorAll('.optionalexpenses-item'),

    incomeItem =  document.querySelector('#income'),
    checkSavings =  document.querySelector('#savings'),
    sumValue =  document.querySelector('#sum'),
    percentValue =  document.querySelector('#percent'),
    yearValue =  document.querySelector('.year-value'),
    monthValue=  document.querySelector('.month-value'),
    dayValue=  document.querySelector('.day-value');

console.log(expensesItem);

let money, time;

btnStart.addEventListener('click', function () {
  // time = prompt ("Введите дату в формате YYYY-MM-DD", "");
  time = '2018-11-28';

  money = +prompt ("Ваш бюджет на месяц?", "");

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt ("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = money.toFixed();

  console.log(new Date(Date.parse(time)));
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

});

btnExpenses.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
      console.log ("Done! Added expenses");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});


btnExpensesOptional.addEventListener('click', function () {
  for (let i = 0; i <= optionalExpensesItem.length; i++) {
    let opt =  optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCountBudget.addEventListener('click', function () {

  if( appData.budget != undefined ) {

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Это высокий уровень достатка!";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }

})

// incomeItem.addEventListener('change', function () {
incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
})

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
})

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
})


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

console.log(appData)
















// btnExpenses.onclick = function () {
//   console.log('Click for btnExpenses')
// }
//
// btnExpensesOptional.onclick = function () {
//   console.log('Click for btnExpensesOptional')
// }


// btnExpenses.addEventListener('click', function (e) {
//   console.log('Click for btnExpenses ' + e.type);
//   console.log(e.target);
//   let target = e.target;
//   target.style.backgroundColor = '#f00';
// });

//
// btn.forEach(function (item) {
//   item.addEventListener('mouseleave', function (e) {
//     console.log(e.target);
//   })
// });
//
//
//
