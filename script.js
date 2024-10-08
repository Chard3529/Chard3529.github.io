function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text("[" + minutes + ":" + seconds + "]");

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fourMinutes = 60 * 4,
        display = $('#timer');
    startTimer(fourMinutes, display);
});

function resetTimer() {
    $("#timer").hide();
    var fiveMinutes = 60 * 5,
        display = $('#timerTwo');
    startTimer(fiveMinutes, display)
}

