'use strict';
var startDate = new Date('Sep 1, 2017 18:00:00').getTime();
var countdown = setInterval(function() {
  var todaysDate = new Date().getTime();
  var distance = startDate - todaysDate;

// Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
  document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
