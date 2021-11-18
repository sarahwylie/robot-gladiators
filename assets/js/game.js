
window.alert("Welcome to Robot Gladiators!")

// Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName);

//enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
var enemyAttack = 12;
var enemyHealth = 40

console.log(enemyHealth);
// console.log(enemyNames.length);

// fight function (now with parameter for enemy's name)
function fight(enemyName) {

    //repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // are you ready to rumble?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(`${playerName}has chosen to skip this fight. Goodbye!`);
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        else if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight")
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
        // player attack
        console.log(
            playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
        );
        //check enemy health
        if (enemyHealth <= 0) {
            break;
        } else {
            window.alert(enemyName + "still has" + enemyHealth + "health left.");
        }

        //   remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        //  enemy attack
        console.log(
            enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
        );
        // check player's health
        if (playerHealth <= 0) {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        } else {
            window.alert(playerName + "still has" + playerHealth + "health left.");
        }
    };
}
//function to start a new game
var startGame = function () {
    for (var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
          // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
    }
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }
    //start the game when the page loads
};

//function to end the entire game
function endGame() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
endGame();

