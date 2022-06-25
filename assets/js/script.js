var correct;

var secondsLeft = 60;

var timerEl = document.querySelector(".timer");

var startBtn = document.querySelector(".start");

var quiz = document.querySelector(".quiz");

var introduction = document.querySelector(".introduction");

var questionEl = document.querySelector(".question");

var buttonA = document.querySelector(".a");

var buttonB = document.querySelector(".b");

var buttonC = document.querySelector(".c");

var buttonD = document.querySelector(".d");

var answerButtons = document.querySelector("#answerButtons");

var correctAnswerEl = document.querySelector(".correctAnswer");

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
    },
    {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answers: {
            a: "2",
            b: "3",
            c: "1",
            d: "0"
        },
        correctAnswer: "c"
    },
    {
        question: "How do we stop a loop from from repeating indefinitely?",
        answers: {
            a: "We have to explicitly end the loop with the break keyword.",
            b: "When we have iterated through half of the condition.",
            c: "A loop will stop executing when the condition is true.",
            d: "A loop will stop executing when the condition is false."
        },
        correctAnswer: "d"
    },
    {
        question: "Which statement below is not true about functions in JavaScript?",
        answers: {
            a: "Functions are able to be recursive.",
            b: "A function must always be assigned an identifier",
            c: "Functions can be reused throughout your code",
            d: "Functions can receive arguments that can alter the output of a function"
        },
        correctAnswer: "b"
    },
    {
        question: "What are the two types of scope JavaScript uses?",
        answers: {
            a: "Outside and Inside",
            b: "Abroad and Local",
            c: "Surrounding and Inner",
            d: "Global and Local"
        },
        correctAnswer: "d"
    }
];

var questionIndex = 0;

function introPage() {
    quiz.style.display = "none";
}

introPage();

function startQuiz() {
    // Clear intructions
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
        timerEl.textContent = "Time: " + secondsLeft + " seconds";

        if (secondsLeft <= 0 || questionIndex > myQuestions.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append message
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Game over!";
}

function showQuestion() {
    var chosenQuestion = myQuestions[questionIndex];

    console.log(chosenQuestion);
    console.log(chosenQuestion.question);
    console.log(chosenQuestion.answers);
    console.log(questionIndex);
    console.log(myQuestions.length);

    if(questionIndex < myQuestions.length) {
        questionEl.textContent = chosenQuestion.question;
        buttonA.textContent = "a: " + chosenQuestion.answers.a;
        buttonB.textContent = "b: " + chosenQuestion.answers.b;
        buttonC.textContent = "c: " + chosenQuestion.answers.c;
        buttonD.textContent = "d: " + chosenQuestion.answers.d;
    }
}

function buttonOn(event) {
    var chosenQuestion = myQuestions[questionIndex];

    console.log(event.target.id);
    correct = myQuestions[questionIndex].correctAnswer; 
    userChoiceA = chosenQuestion.answers.a;
    userChoiceB = chosenQuestion.answers.b;
    userChoiceC = chosenQuestion.answers.c;
    userChoiceD = chosenQuestion.answers.d;
    console.log(correct);
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

startBtn.addEventListener("click", startQuiz);

answerButtons.addEventListener("click", buttonOn);