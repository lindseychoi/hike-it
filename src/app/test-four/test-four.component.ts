import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

// GLOBALS VARIABLES
//////////////////////////////////////////////////////////////////////
var quizQuestions =
[{ 
  question: "Which of the following provides interactivity on web pages?",
  choices: ["CSS", "HTML", "JavaScript"],
  answer: 2
},
{
  question: "Which of the following adds style to a web page?",
  choices: ["JavaScript", "CSS", "HTML"],
  answer: 1
},
{
  question: "Which of the following adds the structure to a web page?",
  choices: ["JavaScript", "HTML", "CSS"],
  answer: 1
}];

@Component({
  selector: 'app-test-four',
  templateUrl: './test-four.component.html',
  styleUrls: ['./test-four.component.css']
})


export class TestFourComponent implements OnInit {
  timeLeft = 35;
  interval: any;
  score: any;

  constructor() {
    console.log("called the constructor"); 
  }

  ngOnInit(): void {
    console.log("called the ngOnInit function");
  }

  startQuiz(){
    var button = document.getElementById("strButton");
    var tryAgainButton = document.getElementById("try-again-button");
    var questionSpaceId = "questionSpace";
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById("choiceSpace");
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById("choiceSpace1");
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById("choiceSpace2");
    this.score = 35;
    console.log("my score is now " + this.score);
    if (button != undefined) {
      button.style.display = "none";
    }
    else {
      console.log("null");
    }

    if (tryAgainButton != undefined) {
      tryAgainButton.style.display = "none";
    } else {
      console.log("no try again button at this time");
    }

    this.countDown();
    // ask questions
    this.setObjTextById(questionSpaceId, quizQuestions[0].question);

    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      this.createButton(choiceSpaceId, quizQuestions[0].choices[0]);
      this.createButton(choiceSpaceId1, quizQuestions[0].choices[1]);
      this.createButton(choiceSpaceId2, quizQuestions[0].choices[2]);
    } else {
      console.log("null");
    }
    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      choiceSpace.addEventListener("click", (event: Event) => {this.wrongToNextQues()}); 
      choiceSpace1.addEventListener("click", (event: Event) => {this.wrongToNextQues()});
      choiceSpace2.addEventListener("click", (event: Event) => {this.nextQuestion()});
      console.log("you are at the end of startQuiz");
    } else {
      console.log("null")
    }
    
  }

  //sets the correct question to render in the correct place in the component by giving the function the ID of HTML element and the question's text, this function is called in the startQuiz function when the start button is clicked initially.
  setObjTextById(objId:string, text:string) {
    var objectById = document.getElementById(objId);
    var questionText = text;

    if (objectById != undefined) {
     objectById.innerText = questionText;
    }
    else {
      console.log("null");
    }
  }

  //create three buttons that contain possible answers, each button is given three classes for styling. This function is called in the startQuiz function when the start button is clicked.
  createButton(parentId:string, buttonText:string) {  

    var parent = document.getElementById(parentId);

    if (parent != undefined) {
      var btn = document.createElement("button");
      btn.innerHTML = buttonText;
      btn.classList.add(
        "btn",
        "btn-primary",
        "answer-buttons"
      );
      btn.setAttribute("id", "answer-button");
      parent.appendChild(btn);
      return btn;
    }
    else {
      console.log("error cant find parent with id"+parentId);
      return null;
    }
  }

  wrongToNextQues() {
    console.log("i got clicked 1");
    this.score = 25;
    console.log("my score is now " + this.score);
    // this.timeLeft -= 5;
    this.nextQuestion();
  }

  clearQuestion() {

    var choiceSpace = document.getElementById("choiceSpace");
    var choiceSpace1 = document.getElementById("choiceSpace1");
    var choiceSpace2 = document.getElementById("choiceSpace2");

    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      choiceSpace.innerHTML = "";
      choiceSpace1.innerHTML = "";
      choiceSpace2.innerHTML = "";
    }

    else {
      console.log("null");
    }
  }

  nextQuestion() {
    this.clearQuestion();
    console.log("my score is currently " + this.score + " on the second question");
    var questionSpaceId = "questionSpace";
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById(choiceSpaceId);
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById(choiceSpaceId1);
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById(choiceSpaceId2);
    
    choiceSpace?.removeEventListener("click", (event: Event) => {this.wrongToNextQues()});
    choiceSpace1?.removeEventListener("click",(event: Event) => {this.wrongToNextQues()});
    choiceSpace2?.removeEventListener("click", (event: Event) => {this.nextQuestion()});


    this.setObjTextById(questionSpaceId, quizQuestions[1].question);

    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      this.createButton(choiceSpaceId, quizQuestions[1].choices[0]);
      this.createButton(choiceSpaceId1, quizQuestions[1].choices[1]);
      this.createButton(choiceSpaceId2, quizQuestions[1].choices[2]);
      choiceSpace.addEventListener("click", (event: Event) => {this.wrongToLastQuest()}); 
      choiceSpace1?.addEventListener("click", (event: Event) => {this.lastQuestion()});
      choiceSpace2?.addEventListener("click", (event: Event) => {this.wrongToLastQuest()});
    } else{
      console.log("choiceSpaces are NULL");
    }
  }

  wrongToLastQuest() {
    console.log("you clicked the answer and were sent to wrongToLastQuest function");
    this.score -= 10;
    console.log("my score is now " + this.score);
    // this.timeLeft -= 5;
    this.lastQuestion();  
  }

  lastQuestion() {
    console.log("you're on the last question and your score is " + this.score);
    this.clearQuestion();
    var questionSpaceId = "questionSpace";
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById(choiceSpaceId);
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById(choiceSpaceId1);
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById(choiceSpaceId2);
    
    choiceSpace?.removeEventListener("click", (event: Event) => {this.wrongToLastQuest()});
    choiceSpace1?.removeEventListener("click",(event: Event) => {this.lastQuestion()});
    choiceSpace2?.removeEventListener("click", (event: Event) => {this.wrongToLastQuest()});


    this.setObjTextById(questionSpaceId, quizQuestions[2].question);

    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      this.createButton(choiceSpaceId, quizQuestions[2].choices[0]);
      this.createButton(choiceSpaceId1, quizQuestions[2].choices[1]);
      this.createButton(choiceSpaceId2, quizQuestions[2].choices[2]);
      choiceSpace.addEventListener("click", (event: Event) => {this.wrongToGetScore()}); 
      choiceSpace1.addEventListener("click", (event: Event) => {this.getScore()});
      choiceSpace2.addEventListener("click", (event: Event) => {this.wrongToGetScore()});
    } else{
      console.log("choiceSpaces are NULL");
    }

  }

  wrongToGetScore () {
    console.log("you have clicked an answer and been sent to the wrongtoGetScore function");
    this.score -= 10;
    this.getScore();
  }

  getScore() {
    this.pauseTimer();
    console.log("you're final score at getScore is " + this.score);
    var finalCongrats = document.getElementById("questionSpace");
    var button = document.getElementById("try-again");
    this.clearQuestion();

    if (!finalCongrats) {
      console.log("finalCongrats is null");
      return
    } 

    if (this.timeLeft <= 0) {
      this.score = 0;
      finalCongrats.innerHTML = `You ran out of time! Your score is ${this.score}.`;
    } else if (this.score <= 0) {
      this.score = 0;
      finalCongrats.innerHTML = `Your score is ${this.score}! Better luck next time.`;
      if (button != undefined) {
        var startOver = document.createElement("button");
        button.setAttribute("id", "try-again-button");
        startOver.innerHTML = "Try Again?";
        startOver.classList.add(
          "btn",
          "btn-primary",
          "answer-buttons"
        );
        // startOver.addEventListener("click", (event: Event) => {this.clearTimerTryAgain()});
        startOver.addEventListener("click", (event: Event) => {this.startQuiz()}); 
        button.appendChild(startOver);
        return startOver;
      }
    } else {
      this.score > 0;
      finalCongrats.innerHTML = `Your score is: ${this.score}! Great Job!`;
    }

    if (button != undefined) {
      var startOver = document.createElement("button");
      button.setAttribute("id", "try-again-button");
      startOver.innerHTML = "Try Again?";
      startOver.classList.add(
        "btn",
        "btn-primary",
        "answer-buttons"
      );
      // startOver.addEventListener("click", (event: Event) => {this.clearTimerTryAgain()});
      startOver.addEventListener("click", (event: Event) => {this.startQuiz()}); 
      button.appendChild(startOver);
      return startOver;
    }
    else {
      console.log("error cant find parent with id"+ button);
      return null;
    }

  }

  countDown(){
    this.timeLeft = 35;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 35;
      }
    },1000)
    setTimeout(() => {this.getScore()},35000);
//     setTimeout(()=>{
//       this.saveAsDraft(this.blog);
//  }, timeInMilliseconds);
    console.log("the timer is " + this.interval);  
}


  pauseTimer() {
    var finalTime = document.getElementById("final-time");
    clearInterval(this.interval);
    if (!finalTime) {
      console.log("finalTime is null");
      return
    } 
  }
}