var readlinesync = require('readline-sync');

function log(data){
  console.log(data);
}

var score=0;
var userName = readlinesync.question("What is your Name? ");
log("Welcome "+ userName + ". Do you know Aditya?");

function play(question,answer){
  var userAns = readlinesync.question(question);

  if(userAns.toUpperCase()==answer.toUpperCase()){
    log("You are correct! ");
    score=score+5;
  }
  else
  {
    log("You are wrong! ");
    score=score-5;
  }
  log("Current score: "+ score);
  log("-----------------")
}

/*
var ques2 ={
  question: "What is my favourite sport? ",
  answer: "football",
}

var ques1 ={
  question: "Where do I live? ",
  answer: "Bangalore",
}
*/

var questions =[
  {
    question: "Where do I live?\n a: Bangalore\n b: Mumbai\n c: Belgaum\n",
    answer: "a"
  },
  {
    question: "What is my Favourite Sport?\n a: Cricket\n b: Football\n c: BasketBall\n ",
    answer: "b",
  },
  {
    question: "What is my Favourite TV Show?\n a: Prison Break\n b: Sherlock\n c: White Collar\n",
    answer: "a",
  }
];

var highestScore = "1. User1 = 15\n 2. User20 = 9\n" + userName + " = " + score;

for(var i=0; i<questions.length;i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}

log("YAYY, you scored "+ score);

log(highestScore);