'use strict';

// function User (name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log('Hello ' + this.name);
//   }
//
// }
//
// User.prototype.exit = function (name) {
//   console.log('User ' + this.name + ' exit')
// }
//
// let ivan = new User('Ivan', 25);
//
// console.log(ivan);
//
// ivan.exit();

function showThis (a, b) {
  console.log(this);
  function sum () {
    console.log(this);
    return a + b;
  }
  console.log(sum);
}

showThis(4, 5);

let obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this)
  }
}


// obj.sum;


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
