const tourist = prompt("Hey tourist! What's your name?")

let cities = "";
let count = 0;
let proceed = prompt("Did you visit any cities? (yes/no)")

while (proceed ==="yes") {
   let city = prompt("What is the name of the city visited?")
   cities += " - " + city + "\n"
   count++
   proceed = prompt("Did you visit any other cities? (yes/no)")
}

alert(
   "Tourist: " + tourist +
   "\nNumber of cities visited: " + count +
   "\nCities visited:\n" + cities
)