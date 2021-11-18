

window.alert("Welcome to Robot Gladiators!");

    // // Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName);

//enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);


// fight function (now with parameter for enemy's name)
var fight = (enemyName) => { 

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
                window.alert(playerName + "has chosen to skip this fight. Goodbye!");
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

    //   remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    //  enemy attack
    console.log(
        enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    } else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
    }
};

};

fight();


// // Player info
// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// //enemy info
// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// console.log(enemyNames[0]);
// console.log(enemyNames[3]);

// // fight function (now with parameter for enemy's name)
// var fight = function (enemyName) {
//     //repeat and execute as long as the enemy-robot is alive
//     while (playerHealth > 0 && enemyHealth > 0) {
//         // are you ready to rumble?
//         var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//         //if player chooses to skip
//         if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
//             //confirm player wants to skip
//             var confirmSkip = window.confirm("Are you sure you'd like to quit?");
//             // if yes (true), leave fight
//             if (confirmSkip) {
//                 window.alert(playerName + "has chosen to skip this fight. Goodbye!");
//                 //subtract money from playerMoney for skipping
//                 playerMoney = playerMoney - 10;
//                 console.log("playerMoney", playerMoney);
//                 break;
//             }
//         }
//         if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

//             // remove enemy's health by subtracting the amount set in the playerAttack variable
//             emenyHealth = enemyHealth - playerAttack;
//             // player attack
//             console.log(
//                 playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
//             );

//             // check enemy's health
//             if (enemyHealth <= 0) {
//                 window.alert(enemyName + "has died!");
//                 //award player money for winning
//                 playerMoney = playerMoney + 20;
//                 //leave while() loop since enemy is dead
//                 break;
//             } else {
//                 window.alert(enemyName + "still has" + enemyHealth + "health left.");
//             }

//             //remove player's health by subtracting the amount set in the enemyAttack variable
//             playerHealth = playerHealth - enemyAttack;
//             //  enemy attack
//             console.log(
//                 enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
//             );
//             // check player's health
//             if (playerHealth <= 0) {
//                 window.alert(playerName + "has died!");
//                 break;
//             } else {
//                 window.alert(playerName + "still has" + playerHealth + "health left.");
//             }
//         }
//     };

//     // if the player chooses to fight then fight
//     //function to start a new game
//     var startGame = function () {
//         // reset player stats
//         playerHealth = 100;
//         playerAttack = 10;
//         playerMoney = 10;
//         for (var i = 0; i < enemyNames.length; i++) {
//             if (playerHealth > 0) {
//                 // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
//                 window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

//                 // pick new enemy to fight based on the index of the enemyNames array
//                 var pickedEnemyName = enemyNames[i];

//                 // reset enemyHealth before starting new fight
//                 enemyHealth = 50;

//                 // use debugger to pause script from running and check what's going on at that moment in the code
//                 // debugger;

//                 // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
//                 fight(pickedEnemyName);            
//             // play again
//             startGame();
//         else {
//     window.alert("You have lost your robot in battle! Game Over!");
//     break;
//         };
// // start the game when the page loads
// startGame();
// // end the entire game
//     }
// }    
// };
// var endGame = function() {
//     // if player is still alive, player wins!
//     if (playerHealth > 0) {
//       window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
//     } 
//     else {
//       window.alert("You've lost your robot in battle.");
//     }
//   }
//   // ask player if they'd like to play again
// var playAgainConfirm = window.confirm("Would you like to play again?");

// if (playAgainConfirm) {
//   // restart the game
//   startGame();
// } 
// else {
//   window.alert("Thank you for playing Robot Gladiators! Come back soon!");
// }
//   // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
//   endGame();