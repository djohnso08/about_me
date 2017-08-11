'use strict';

alert('Welcome to the guessing game where everything is made up and the points don\'t matter like the street signs to a cab driver!');
var correctanswer = 0;

var userName = '';

function functionName() {
  var name = prompt('What is your name contestant?');
  console.log(name);
  userName = name;
}
functionName();

function pictureQuestion() {
  var backgroundpicture = prompt('Is the background picture me?');
  console.log(backgroundpicture);
  if (backgroundpicture.toLowerCase() === 'yes' || backgroundpicture.toLowerCase() === 'y') {
    correctanswer++;
    alert('Yes you are correct! Your points are like American Express: PRICELESS.');
  } else if (backgroundpicture.toLowerCase() === 'no' || backgroundpicture.toLowerCase() === 'n') {
    alert('Congratulations you recieve -1,000 points.');
  } else {
    alert('It\'s not to late to go back.');
  }
}
pictureQuestion();

function travelQuestion() {
  var travel = prompt('Have I traveled to Dubai, Singapore, and Hawaii?');
  console.log(school);
  if(travel.toUpperCase() === 'YES' || travel.toUpperCase() === 'Y'){
    correctanswer++;
    alert('So close, but I have traveled to Dubai and Singapore.');
  } else if (travel.toUpperCase() === 'NO' || travel.toUpperCase() === 'N') {
    alert('You have been watching me haven\'t you!');
  } else{
    alert('Can\'t get away that easy!');
  }
}
travelQuestion();

function climbQuestion() {
  var climb = prompt('Have I climbed Mt. Rainer?');
  console.log(climb);
  if
  (climb.toLowerCase() === 'yes' || climb.toLowerCase() === 'y'){
    correctanswer++;
    alert('I must be the world\'s most interesting man, but no I have not climbed YET!');
  } else if (climb.toLowerCase() === 'no' || climb.toLowerCase() === 'n') {
    alert('I used apple maps to get here! Congrats! 10,000 points.');
  } else{
    alert('ERROR ERROR ERROR');
  }
}
climbQuestion();

function occupationQuestion() {
  var occupation = prompt('Did I go to school to become a Physician Assistant?');
  console.log(occupation);
  if (occupation.toUpperCase() === 'YES' || occupation.toUpperCase() === 'Y'){
    correctanswer++;
    alert('I got your attention now didn\'t I! 35,000 points');
  } else if (occupation.toUpperCase() === 'NO' || occupation.toUpperCase() === 'N'){
    alert('');
  } else {
    alert('What kind of answer was that?');
  }
}
occupationQuestion();

function testQuestion() {
  var terms = prompt('Have I ever clicked \"i agree\" on the terms and conditions, without reading it?');
  console.log(terms);
  if (terms.toLowerCase() === 'yes' || 'y'){
    correctanswer++;
    alert('Thank you for agreeing to the terms and conditions! 20,000 points');
  } else if (terms.toLowerCase() === 'no' || terms.toLowerCase() === 'n'){
    alert('Who don\'t read them either huh!!');
  } else{
    alert('I guess you enjoy reading them too!');
  }
}
testQuestion();

function favoriteNumberFunction() {
  for (var i = 0; i < 4; i++) {
    var favoriteNumber = prompt('What is my favorite number?');
    console.log(favoriteNumber);
    if(parseInt(favoriteNumber) === 8){
      correctanswer++;
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
}
favoriteNumberFunction();

function stateLivedinQuestionFunction() {
  var statesLiveinArray = ['Arizona','Oklahoma','Oregon','Tennessee','Kansas','Virginia'];
  for (var i = 0; i < 6; i++) {
    var stateLivedinQuestion = prompt('Can you guess a state that I have lived in besides Washington?');
    console.log(stateLivedinQuestion);
    if(statesLiveinArray.includes(stateLivedinQuestion)){
      correctanswer++;
      alert('Correct!');
      break;
    } else {
      alert('Keep Trying!');
    }
  }
  alert ('Congratulations ' + name + ' you got ' + correctanswer + ' of 7 right!');
}
stateLivedinQuestionFunction();
