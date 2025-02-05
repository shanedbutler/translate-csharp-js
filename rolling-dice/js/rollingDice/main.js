// Put your code here
const roll = () => {
    const dieValue = Math.floor(Math.random() * 6) + 1;
    let die = {}
    switch (dieValue) {
        case 1:
            die.unicode = "\u2680";
            die.value = dieValue;
            break;
        case 2:
            die.unicode = "\u2681";
            die.value = dieValue;
            break;
        case 3:
            die.unicode = "\u2682";
            die.value = dieValue;
            break;
        case 4:
            die.unicode = "\u2683";
            die.value = dieValue;
            break;
        case 5:
            die.unicode = "\u2684";
            die.value = dieValue;
            break;
        case 6:
            die.unicode = "\u2685";
            die.value = dieValue;
            break;
    }
    return die
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++){
    const die1 = roll();
    const die2 = roll();

    let message = `${die1.unicode} + ${die2.unicode} == ${die1.value + die2.value}`;
    if (die1.value === die2.value) {
        message = message + " DOUBLES!";
    }

    console.log(message)
}
