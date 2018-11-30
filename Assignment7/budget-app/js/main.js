'use strict';

let btnStart = document.getElementById("start"),
    budget = document.getElementsByClassName("budget-value"),
    dayBudget = document.getElementsByClassName("daybudget-value"),
    level = document.getElementsByClassName("level-value"),
    expenses = document.getElementsByClassName("expenses-value"),
    optionalExpenses = document.getElementsByClassName("optionalexpenses-value"),
    income = document.getElementsByClassName("income-value"),
    monthSavings = document.getElementsByClassName("monthsavings-value"),
    yearSavings = document.getElementsByClassName("yearsavings-value"),

    expensesItem =  document.getElementsByClassName('.expenses-item'),
    btnExpenses =  document.querySelector('.expenses-item-btn'),
    btnExpensesOptional =  document.querySelector('.optionalexpenses-btn'),
    btnCountBudget =  document.querySelector('.count-budget-btn'),

    optionalExpensesItem =  document.querySelectorAll('.optionalexpenses-item'),





  // btn = document.getElementsByTagName('button'),
  // btn = document.querySelectorAll('button'),
  // btnExpenses = btn[0],
  // btnExpensesOptional = btn[1],
  // btnCountBudget = btn[2];







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


btn.forEach(function (item) {
  item.addEventListener('mouseleave', function (e) {
    console.log(e.target);
  })
});



