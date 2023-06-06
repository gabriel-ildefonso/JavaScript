const entry1 = prompt("Enter the first number:")
const entry2 = prompt("Enter the second number:")

const x = parseFloat(entry1)
const y = parseFloat(entry2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert(  
"Results:\n" +
"\nSum: " + sum +
"\nSubtraction: " + subtraction +
"\nMultiplication: " + multiplication +
"\nDivision: " + division
)