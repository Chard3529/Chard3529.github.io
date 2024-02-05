let round = 0;
let score = 0;
let started = false;
let gameEnd = false;

const textOutArrow = (string) => document.getElementById("textOut").innerText = string;
const altOutArrow = (string) => document.getElementById("altOut").innerHTML = string;

const buttonLabel = (string) => document.getElementById("butt").value = string;

function clickButton() {

    if(started) {
        if(!(qArray[round] == undefined)){
            hideButt();
            showQuestion();
        }
        if(qArray[round] == undefined) {
            if(gameEnd){
                location.reload();
            }
            if(!gameEnd) {
                gameEnd = true;
                buttonLabel("Start again!")
                endOfQuiz();
            }
        }
    }
    if(!started) {
       buttonLabel("Next question");
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

    textOutArrow(textOut);
    altOutArrow(altOut);
}

function seeScore() {
    const a = select();
    const out = checkAnswer(a);

    altOutArrow("");
    textOutArrow("Your answer is " + out + "\n" + "Your score is: " + score);
    round ++;
    showButt();
}

function endOfQuiz(){
    let outText = "";
    let out = "";
    const percent = (score / qArray.length) * 100;

    if(percent === 100) {
        out += "Perfect Job!"
    }
    if(100 > percent && percent >= 50) {
        out += "Great job!"
    }
    if(50 > percent  && percent > 0) {
        out += "Keep trying!"
    }
    if(percent === 0) {
        out += "Pathetic excuse for a human!"
    }

    outText += "No more questions! \nYou got " + Math.round(percent) + "% of the questions right" + "\n" + out;
    altOutArrow("");
    textOutArrow(outText);

}

