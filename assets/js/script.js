var secondsLeft = 60;

var time = document.querySelector(".time");

var introduction = document.querySelector(".introduction");

var quiz = document.querySelector(".quiz");

var question = document.querySelector(".question");

var finalScore = document.querySelector("#finalScore");

var score = document.querySelector("#score")

var highScores = document.querySelector("#highScores");

var initials = document.querySelector("#initials");

var scoreListEl = document.querySelector("#scoreList");

var scoreList = [];

// Buttons
var viewHighScore = document.querySelector("#viewHighScore");

var start = document.querySelector("#start");

var answerButtons = document.querySelector("#answerButtons");

var buttonA = document.querySelector("#a");

var buttonB = document.querySelector("#b");

var buttonC = document.querySelector("#c");

var buttonD = document.querySelector("#d");

var submitScore = document.querySelector("#submitScore");

var goBack = document.querySelector("#goBack");

var clearScore = document.querySelector("#clearScore");

var myQuestions = [
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        answers: {
            a: "Inside the <footer> element",
            b: "Inside the <head> element",
            c: "Inside the <link> element",
            d: "Inside the <script> element"
        },
        correctAnswer: "d"
    },
    {
        question: "What operator is used to assign a value to a declared variable?",
        answers: {
            a: "Double-equal (==)",
            b: "Question mark (?)",
            c: "Colon (:)",
            d: "Equal sign (=)"
        },
        correctAnswer: "d"
    },
    {
        question: "What are the six primitive data types in JavaScript?",
        answers: {
            a: "string, num, falsy, bigInt, symbol, undefined",
            b: "sentence, int, truthy, bigInt, symbol, undefined",
            c: "string, number, boolean, bigInt, symbol, undefined",
            d: "sentence, float, data, bigInt, symbol, undefined"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the difference between && and ||?",
        answers: {
            a: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
            b: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
            c: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
            d: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true."
        },
        correctAnswer: "d"
    },
    {
        question: "How do we declare a conditional statement in JavaScript?",
        answers: {
            a: "for loop",
            b: "difference...between",
            c: "if...else",
            d: "while loop"
        },
        correctAnswer: "c"
    }
];

var questionIndex = 0;

function introPage() {
    quiz.style.display = "none";
    finalScore.style.display = "none";
    highScores.style.display = "none";

}

introPage();

function startQuiz() {
    quiz.style.display = "block";
    introduction.style.display = "none";

    timer();
    showQuestion();
}

function timer() {
    // Timer
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--; // Decrement by 1
        time.textContent = "Time: " + secondsLeft + " seconds";

        if (secondsLeft <= 0 || questionIndex >= myQuestions.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append message
            // sendMessage();
            quiz.style.display = "none";
            finalScore.style.display = "block";

            final();
        }

    }, 1000);
}

function sendMessage() {
    time.textContent = "Game over!";
}

function showQuestion() {
    var chosenQuestion = myQuestions[questionIndex];

    console.log(questionIndex);
    console.log(myQuestions.length);

    if (questionIndex < myQuestions.length) {
        question.textContent = chosenQuestion.question;
        console.log(chosenQuestion.question);
        buttonA.textContent = "a: " + chosenQuestion.answers.a;
        buttonB.textContent = "b: " + chosenQuestion.answers.b;
        buttonC.textContent = "c: " + chosenQuestion.answers.c;
        buttonD.textContent = "d: " + chosenQuestion.answers.d;
        console.log(chosenQuestion.answers);
    }
}

function buttonOn(event) {
    var chosenQuestion = myQuestions[questionIndex];

    var correct = myQuestions[questionIndex].correctAnswer;

    console.log(event.target.id);
    console.log(correct);

    userChoiceA = chosenQuestion.answers.a;
    userChoiceB = chosenQuestion.answers.b;
    userChoiceC = chosenQuestion.answers.c;
    userChoiceD = chosenQuestion.answers.d;
    // if the user clicked button and correct answer is that button, return that button is correct
    if (event.target.id === "a" && correct === "a") {
        console.log(userChoiceA);
        alert("Choice A is correct!");
        questionIndex++;
        console.log(questionIndex);
        showQuestion();
    } else if (event.target.id === "b" && correct === "b") {
        console.log(userChoiceB);
        alert("Choice B is correct!");
        questionIndex++;
        console.log(questionIndex);
        showQuestion();
    } else if (event.target.id === "c" && correct === "c") {
        console.log(userChoiceC);
        alert("Choice C is correct!");
        questionIndex++;
        console.log(questionIndex);
        showQuestion();
    } else if (event.target.id === "d" && correct === "d") {
        console.log(userChoiceD);
        alert("Choice D is correct!");
        questionIndex++;
        console.log(questionIndex);
        showQuestion();
    } else {
        alert("Not Correct. The correct answer is " + chosenQuestion.correctAnswer + ".");
        questionIndex++;
        console.log(questionIndex);
        showQuestion();
        secondsLeft = secondsLeft - 10;
        console.log(secondsLeft);
    }
}

function final(event) {

    finalScore.style.display = "block";
    highScores.style.display = "none";

    var scoreNumber = secondsLeft;
    console.log(scoreNumber);
    score.textContent = "Your final score is: " + scoreNumber;
}

function addScore(event) {
    event.preventDefault();

    finalScore.style.display = "none";
    highScores.style.display = "block";

    var scoreNumber = secondsLeft;
    var initialsValue = initials.value.toUpperCase();
    var together = initialsValue + scoreNumber;
    console.log(together);

    scoreList.push(together);
    console.log(scoreList);

    scoreList = scoreList.sort(function(a, b) {
        if(a > b) return -1;
        if(a < b) return 1;
    });

    console.log(scoreList);


    scoreListEl.innerHTML = "";
    for (i = 0; i < scoreList.length; i++) {
        var theScoreList = scoreList[i];

        var li = document.createElement("li");
        li.textContent = theScoreList;
        console.log(li.textContent);
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    // Stringify and set key in localStorage to scoreList array
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    console.log(scoreList);
}

function displayScores() {
    // Get stored scoreList from localStorage
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));
    console.log(storedScoreList);

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

function clear() {
    localStorage.clear();
    scoreListEl.innerHTML = "";
}

viewHighScore.addEventListener("click", function () {
    if (highScores.style.display === "none") {
        highScores.style.display = "block";
    }
});

start.addEventListener("click", startQuiz);

answerButtons.addEventListener("click", buttonOn);

submitScore.addEventListener("click", addScore);

goBack.addEventListener("click", function () {
    highScores.style.display = "none";
    introduction.style.display = "block";
    secondsLeft = 60;
    time.textContent = "Time: " + secondsLeft + " seconds";
    questionIndex = 0;
});

clearScore.addEventListener("click", clear);