const number = parseFloat(prompt("Which number do you want to calculate the multiplication table for?"))
let result = ""

for (let factor = 1; factor <= 20; factor++) {
   result += " -> " + number + " x " + factor + " = " + (number * factor) + "\n"
}

alert("Table Table Result of " + number + ":\n\n" + result)