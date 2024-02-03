let round = 0;
let score = 0;
let started = false;

function clickButton() {
    if(started) {
        if((!(qArray[round] == undefined))){
            hideButt();
            showQuestion();
        }
        if(qArray[round] == undefined) {
            hideButt();
            endOfQuiz();
        }

    }
    if(!started) {
       document.getElementById("butt").value = "Next question";
       showQuestion();
       hideButt();
       started = true;
   }
}

function hideButt() {
    document.getElementById("butt").style.visibility = "hidden";
}
function showButt() {
    document.getElementById("butt").style.visibility = "visible";
}
function select() {
    let altArray = document.getElementsByName("alt");
    for(let alt of altArray) {
        if (alt.checked) {
            return Number(alt.value);
        }
    }
}

function checkAnswer(a){
    let out = "";
    if (a === 1) {
        score ++;
        out += "Correct!";
    }
    if (a === 0) {
        score --;
        out += "Wrong!"
    }
    return out;
}

function showQuestion() {
    let textOut = "";
    let altOut = "";

    textOut += qArray[round].question;
    altOut += "<li>" + qArray[round].alt1 + "</li>" +
        "<li>" + qArray[round].alt2 + "</li>" +
        "<li>" + qArray[round].alt3 + "</li>";

    document.getElementById("textOut").innerText = textOut;
    document.getElementById("altOut").innerHTML = altOut;
}

function seeScore() {
    const a = select();
    const out = checkAnswer(a);

    document.getElementById("altOut").innerHTML = "";
    document.getElementById("textOut").innerText = "Your answer is " + out + "\n" + "Your score is: " + score;
    round ++;
    showButt();
}

function endOfQuiz(){
    let out = "";
    out += "No more questions! \nYou got " + score + " points! Good Job!";

    document.getElementById("textOut").innerText = out;
    document.getElementById("altOut").innerHTML = "";

}

