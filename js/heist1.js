
let timeLeft = 5 * 60;
const timerElement = document.getElementById("timer");



function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;



    if (timeLeft === 0) {

        location.reload();
    } else {
        timeLeft--;
        setTimeout(updateTimer, 1000); 
    }
}

updateTimer();