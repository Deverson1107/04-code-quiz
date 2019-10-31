var score = 0;
var highscore = 0;
var highbanner = document.querySelector(".highscore")
var scorebanner = document.querySelector(".score");
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var status;
var seconds = 180;
var a1;
var a2;
var a3;
var a4;

//Show initial score.
scorebanner.textContent = "Score: " + score;
localStorage.getItem("highscore");
highbanner.textContent = "Highscore: " + localStorage.getItem("highscore");

//Opening layout.
function quizopening() {
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    document.body.children[3].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });
}
quizopening();

//Timer.
function countdown() {
    var timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds === 0) {
            clearInterval (timerInterval);
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

//Takes off 10 seconds from the timer.
function stopcountdown() {
    seconds -= 10;
    console.log(seconds);
}

//Question 1 layout.
function question1() {
    a1.remove();
    countdown();
    question.textContent = "Commonly used data types DO NOT include:";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "String";
    document.body.children[3].appendChild(a1);
    a1.addEventListener("click", function () {
        question2();
        stopcountdown();  
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Boolean";
    document.body.children[3].appendChild(a2);
    a2.addEventListener("click", function () {
        question2();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Number";
    document.body.children[3].appendChild(a3);
    a3.addEventListener("click", function () {
        question2();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Float";
    document.body.children[3].appendChild(a4);
    a4.addEventListener("click", function () {
        question2();
        score += 10;
        scorebanner.textContent = "Score: " + score;
    });
}

//Question 2 layout.
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Using ___ statement is how you test for a specific condition.";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "For";
    document.body.children[3].appendChild(a1);
    a1.addEventListener("click", function () {
        question3();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "If";
    document.body.children[3].appendChild(a2);
    a2.addEventListener("click", function () {
        question3();
        score +=10;
        scorebanner.textContent = "Score: " + score;
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Select";
    document.body.children[3].appendChild(a3);
    a3.addEventListener("click", function () {
        question3();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Switch";
    document.body.children[3].appendChild(a4);
    a4.addEventListener("click", function () {
        question3();
    });
}

//Question 3 layout.
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Inside which HTML element (< >) do we put the JavaScript?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "js";
    document.body.children[3].appendChild(a1);
    a1.addEventListener("click", function () {
        postquiz();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "scripting";
    document.body.children[3].appendChild(a2);
    a2.addEventListener("click", function () {
        postquiz();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "script";
    document.body.children[3].appendChild(a3);
    a3.addEventListener("click", function () {
        postquiz();
        score +=10;
        scorebanner.textContent = "Score: " + score;
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "javascript";
    document.body.children[3].appendChild(a4);
    a4.addEventListener("click", function () {
        postquiz();
    });
}

//Post-quiz layout.
function postquiz() {
    seconds = 1;
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Quiz Complete! Your score is " + score + ". Do you want to take the quiz again?";

    localStorage.setItem("highscore", highscore);
    highscore = parseInt(localStorage.getItem("highscore"));
    if (score > highscore) {
        highscore = score;
        highbanner.textContent = "Highscore: " + highscore;
        localStorage.setItem("highscore", highscore);
    }

    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Restart Quiz";
    document.body.children[3].appendChild(a1);
    a1.addEventListener("click", function () {
        location.reload();
    });
}









