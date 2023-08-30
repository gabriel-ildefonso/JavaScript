const attacker = prompt("What is the name of the attacker character?")
let attackPower = parseFloat(prompt("What is his attack power?"))

const defender = prompt("What is the name of the defender character?")
let hitpoints = parseFloat(prompt("How many hitpoints does he have?"))
const defensePower = parseFloat(prompt("What is your defense power?"))
const hasShield = prompt("Does it have a shield? (yes/no)")

let damageCaused = 0

if (attackPower > defensePower && hasShield === "no") {
   damageCaused = attackPower - defensePower
} else if (attackPower > defensePower && hasShield === "yes") {
   damageCaused = (attackPower - defensePower) / 2
}

hitpoints -= damageCaused;

alert(attacker + " caused " + damageCaused + " damage to " + defender)
alert(
   attacker + "\nAttackpower: " + attackPower + "\n\n" +
   defender + "\nHitpoints: " + hitpoints +
   "\nDefence Power: " + defensePower + "\nHas Shield: " + hasShield
)