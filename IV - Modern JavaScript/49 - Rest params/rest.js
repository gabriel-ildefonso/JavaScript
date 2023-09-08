function sum(...numbers){
  return numbers.reduce((accum, num) => accum + num, 0)
  //uma forma muito complicada de somar todos os itens do array
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3))

