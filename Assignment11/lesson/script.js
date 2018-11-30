'use strict';


let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.call(age, 'John', 'Smith');
showUser.apply(age, ['John', 'Snow']);



// call, apply. bind

let user = {
  name: 'John',
};

function showInfo (surname) {
  console.log(this);
  console.log(this.name + ' ' + surname);
}

console.log(showInfo.call(user, 'Smith'));
console.log(showInfo.apply(user, ['Snow', 'Two']));

function count (number) {
  return this * number;
}

let double = count.bind(2);

console.log(double(3));


// 1)
