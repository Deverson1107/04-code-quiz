var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var startbutton = document.querySelector(".button5");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var status = document.querySelector(".status");

//Opening layout.
function quizOpening() {
    banner.textContent = "Coding Quiz";
    question.textContent = "Welcome to the coding quiz! You will have 30 seconds to answer each question. Each correct answer will award 10 points. You will also recieve points based on how much time you have left after answering each quesrtion correctly."
    startbutton.textContent = "Start Quiz";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    status.textContent = "Correct!";
        startbutton.addEventListener("click", function () {
            question1();
            countdown();
    });
}
quizOpening();

//Timer.
var timer = document.querySelector(".timer");
function countdown() {
    var seconds = 30;
    var timerInterval = setInterval(function() {
        seconds --;
        timer.textContent = "Time left: " + seconds;  

        if (seconds === 0) {
            clearInterval (timerInterval);
        }
    }, 1000);
}

//Question 1 layout.
function question1() {
banner.textContent = "";
startbutton.style.display = "none";
question.textContent = "Commonly used data types DO NOT include:";

button1.style.display = "initial";
button1.textContent = "String";

button2.style.display = "initial";
button2.textContent = "Number";

button3.style.display = "initial";
button3.textContent = "Boolean";

button4.style.display = "initial";
button4.textContent = "Float";
}





