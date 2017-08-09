'use strict';

alert('Welcome to Whose Developer is this Anyway? The guessing game where everything is made up and the points don\'t matter like the street signs to a cab driver!');

var hometown = prompt('I am David Johnson and I am your host for today\'s show!\nYour first question to get to know me is do you know where I grew up?');
console.log(hometown + ' the conestant did/didn\'t know where David grew up.');

if (hometown.toLowerCase() === 'yes' || hometown.toLowerCase() === 'y') {
  alert('100,000 points due to your amazing ability to improvise and guess correctly.');
} else if (hometown.toLowerCase() === 'no' || hometown.toLowerCase() === 'n') {
  alert('Congratulations you recieve -1,000 points.');
} else {
  alert('Your answer is like American Express: PRICELESS.');
}

var school = prompt('Has David attended all these schools?\nDiving\nFlight\nCoding\nFire Fighting');
console.log(school + ' the contestant did/didn\'t know all the schools David attended.');
if(school.toUpperCase() === 'YES' || school.toUpperCase() === 'Y'){
  alert('I like bunnies too! Congrats! 9,9999.2 points.');
} else if (school.toUpperCase() === 'NO' || school.toUpperCase() === 'N') {
  alert('I would say NO if I was you too!');
} else{
  alert('Can\'t get away with it that easy!');
}

var travel = prompt('Has David traveled to\nDubai\nSingapore\nGreece\nMexico');
console.log(travel + ' David traveled to\nDubai\nSingapore\nGreece\nMexico');
if
(travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y'){
  alert('I used apple maps to get here! Congrats! 10,000 points.');
} else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
  alert('Whaaaaaaaat! 0 points!');
} else{
  alert('Look were you found yourelf now!');
}

var occupation = prompt('Was I ever a ninja or a pirate?');
console.log(occupation + ' he was/was not a ninja or pirate.');
if (occupation.toUpperCase() === 'YES' || occupation.toUpperCase() === 'Y'){
  alert('Arrrrrghhhhh! 0 points');
} else if (occupation.toUpperCase() === 'NO' || occupation.toUpperCase() === 'N'){
  alert('50 points! Now help me find my eye patch!');
} else {
  alert('So Close!');
}

var terms = prompt('Have I ever clicked \"i agree\" on the terms and conditions, without reading it?');
console.log(terms + ' he has/has\'nt clicked \"i agree\" on the terms and conditions, without reading it.');
if
(terms.toLowerCase() === 'yes' || 'y'){
  alert('You know I have! Haven\'t you!');
} else if (terms.toLowerCase() === 'no' || terms.toLowerCase() === 'n'){
  alert('I agreed anyway!');
} else{
  alert('I guess you enjoy reading them too');
}
