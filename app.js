const options = ["pedra", "paper", "tisores", "sargantana", "spock"];

const whoWinsWho = {
    pedra: ["tisores", "sargantana"],
    paper: ["pedra", "spock"],
    tisores: ["paper","sargantana"],
    sargantana: ["paper","spock"],
    spock: ["tisores","pedra"]
};

const keymap = {
    q: "pedra",
    w: "paper",
    e: "tisores",
    r: "sargantana",
    t: "spock"
};

const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("pc-choice");
const resultElem = document.getElementById("result");

const draw = (user, pc) => user === pc;
const userWins = (user, pc) => whoWinsWho[user].includes(pc);

const getRandomChoice = () => options[Math.floor(Math.random()* options.length)]; 

const playTurn = (userSelection) => {
    const pcSelection = getRandomChoice();

    userChoice.innerHTML = userSelection;
    pcChoice.innerHTML = pcSelection;


    if (userWins(userSelection, pcSelection)) {
        return "Has Guanyat";
    } else if (draw(userSelection, pcSelection)) {
        return "Empat";
    } else {
        return "Has Perdut"
    }
};

document.querySelectorAll(".choice-button").forEach(button => {
    button.addEventListener("click", () => {
        const winner = playTurn(button.id);
        resultElem.innerHTML = winner;
    });
});

document.addEventListener("keydown", (ev) => {
    const winner = playTurn(keymap[ev.key])
    resultElem.innerHTML = winner;
});
