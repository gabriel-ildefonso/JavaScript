const a = 0

const b = null

const c = 'Test'

console.log(a || b || c)
//Retornará 'Test', pois 0 é falso, e null também é falso

console.log(a ?? b ?? c)
//retornará 0, pois 0 não é null e nem undefined

let person = {
  name: "John Doe",
  email: "doejohn@email.com",
  birthay: "1990-03-14",
  age: 32
  }
  
  let x = 0
  x = person.data?.age