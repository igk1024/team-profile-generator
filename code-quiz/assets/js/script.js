var myQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: 
           ["strings",
           "booleans",
           "alerts",
            "numbers"],
        correctAnswer: 2
    },
    {   
        question: "Inside which HTML element do we put the JavaScript?",
        choices: 
            ["<script>",
            "<js>",
            "<html>",
            "<javascript>"],

        correctAnswer: 0 
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: 
           ["//This is a comment",
           "-This is a comment-",
           "<!--This is a comment-->",
            "None of the above"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: 
           ["*",
           "X",
           "=",
            "?"],
        correctAnswer: 2
    },{
        question: "How do you create a function in JavaScript?",
        choices: 
           ["function = myFunction()",
           "function myFunction()",
           "function:myFunction()",
            "None of the above"],
        correctAnswer: 1
    }
]

var header1El = document.getElementById("header1");
var contentEl = document.getElementById("content");
var startBtnEL = document.getElementById("startBtn");
var reStartBtnEL = document.getElementById("reStartBtn");
var storeBtnEl = document.getElementById("storeBtn");
var questionEL = document.getElementById("main");
var timeEl = document.querySelector("#time");
var feedbackEl = document.getElementById("feedback");
var choicesEl = document.getElementById("choices");
var finalIDEl = document.getElementById("finalID");
var finalScore = document.getElementById("finalScore");
var scoresFeedbackEl = document.getElementById("scoresFeedback");
var resultsEl = document.getElementById("results");
var highScoresEl = document.getElementById("highScores");
var score = 0;
var secondsLeft = 15*myQuestions.length;
var currentQuestionIndex = 0;
var currentQuestion = myQuestions[currentQuestionIndex];

function startQuiz () {
    header1El.innerHTML = " ";
    resultsEl.innerHTML = " ";
    finalIDEl.classList.add("hidden"); //Hide Initial input 
    startBtnEL = document.getElementById("startBtn");
    startBtnEL.classList.add("hidden"); //Hide Start button 
    getChoices();
    setTime(); 
}


function getChoices() {
    var currentQuestion = myQuestions[currentQuestionIndex];
    var titleEL = document.getElementById("main");
    titleEL.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach( function (choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "btn btn-success");
        choiceButton.setAttribute("id", "qzBtn");
        choiceButton.setAttribute("value", i);
        choiceButton.textContent = i + 1 + ". "+choice;
        choiceButton.onclick = questionClick;
        choicesEl.appendChild(choiceButton);
        }
    ) 
}
    //console.log(currentQuestionIndex);
    function questionClick (e) {
        
        e.preventDefault();
        // console.log(this.value);
        if (this.value != myQuestions[currentQuestionIndex].correctAnswer) {
            secondsLeft -= 10;
            if (secondsLeft < 0) {
                secondsLeft = 0;
            }
            
            timeEl.textContent = time;
            feedbackEl.innerHTML = "<br>"
            feedbackEl.textContent = "Wrong!";
        } else { //if answer is correct
            feedbackEl.textContent = "Right!";
            score++;
            //console.log(score); 
        }
        currentQuestionIndex++;
        if (currentQuestionIndex===myQuestions.length || secondsLeft <= 0) {
            quizResults();
            return;
        }
        getChoices();
        // console.log(currentQuestionIndex);
    }
    
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = `Time: ${secondsLeft}`;
            
            if(secondsLeft === 0 || currentQuestionIndex===myQuestions.length || secondsLeft <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
       
    }
 
    function quizResults() { //function that shows the results and stores it in the local storage
        questionEL.innerHTML = " ";
        choicesEl.innerHTML = ' ';
        header1El.innerHTML = "All Done!";
        choicesEl.innerHTML = "Enter your initials: ";
        finalScore.textContent = `Your score is: ${score}`;
        timeEl.classList.add("hidden");
        feedbackEl.classList.add("hidden");
        finalIDEl.classList.remove("hidden");
        finalScore.classList.remove("hidden");
        storeBtnEl.classList.remove("hidden");
    }
    
        function storeResults() {
        //console.log('started')
        localStorage.setItem(finalIDEl.value, score);
        reStartBtnEL.classList.remove("hidden");
        var scoresMessage = document.createElement("div");
        scoresMessage.innerText = `Results stored! Please view High Scores or refresh the page to start over.`;
        scoresFeedbackEl.prepend(scoresMessage);
    }

    function renderResults() {
        
        if (localStorage.length == 0) {
            resultsEl.innerHTML = " ";
            var resultsDiv = document.createElement("p");
            resultsDiv.innerText =`No results stored. Please take a test!`;
            resultsEl.appendChild(resultsDiv);
        } else {
        //console.log("clicked")
        resultsEl.innerHTML = " ";
        for (i = 0; i < localStorage.length; i++) {
            var testResult = localStorage.getItem(localStorage.key(i));
            var testKey = localStorage.key(i);
            var resultsDiv = document.createElement("p");
            //console.log(localStorage.key(i));
            //console.log(testResult);
            
            resultsDiv.innerText =`${testKey} score is ${testResult}`;
            resultsEl.appendChild(resultsDiv);
        }
    }}
    
function refresh () {
    location.reload();
}

startBtnEL.addEventListener("click", startQuiz);
storeBtnEl.addEventListener("click", storeResults);
highScoresEl.addEventListener("click", renderResults);
reStartBtnEL.addEventListener("click", refresh);