'use strict';
window.setTimeout(function(){


alert('Welcome to the guessing game where everything is made up and the points don\'t matter like the street signs to a cab driver!');
var correctanswer = 0;

var userName = '';

function contestant() {
  var name = prompt('What is your name contestant?');
  console.log('Conestant\'s name is ' + name + '.');
  userName = name;
}
contestant();

function commercialdiver() {
  var diver = prompt('Am I a diver?');
  console.log(diver + ' i am/are not a diver.');
  if (diver.toLowerCase() === 'yes' || diver.toLowerCase() === 'y') {
    correctanswer++;
    alert('Yes you are correct! Your points are like American Express: PRICELESS.');
  } else if (diver.toLowerCase() === 'no' || diver.toLowerCase() === 'n') {
    alert('Congratulations you recieve -1,000 points.');
  } else {
    alert('It\'s not to late to go back.');
  }
}
commercialdiver();

function travel() {
  var leisure = prompt('Have I traveled to Dubai, Singapore, and Greece?');
  console.log(leisure + ' I have/haven\'t traveled to Dubai, Singapore, and Greece.');
  if(leisure.toUpperCase() === 'YES' || leisure.toUpperCase() === 'Y'){
    correctanswer++;
    alert('You have been watching me haven\'t you!');
  } else if (leisure.toUpperCase() === 'NO' || leisure.toUpperCase() === 'N') {
    alert('So close, but not quite right!');
  } else{
    alert('Can\'t get away that easy!');
  }
}
travel();

function climb() {
  var rainier = prompt('Have I climbed Mt. Rainier?');
  console.log(climb);
  if
  (rainier.toLowerCase() === 'yes' || rainier.toLowerCase() === 'y'){
    correctanswer++;
    alert('I must be the world\'s most interesting man, but no I have not climbed YET!');
  } else if (rainier.toLowerCase() === 'no' || rainier.toLowerCase() === 'n') {
    alert('I used apple maps to get here! Congrats! 10,000 points.');
  } else{
    alert('ERROR ERROR ERROR');
  }
}
climb();

function school() {
  var physicianAssistant = prompt('Did I go to school to become a Physician Assistant?');
  console.log(physicianAssistant + ' I did/did\'t go to school to become a Physician Assistant.');
  if (physicianAssistant.toUpperCase() === 'YES' || physicianAssistant.toUpperCase() === 'Y'){
    correctanswer++;
    alert('I got your attention now didn\'t I! 35,000 points');
  } else if (physicianAssistant.toUpperCase() === 'NO' || physicianAssistant.toUpperCase() === 'N'){
    alert('');
  } else {
    alert('What kind of answer was that?');
  }
}
school();

function conditions() {
  var terms = prompt('Have I ever clicked \"i agree\" on the terms and conditions, without reading it?');
  console.log(terms + 'have/have\'t clicked on the terms and conditions, without reading it?');
  if (terms.toLowerCase() === 'yes' || 'y'){
    correctanswer++;
    alert('Thank you for agreeing to the terms and conditions! 20,000 points');
  } else if (terms.toLowerCase() === 'no' || terms.toLowerCase() === 'n'){
    alert('Who don\'t read them either huh!!');
  } else{
    alert('I guess you enjoy reading them too!');
  }
}
conditions();

function favoriteNumber() {
  for (var i = 0; i < 4; i++) {
    var number = prompt('What is my favorite number?');
    console.log('My favorite number is' + number);
    if(parseInt(number) === 8){
      correctanswer++;
      i = 5;
      alert('Correct');
    }else if (parseInt(number) < 8){
      alert('Too Low');
    }else if (parseInt(number) > 8){
      alert('Too High');
    }else{
      alert('Now this time use a number.');
    }
  }
}
favoriteNumber();

function Livedin() {
  var statesLive = ['Arizona','Oklahoma','Oregon','Tennessee','Kansas','Virginia'];
  for (var i = 0; i < 6; i++) {
    var guessState = prompt('Can you guess a state that I have lived in besides Washington?');
    console.log('I have/haven\'t lived in' + guessState);
    if(statesLive.includes(guessState)){
      correctanswer++;
      alert('Correct! The possible answers were ' + statesLive + '.');
      break;
    }if (!statesLive.includes(guessState)){
      alert('Keep Trying!');
    }else{
      alert('Nice Try! The states were ' + statesLive + '.' );
    }
  }
  alert (userName + ' you got ' + correctanswer + ' of 7 correct. Thanks for playing!');
}
  Livedin();
},0);
