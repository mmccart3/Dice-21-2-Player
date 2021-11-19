const diceImage = document.getElementById("diceImage");
const player1ScoreDisplay = document.getElementById("scoreRecord1");
const player2ScoreDisplay = document.getElementById("scoreRecord2");
let player1Score = 0;
let player2Score = 0;
let player1Lost = "no";
let player2Lost = "no";
let whoIsPlaying ="Player1"
currentPlayerDisplay.innerHTML = `Current player is ${whoIsPlaying}`;

function hold () {
if (whoIsPlaying == "Player1") {
    whoIsPlaying = "Player2";
    currentPlayerDisplay.innerHTML = `Current player is ${whoIsPlaying}`;
} else {
    whoIsPlaying = "Player1";
    currentPlayerDisplay.innerHTML = `Current player is ${whoIsPlaying}`;
}
};

function rollTheDice() {
let x = randomRoll();
// console.log(`${whoIsPlaying}`);
currentPlayerDisplay.innerHTML = `Current player is ${whoIsPlaying}`;
if (whoIsPlaying == "Player1"){
    // console.log("player 1 rolling");
    if ((player1Score >20) || (player1Lost == "yes")|| (player2Lost == "yes")) {
        player1Score = 0;
        player1Lost = "no";
        player2Score = 0;
        player2Lost = "no";
    };
    if (x == 1) {
        diceImage.src = "images/dice1.png";
        player1ScoreDisplay.innerHTML = `Player 1 Loses!`;
        player2ScoreDisplay.innerHTML = `Player 2 Wins`;
        player1Lost = "yes";
    } else if (x == 2) {
        diceImage.src = "images/dice2.png";
        player1Score = player1Score + 2;
        if (player1Score<21) {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
        } else {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score} Player 1 Wins!`;
        }
    } else if (x == 3) {
        diceImage.src = "images/dice3.png";
        player1Score = player1Score + 3;
        if (player1Score<21) {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
        } else {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score} Player 1 Wins!`;
        }
    } else if (x == 4) {
        diceImage.src = "images/dice4.png";
        player1Score = player1Score + 4;
        if (player1Score<21) {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
        } else {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score} Player 1 Wins!`;
        }
    } else if (x == 5) {
        diceImage.src = "images/dice5.png";
        player1Score = player1Score + 5;
        if (player1Score<21) {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
        } else {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;        }
    } else if (x == 6) {
        diceImage.src = "images/dice6.png";
        player1Score = player1Score + 6;
        if (player1Score<21) {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
            player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
                } else {
            player1ScoreDisplay.innerHTML = `Score = ${player1Score} Player 1 Wins!`;
        }




    }
 } else {
        // console.log("player 2 rolling");
        if ((player2Score >20) || (player2Lost == "yes") || (player1Lost == "yes")) {
            player1Score = 0;
            player1Lost = "no";
            player2Score = 0;
            player2Lost = "no";
        };
        if (x == 1) {
            diceImage.src = "images/dice1.png";
            player2ScoreDisplay.innerHTML = `You lose!`;
            player2Lost = "yes";
        } else if (x == 2) {
            diceImage.src = "images/dice2.png";
            player2Score = player2Score + 2;
            if (player2Score<21) {
                player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
                player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
            } else {
                player2ScoreDisplay.innerHTML = `Score = ${player2Score} Player 2 Wins!`;
                player2ScoreDisplay.innerHTML = `Player 1 Loses!`;
            }
        } else if (x == 3) {
            diceImage.src = "images/dice3.png";
            player2Score = player2Score + 3;
            if (player2Score<21) {
                player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
                player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
            } else {
                player2ScoreDisplay.innerHTML = `Score = ${player2Score} Player 2 Wins!`;
            }
        } else if (x == 4) {
            diceImage.src = "images/dice4.png";
            player2Score = player2Score + 4;
            if (player2Score<21) {
                player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
                player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
                        } else {
                player2ScoreDisplay.innerHTML = `Score = ${player2Score} Player 2 Wins!`;
            }
        } else if (x == 5) {
            diceImage.src = "images/dice5.png";
            player2Score = player2Score + 5;
            if (player2Score<21) {
                player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
                player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
            } else {
                player2ScoreDisplay.innerHTML = `Score = ${player2Score} Player 2 Wins!`;
            }
        } else if (x == 6) {
            diceImage.src = "images/dice6.png";
            player2Score = player2Score + 6;
            if (player2Score<21) {
                player1ScoreDisplay.innerHTML = `Score = ${player1Score}`;
                player2ScoreDisplay.innerHTML = `Score = ${player2Score}`;
            } else {
                player2ScoreDisplay.innerHTML = `Score = ${player2Score} Player 2 Wins!`;
            }
        }
    }
};



function randomRoll() {
    return (Math.floor(Math.random() * (6)) + 1);
};