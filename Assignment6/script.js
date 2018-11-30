// 'use strict';

let box = document.getElementById("box"),
    btn = document.getElementsByTagName('button'),
    items = document.querySelectorAll('.item');
    oneItem = document.querySelector('.item');
    text = document.getElementById("text");

box.style.backgroundColor = 'black';

items.forEach(function (item, i) {
  item.style.backgroundColor = 'red';

})




let el = document.createElement('div'),
    elText = document.createTextNode('input');

  el.classList.add('new-class')
  // el.innerHTML = 'Hello world';
  el.textContent = 'Hello world';

  box.appendChild(el);

document.body.replaceChild(box, oneItem);



console.log(el);
console.log(elText);



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

