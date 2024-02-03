const qArray = [];

const qOne = {
    question: "What is the name of the big hero with the axe?",
    alt1: "Red Man" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt2: "Axe" + "<input type='radio' onchange='seeScore()' name='alt' value='1'>",
    alt3: "War Hero" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>"
}

const qTwo = {
    question: "Who says 'look at it go' ?",
    alt1: "Witch Doctor" + "<input type='radio' onchange='seeScore()' name='alt' value='1'>",
    alt2: "Drow Ranger" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt3: "Shadow Shaman" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>"
}

const qThree = {
    question: "What is the cost of talisman of evasion ?",
    alt1: "1100 gold" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt2: "1250 gold" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt3: "1300 gold" + "<input type='radio' onchange='seeScore()' name='alt' value='1'>"
}

const qFour = {
    question: "What does DOTA stand for?",
    alt1: "Defence of the Ancients" + "<input type='radio' onchange='seeScore()' name='alt' value='1'>",
    alt2: "Dept of the Aristocracy" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt3: "Daddy of the Anus" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>"
}

const qFive = {
    question: "How many hours have Henrik played DOTA?",
    alt1: "4784 hours" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt2: "5563 hours" + "<input type='radio' onchange='seeScore()' name='alt' value='0'>",
    alt3: "5849 hours" + "<input type='radio' onchange='seeScore()' name='alt' value='1'>"
}

qArray.push(qOne);
qArray.push(qTwo);
qArray.push(qThree);
qArray.push(qFour);
qArray.push(qFive);