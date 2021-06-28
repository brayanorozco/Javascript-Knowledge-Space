

// Using SWITCH

/* const play = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
}
const players = {
    one: "Player 1",
    two: "Player 2",
}

function rockPaperScissors(player1, player2) {

    if (player1 === player2) {
        console.log('Draw');
        return;
    }
    console.log(`${winnerPlayer(player1, player2)} wins`);
}

function winnerPlayer(player1, player2) {
    let winner = '';
    switch (player1) {
        case play.ROCK:
            player2 === play.PAPER ? winner = players.two : winner = players.one;
            break;

        case play.PAPER:
            player2 === play.SCISSORS ? winner = players.two : winner = players.one;
            break;

        case play.SCISSORS:
            player2 === play.ROCK ? winner = players.two : winner = players.one;
            break;
    }
    return winner;

}

rockPaperScissors("rock", "rock");
rockPaperScissors("rock", "paper");
rockPaperScissors("rock", "scissors");
rockPaperScissors("paper", "scissors"); */