var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score =0;
var userName= readlineSync.question("Enter your name: ")

console.log("Hi " + chalk.yellow(userName) + " Welcome to GK quiz game !");


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgYellow.italic("Right"));
    score = score+1;
  }else
  {
    console.log(chalk.bgRed.italic("Wrong"));
    score = score-1;
  }
} 

var questions= [
  {
    question: chalk.green(`How many states are in india
    A.  29
    B.  28
    C.  30 
    `),
    answer:"B"
  },
  {
    question: chalk.green(`Which state has the largest area?
    A.  Bangalore
    B.  Rajasthan
    C.  UP 
    `),
    answer:"B" 
  },
  {
    question: chalk.green(`Largest Mammal on earth",
    A.  Rhino
    B.  Giraffe
    C.  Elephant 
    `),
    answer:"C" 
  }
];

for (var i=0; i< questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
              currentQuestion.answer);
}

console.log("-------");
console.log(chalk.cyan.bold("Final score is: ", score));

console.log("-------");
console.log(`Top Performer of all time 
Vishal: 3
Akash: 3
Sam: 2`);

if (score > 2) {
  console.log("Yay! You scored well...");
} else {
  console.log("Better luck next time");
}


console.log(chalk.bgMagenta(`If you scored more than them, then pls send screenshot for updatation`));
