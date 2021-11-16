// Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

//enemy info
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
  };
  // execute function
  fight();

// First player attack
console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
};

// First enemy attack
console.log(
    enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
);
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
}
else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
}
