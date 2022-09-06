import { Component, OnInit } from '@angular/core';

// GLOBALS VARIABLES
//////////////////////////////////////////////////////////////////////

var timeLeft = 35;
var timeEl = document.getElementById("timer");
var userChoices = document.getElementsByTagName("input[type:button]");
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

const space1 = document.getElementById("choiceSpace")
const space2 = document.getElementById("choiceSpace1")
const space3 = document.getElementById("choiceSpace2")

@Component({
  selector: 'app-test-four',
  templateUrl: './test-four.component.html',
  styleUrls: ['./test-four.component.css']
})
export class TestFourComponent implements OnInit {

  constructor() {
    console.log("called the constructor"); 
  }

  ngOnInit(): void {
    console.log("called the ngOnInit function");
  }

  startQuiz(){
    var button = document.getElementById("strButton");
    var questionSpaceId = "questionSpace";
    var questionCounter = 0;
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById("choiceSpace");
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById("choiceSpace1");
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById("choiceSpace2");

    console.log(quizQuestions);

    if (button != undefined) {
      button.style.display = "none";
    }
    else {
      console.log("null");
    }

    // ask questions
    this.setObjTextById(questionSpaceId, quizQuestions[0].question);

    if (choiceSpace && choiceSpace1 && choiceSpace2) {
      this.createButton(choiceSpaceId, quizQuestions[questionCounter].choices[0]);
      this.createButton(choiceSpaceId1, quizQuestions[questionCounter].choices[1]);
      this.createButton(choiceSpaceId2, quizQuestions[questionCounter].choices[2]);
    } else{
      console.log("null");
    }
    
  }

  //call current question in a function so that the card can clear before the next question appears
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
      parent.appendChild(btn);
      return btn;
    }
    else {
      console.log("error cant find parent with id"+parentId);
      return null;
    }
  }
}
