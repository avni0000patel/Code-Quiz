let questionEl = document.getElementById("question");

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
    },
    {
        question: "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
        answers: {
            a: "forEach() and pop()",
            b: "concat() and shift()",
            c: "push() and sort()",
            d: "pop() and unshift()"
        },
        correctAnswer: "d"
    },
    {
        question: "How do we access a value stored in an object?",
        answers: {
            a: "Dot notation, Curl bracket notation",
            b: "Equal notation, Abstract notation",
            c: "Dot notation, Bracket notation",
            d: "Period notation, Square bracket notation"
        },
        correctAnswer: "c"
    },
    {
        question: "What is an object method?",
        answers: {
            a: "Keys in an object that have a number assigned to it",
            b: "A function that takes an object for an argument",
            c: "A function associated with an object",
            d: "An array saved inside of an object"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the purpose of the 'This' operator?",
        answers: {
            a: "This' keyword allows us to specify certain variables to it which can be used in the global scope.",
            b: "This' is an array where we can easily store global variables for when we need access to them.",
            c: "This' keyword lets us make a reference to our window gives us access to special object methods.",
            d: "The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called."
        },
        correctAnswer: "d"
    },
    {
        question: "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
        answers: {
            a: "git merge test-branch",
            b: "git checkout test-branch",
            c: "git commit test-branch",
            d: "git change test-branch"
        },
        correctAnswer: "b"
    },
    {
        question: "From the reason listed below which is NOT true about JavaScript.",
        answers: {
            a: "JavaScript increases interactivity of our websites.",
            b: "Javascript allows developers to create richer interfaces for the users.",
            c: "JavaScript lets provide the user immediate feedback upon an action.",
            d: "JavaScripts handles numbers better than most programming languages."
        },
        correctAnswer: "d"
    }
];

let questionIndex = 0;

function showQuestion() {
  if (questionIndex >= myQuestions.length) return;
  var chosenQuestion = myQuestions[questionIndex];
  questionEl.innerHTML = chosenQuestion.question;
  Object.entries(chosenQuestion.answers).forEach(([letter,text]) => {
    var but = document.getElementById(letter);
    but.innerHTML = text
    but.dataset.correct = chosenQuestion.correctAnswer === letter;
  })
  questionIndex++;
}
showQuestion()

document.getElementById("buts").addEventListener("click", function(e) {
  const tgt = e.target;
  if (tgt.type && tgt.type === "button") {
    document.getElementById("result").innerText = tgt.dataset.correct === "true" ? "Correct" : "Incorrect";
  }
})

document.getElementById("next").addEventListener("click", showQuestion);