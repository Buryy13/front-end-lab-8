var min = 0, // range
    max, // range
    attempts,
    totalPrize,
    rand,
    prize,
    possiblePrize;
var question, // ask to user quess a number
    answ, // user`s answer about number
    contin, // user`s answer about countinue
    start; // first question

start = confirm("Do you want to play a game?");
if (start) {
    do {
        max = 5;
        prize = 10;
        totalPrize = 0;
        attempts = 3;
        possiblePrize = prize;
        rand = Math.floor(Math.random() * (max - min + 1)) + min; // get a random number
        while (attempts) { // 3 attempts for guessing

            question = "Enter a number from " + min + " to " + max + "\n" +
                "Attempts left: " + attempts + "\n" +
                "Total prize: " + totalPrize + "$\n" +
                "Possible prize on current attempt: " + possiblePrize + "$";
            answ = Number(prompt(question)); // quessing the number
            if (answ === rand) {
                totalPrize += possiblePrize;
                contin = confirm("Do you want to continue a game?");
                if (contin) {
                    attempts = 3;
                    max *= 2;
                    prize *= 3;
                    possiblePrize = prize;
                    continue;
                } else {
                    break; // you don`t want to continue a game
                }
            } else {
                attempts--;
                possiblePrize = Math.floor(possiblePrize / 2);
            }
        }
        console.log("Thank you for a game. Your prize is: " + totalPrize + "$.");
        start = confirm("Do you want to play again?");
    } while (start);
    console.log("You did not become a millionaire."); // game over
} else {
    console.log("You did not become a millionaire."); // game didn`t start
}
