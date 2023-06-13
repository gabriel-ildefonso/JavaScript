const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// add elements
// push: Adds an element to the end of the array and returns the new array size
let size = array.push("Boromir")
console.log(array)
console.log(size)

// unshift: Adds an element to the beginning of the array and returns the new array size
size = array.unshift("Boromir")
console.log(array)
console.log(size)

//The array itself manages changing the indexes of the elements.

// remove elements
// pop: Removes the last element from the array and returns the removed element
let elementRemoved = array.pop()
console.log(array)
console.log(elementRemoved)

// shift: Removes the first element from the array and returns the removed element
elementRemoved = array.shift()
console.log(array)
console.log(elementRemoved)

// SEARCH FOR AN ELEMENT
// includes: Checks if a certain element is included in the array, returning a boolean value.
const includes = array.includes("Gandalf")
console.log(includes)

// indexOf: Finds the index that has the indicated element, or -1 if it does not exist in the array
const index = array.indexOf("Gandalf")
console.log(index)

// CUTTING AND CONCATENATING
// slice: Copies a part of the array and returns the copied part without changing the original array. The starting index is included in the copy, but the ending index is not copied.
const hobbits = array.slice(0, 4)
// Can also be used with negative numbers to reference from the end of the array
const others = array.slice(-4)
console.log(array)
console.log(hobbits)
console.log(others)

// concat: Joins two or more arrays and/or items and returns the result (without changing any of the original arrays)
const society = hobbits.concat(others, "Boromir")
console.log(society)
console.log(hobbits)
console.log(others)

// REPLACING ELEMENTS
// splice: Allows you to remove elements at any position in the array and replace them with new ones. removed). The removed element(s) are returned in array format.
const elementsRemoved = society.splice(index, 1, "Gandalf the Grey")
console.log(elementsRemoved)
console.log(society)

// ITERATING OVER THE ELEMENTS
// Using for to loop through each array element
for (let index = 0; index < society.length; index++) {
     const element = society[index]
     console.log(element + " is at position " + index)
}