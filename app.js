'use strict';

alert('Welcome to the guessing game where everything is made up and the points don\'t matter like the street signs to a cab driver!');

var backgroundpicture = prompt('Is the background picture me?');
console.log(backgroundpicture);

if (backgroundpicture.toLowerCase() === 'yes' || backgroundpicture.toLowerCase() === 'y') {
  alert('Yes you are correct! Your points are like American Express: PRICELESS.');
} else if (backgroundpicture.toLowerCase() === 'no' || backgroundpicture.toLowerCase() === 'n') {
  alert('Congratulations you recieve -1,000 points.');
} else {
  alert('It\'s not to late to go back.');
}

var school = prompt('Have I traveled to Dubai, Singapore, and Hawaii?');
console.log(school);
if(school.toUpperCase() === 'YES' || school.toUpperCase() === 'Y'){
  alert('So close, but I have traveled to Dubai and Singapore.');
} else if (school.toUpperCase() === 'NO' || school.toUpperCase() === 'N') {
  alert('You have been watching me haven\'t you!');
} else{
  alert('Can\'t get away that easy!');
}

var climb = prompt('Have I climbed Mt. Rainer?');
console.log(climb);
if
(climb.toLowerCase() === 'yes' || climb.toLowerCase() === 'y'){
  alert('I must be the world\'s most interesting man, but no I have not climbed YET!');
} else if (climb.toLowerCase() === 'no' || climb.toLowerCase() === 'n') {
  alert('I used apple maps to get here! Congrats! 10,000 points.');
} else{
  alert('ERORR ERROR ERORR');
}

var occupation = prompt('Did I go to school to become a Physician?');
console.log(occupation);
if (occupation.toUpperCase() === 'YES' || occupation.toUpperCase() === 'Y'){
  alert('I got your attention now didn\'t I! 35,000 points');
} else if (occupation.toUpperCase() === 'NO' || occupation.toUpperCase() === 'N'){
  alert('');
} else {
  alert('What kind of answer was that?');
}

var terms = prompt('Have I ever clicked \"i agree\" on the terms and conditions, without reading it?');
console.log(terms);
if (terms.toLowerCase() === 'yes' || 'y'){
  alert('Thank you for agreeing to the terms and conditions! 20,000 points');
} else if (terms.toLowerCase() === 'no' || terms.toLowerCase() === 'n'){
  alert('Who don\'t read them either huh!!');
} else{
  alert('I guess you enjoy reading them too!');
}

for (var i = 0; i < 4; i++) {
  var favoriteNumber = prompt('What is my favorite number?');
  if(parseInt(favoriteNumber) === 8){
    i = 5;
    alert('Correct');
  } else if (parseInt(favoriteNumber) < 8){
    alert('Too Low');
  }else if (parseInt(favoriteNumber) > 8){
    alert('Too High');
  }else{
    alert('Now this time use a number.');
  }
}
