var timerEl = document.querySelector(".timer");

var startBtn = document.querySelector(".start");

var container = document.querySelector(".container");

var secondsLeft = 60;

function startQuiz() {
    container.style.display = "none";

    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--; // Decrement by 1
        timerEl.textContent = "Time: " +secondsLeft + " seconds";
    
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append message
            sendMessage();
        }
    
    }, 1000);
    
    function sendMessage() {
        timerEl.textContent = "Game over!";
    }

}

startBtn.addEventListener("click", startQuiz);
