// function to calculate the area of the triangle
function triangle(){
  const base = parseFloat(prompt('Enter the base of the triangle: '))
  const height = parseFloat(prompt('Enter the height of the triangle: '))

  return (base * height) / 2
}

//function to calculate the area of the rectangle
function rectangle(){
  const base = parseFloat(prompt('Enter the base of the rectangle: '))
  const height = parseFloat(prompt('Enter the height of the triangle: '))

  return base * height
}

// function to calculate the area of the square
function square(){
  const side = parseFloat(prompt('Enter the side value of the square: '))
  return side * side
}

//function to calculate the area of the trapezium
function trapezium(){
  const biggerBase = parseFloat(prompt('Enter the bigger base of the trapezium: '))
  const smallerBase = parseFloat(prompt('Enter the smaller base of the trapezium: '))
  const height = parseFloat(prompt('Enter the height of the trapezium: '))

  return ((biggerBase + smallerBase) * height) / 2
}

// function to calculate the area of the circle
function circle(){
  const radius = parseFloat(prompt('Enter the radius of the circle: '))

  return(3.14 * radius * radius)
}

// function to display the menu
function displayMenu(){
  return prompt(
    'Geometric Calculator\n'+
    '1 - Calculate area of triangle\n' +
    '2 - Calculate area of rectangle\n' +
    "3 - Calculate area of square\n" +
    "4 - Calculate area of trapeium\n" +
    "5 - Calculate area of circle\n" +
    "6 - Exit\n"
  )
}

// main function of the program, which will execute the other functions
function execute(){
  let option = ''

  do {
    option = displayMenu()
    let result

    switch(option) {
      case '1':
        result = triangle()
        break
      case '2':
        result = rectangle()
        break
      case '3':
        result = square()
        break
      case '4':
        result = trapezium()
        break
      case '5':
        result = circle()
        break
      case '6':
        alert('Exiting...')
        break
      default:
        alert('Invalid option.')
    }
    if (result) {
      alert('Result: ' + result)
    }
  } while (option !== '6');
}

execute()