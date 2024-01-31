const Address = require("./Address")
const Person = require("./Person")

const addr = new Address("Igaraçu", "215", "Novo Eldorado", "Contagem", "Minas Gerais")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())