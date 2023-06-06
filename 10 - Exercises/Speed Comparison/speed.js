const vehicle1 = prompt("Enter the name of the first vehicle:")
const speed1 = parseFloat(prompt("Enter the speed of the first vehicle:"))

const vehicle2 = prompt("Enter the name of the second vehicle:")
const speed2 = parseFloat(prompt("Enter the speed of the second vehicle:"))

if (speed1 > speed2) {
  alert(vehicle1 + " is faster than " + vehicle2)
} else if (speed2 > speed1) {
  alert(vehicle2 + " is faster than " + vehicle1)
} else {
  alert(vehicle1 + " and " + vehicle2 + " have the same speed.")
}