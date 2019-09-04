function computerPlay() {
    return ["rock","paper","scissors"][Math.floor(Math.random() * 3)];
}

function rpsRound(player, pc) {
    if (player === ""){
        return "player did't chose";
    }
    let p = player.toLowerCase();
    let c = pc.toLowerCase();

    switch(p){
        case "rock":
            switch (c) {
                case "rock":
                    return "Draw!";
                case "paper":
                    return "You Lose! Paper beats Rock!";
                case "scissors":
                    return "You Win! Rock beats Scissors!";
            }
            break;
        case "paper":
            switch (c) {
                case "rock":
                    return "You Win! Paper beats Rock!";
                case "paper":
                    return "Draw!";
                case "scissors":
                    return "You Lose! Scissors beats Paper";

            }
            break;
        case "scissors":
            switch (c) {
                case "rock":
                    return "You Lose! Rock beats Scissors"
                case "paper":
                    return "You Win! Scissors beats Paper!"
                case "scissors":
                    return "Draw"
            }
            break;
        default:
            return "player chose badly"
    }
}

function game() {
    for ( let i = 0; i < 5; i++){
        console.log(rpsRound(window.prompt("Choose: rock, paper, scissors", ""), computerPlay()));
    }
}

game();