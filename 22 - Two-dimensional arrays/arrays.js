//Arrays can receive any type of data, including other arrays

const array = [
  "1st Level",
  ["2nd level", 42, true],
  [
    ["3rd level, 1st item", "Hello, world!"],
    ["3rd level, 2nd item", "Hello, world!"]
  ],
  []
]

//To instantiate an element from one array within another array, simply chain the square brackets: 
//ex: console.log(array[1][0]) > "2nd level"

// Each pair of square brackets references an innermost level of the array
console.log(array[0])       
console.log(array[1])       
console.log(array[1][0])    
console.log(array[1][1])    
console.log(array[2])       
console.log(array[2][0])    
console.log(array[2][1][1]) 

//We can clearly see the structure of an array in a table
const array1 = [
  ["L1, C1", "L1, C2", "L1, C3", "L1, C4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(array1)

array1.push(['new line'])        //Referencing the outermost environment of the array, a new row is created at the end of the array
array1[0].push(['new column'])   //Using the bracket to reference the first array, a new column is created in the array.    

console.table(array1)

// We can use multiple levels of FOR loops to iterate easily through the matrix
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1[i].length; j++) {
      const elemento = array1[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }