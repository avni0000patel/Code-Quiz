var timerEl = document.querySelector(".timer");

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--; // Decrement by 1
        timerEl.textContent = "Time: " +secondsLeft + " seconds";


        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

setTime();