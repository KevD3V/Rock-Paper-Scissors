console.log("Hello World!");

const rockBTN = document.querySelector("#rock");
const paperBTN = document.querySelector("#paper");
const scissorsBTN = document.querySelector("#scissors");

let playerScore = 0, computerScore = 0;

rockBTN.addEventListener("click", () => {
    console.log(playRound("ROCK", getComputerChoice()));
});
paperBTN.addEventListener("click", () => {
    console.log(playRound("PAPER", getComputerChoice()));
});

scissorsBTN.addEventListener("click", () => {
    console.log(playRound("SCISSORS", getComputerChoice()));
});




// console.log(getComputerChoice());
// console.log(getHumanChoice());
// console.log(playGame(5));



function getComputerChoice() {
    let choice = Math.random() * 3;

    if (choice < 1) {
        return "PAPER";
    }
    else if (choice < 2) {
        return "SCISSORS";
    }
    else if (choice < 3) {
        return "ROCK";
    }
    else {
        return "Something bad happened...";
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Choose:  Rock.   Paper.   Scissors.");
    return humanChoice.toUpperCase();
}

function playRound(player, computer) {
    if (player === "ROCK") {
        if (computer === "ROCK") {
            // Tie game.
            return "DRAW!";
        }
        else if (computer === "PAPER") {
            // Computer wins.
            computerScore++;
            return "Paper beats rock.";
        }
        else if (computer === "SCISSORS") {
            // Player wins. 
            playerScore++;
            return "Rock beats scissors.";
        }
    }
    else if (player === "PAPER") {
        if (computer === "ROCK") {
            // Player Wins.
            playerScore++;
            return "Paper beats rock.";
        }
        else if (computer === "PAPER") {
            // Tie game.
            return "Draw";
        }
        else if (computer === "SCISSORS") {
            // Computer wins. 
            computerScore++;
            return "Scissors beats paper.";
        }
    }
    else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            // Computer wins. 
            computerScore++;
            return "Scissors beats rock.";
        }
        else if (computer === "PAPER") {
            // Player wins.
            playerScore++;
            return "Scissors beats paper.";
        }
        else if (computer === "SCISSORS") {
            // Tie game.
            return "Draw";
        }
    } else {
        // If player has not entered a valid option, player loses
        computerScore++;
        return "No cheating. Round win goes to computer.";
    }

    console.log("Round triggered.");
}


function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    return "Player score: " + playerScore + " Computer score: " + computerScore;
}