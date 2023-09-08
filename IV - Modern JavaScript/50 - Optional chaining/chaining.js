const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "31",
    number: "994532696"
  }
}

//Vamos tentar pegar o ddd do telefone do primeiro amigo, o resultará em um erro, pois não há ddd tampouco telefone do amigo.
//console.log(user.friends[0].phone.ddd)
//TypeError: Cannot read properties of undefined (reading 'ddd')
//Como phone não foi declarado, ele é 'undefined', até então não há erro, pois 'undefined' existe na linguagem. O erro ocorrerá quando o javascript tentar ler a próxima propriedade, o 'ddd', pois tentará, então, ler uma propriedade dentro de 'undefined', e 'undefined', por definição, não possui propriedades.

//Agora usando o encadeamento opcional:
console.log(user?.friends[0]?.phone?.ddd)
//Na prática, funciona assim: Se 'user' não for undefined, leia friends[0]; se friends[0] não for undefined, leia phone; se phone não for undefined, leia ddd; caso algum caso retorne undefined, interrompa o processo retornando 'undefined'.

//É chamado de encademento opcional por ele fazer o encadeamento se a propriedade existir.

console.log(user.brothers?.[5].name)
//No caso o operador de encadeamento opcional vai imediatamente após o nome do array e antes do índice, assim o JS tenta ler a posição 5 do array, do contrário ele tentaria interpretar o 5 como uma propriedade interna de 'brothers'.