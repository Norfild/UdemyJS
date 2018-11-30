'use strict';

function User (name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log('Hello ' + this.name);
  }

}

User.prototype.exit = function (name) {
  console.log('User ' + this.name + ' exit')
}

let ivan = new User('Ivan', 25);

console.log(ivan);

ivan.exit();