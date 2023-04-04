const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beat paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beat paper.";
        }
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerSelection = this.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        document.getElementById("result").textContent = result;
    });
});
