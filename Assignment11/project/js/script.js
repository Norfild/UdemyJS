window.addEventListener('DOMContentLoaded', function () {
  'use strict';


  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  // a: argument
  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  // hideTabContent(1);

  function showTabContent (b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }

  }

  info.addEventListener('click', function (e) {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++) {
        if(target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })

  // let body = document.querySelector('body')
  // let box = document.querySelector('.info')
  //
  //
  //
  // console.log('clientWidth - ' + document.documentElement.clientWidth)
  // console.log('scrollTop - ' + document.documentElement.scrollTop)
  //
  //
  // console.log('clientWidth - ' + body.clientWidth)
  // console.log('clientHeight - ' + body.clientHeight)
  //
  // console.log('offsetWidth - ' + body.offsetWidth)
  // console.log('offsetHeight  -' + body.offsetHeight)
  //
  // console.log('scrollWidth - ' + body.scrollWidth)
  // console.log('scrollWidth - ' + body.scrollWidth)
  //
  //
  // console.log(box.getBoundingClientRect());

  //Timer

  let deadline = '2018-11-30';

  function getTimeRemaining (endtime) {
    let t = (Date.parse(endtime) > Date.parse(new Date())) ? Date.parse(endtime) - Date.parse(new Date()) : 0,
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)) % 60);

    return {
      'total' : t,
      'hours' : (hours < 10) ? '0' + hours : hours,
      'minutes' : (minutes < 10) ? '0' + minutes : minutes,
      'seconds' : (seconds < 10) ? '0' + seconds : seconds,
    }
  }

  function setClock (id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock () {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if(t.total <= 0){
        clearInterval(timeInterval)
      }
    }

  }


  setClock('timer', deadline);


  // Modal

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.documentElement.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.documentElement.style.overflow = '';
  })

})