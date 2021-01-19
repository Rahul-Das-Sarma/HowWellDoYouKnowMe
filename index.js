var chalk = require('chalk');
var readlineSync = require('readline-sync');


var userName = readlineSync.question(chalk.yellow('Welcome to the How well do you know me Quiz App! What is your name? '))

var HighestScore = {name: "Rahul" , score: 7}

var score = 0;



console.log(chalk.green("Hi " + userName + "!"))
console.log(chalk.red("let's start the quiz! Remember that for each right answer you will be awarded 1 points and for the wrong answer -1"))

readlineSync.question(chalk.blue('Press Enter to start when You are Ready!!'))


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("You are right!"))
    score += 1
  }else {
    console.log(chalk.red("You are Wrong!"));
    score -= 1;
  }
  console.log(chalk.bold("Your Score is.. "+ score))
  console.log("......................")
}

var Allquestions = [{
  question: `What is my name?
             a. Rahul;
             b. Brijesh
             c. Lokesh 
             Ans. ` ,
  answer: "a"
},
{
  question: `What is my Highest qualification?
             a. Graduate
             b. 10th Pass
             c. 12th Pass
             Ans. ` ,
  answer: "a"
},
{
  question: `Which Stream did I graduate in?
             a. Science
             b. Commerce
             c. Arts
             Ans. ` ,
  answer: "b"
},
{
  question: ` Which stack I use to develop Projects?
             a. MERN
             b. MEAN
             c. Android
             Ans. ` ,
  answer: "a"
},
{
  question: `Which is my favourite color?
             a. black
             b. red
             c. blue
             Ans. ` ,
  answer: "a"
},
{
  question: `Where do I like to seat when I am bored?
             a. beach
             b. park
             c. garden 
             Ans. ` ,
  answer: "a"
},
{
  question: `which food i like the most?
             a. Chinese
             b. South Indian
             c. North Indian 
             Ans. ` ,
  answer: "c"
},
{
  question: `which is my favourite holiday destination?
             a. Mawkadok
             b. Mumbai
             c. Kolkata
             Ans. ` ,
  answer: "c"
}]

for (var i = 0; i < Allquestions.length ; i++){
  var currentQuestion = Allquestions[i]
  play(currentQuestion.question, 
  currentQuestion.answer)
}

if(HighestScore.score < score){
  console.log(chalk.red("Congrats! You have beaten the Highest Scorer.... send me the screen shot so that I may update your Name"))
}
console.log(chalk.green("Your HighestScore is... " + score))