let interval;

function startTimer(minutes) {
    let totalSeconds = minutes * 60;
    clearInterval(interval);

    interval = setInterval(() => {
        if (totalSeconds < 0)
        {
            countdownDisplay.innerHTML = `C'est termine !`;
            clearInterval(interval);
            return ;
        }
        let seconds = totalSeconds % 60;
        minutes = Math.floor(totalSeconds / 60);
        countdownDisplay.innerHTML = `${minutes} : ${seconds}`;
        totalSeconds--;
    }, 1000);
}

form.addEventListener("submit", (e) => {
    clearInterval(interval);
    e.preventDefault();
    startTimer(choice.value);
    choice.value = "";
})