/**
 * Remember square 1. 
 */
// console.log("Hello World!");


/**
 * Get reference to HTML elements
 */
// Buttons
const rockBTN = document.querySelector("#rock");
const paperBTN = document.querySelector("#paper");
const scissorsBTN = document.querySelector("#scissors");
// divs
const results = document.querySelector("#results");
const score = document.querySelector("#score");

/**
 * Game Variables
 */
let playerScore = 0, computerScore = 0;

/**
 * Game UI
 */
let newResultsText;

/***
 * Add Event Listeners
 */
rockBTN.addEventListener("click", () => {
    newResultsText = playRound("ROCK", getComputerChoice());
    updateResults(newResultsText);
    resetResults();
    updatePlayerScore(playerScore, computerScore);
});
paperBTN.addEventListener("click", () => {
    newResultsText = playRound("PAPER", getComputerChoice());
    updateResults(newResultsText);
    resetResults();
    updatePlayerScore(playerScore, computerScore);

});

scissorsBTN.addEventListener("click", () => {
    newResultsText = playRound("SCISSORS", getComputerChoice());
    updateResults(newResultsText);
    resetResults();
    updatePlayerScore(playerScore, computerScore);
});



/***
 * Use RNG to determine computer choice.
 */
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


/***
 * Use prompt to collect player choice input.
 */
function getPlayerChoice() {
    let playerChoice = prompt("Choose:  Rock.   Paper.   Scissors.");
    return playerChoice.toUpperCase();
}

/***
 * Play a single round of Rock, Paper, Scissors.
 * Compare player and computer choices and determine winner.
 * 
 */
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
            return "Rock beats scissors.";
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

/***
 * Start the game by playing a number of rounds.
 */
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    return "Player score: " + playerScore + " Computer score: " + computerScore;
}

/**
 * Update results div with new results text. 
 */
function updateResults(update) {
    results.textContent = update;
}

/**
 * Reset results div.
 */
function resetResults() {
    newResultsText = "";
}

/***
 * Update score
 */
function updatePlayerScore(playerScore, computerScore) {
    score.textContent = "Score: " + playerScore + " - " + computerScore;
    checkWinConditions();
}

/**
 * Check for winner.
 * A player wins when they reach a score of 5.
 */
function checkWinConditions() {
    let winText;
    if (playerScore >= 5) {
        winText = "Player WON!"
        updateResults(winText);
    }
    else if (computerScore >= 5) {
        winText = "Computer WON!";
        updateResults(winText);
    }
}