const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})
//Vê-se que towns e townsCopy são iguais, os dois sofreram os métodos pop e push. Com a forma com que o JavaScript foi criado, o townsCopy não existe de fato, ele é um espelho de towns, assim, tudo que for aplicado em towns Copy acontecerá a towns, e vice-versa.

const townsClone = [...towns]
//assim criamos um novo array que receberá cada item de towns como parâmetro
townsClone.push('Aldebaran')
//O townsClone não é apenas uma referência ao array towns, ele é um novo array, totalmente independente.
console.log({towns, townsCopy, townsClone})

//Também é possível usar o spread em objetos normais:
const townsObj = {...towns}
//isso tranforma cada elemento do array towns como uma propriedade do objeto
const townsObjClone = {...townsObj}
townsObjClone.test = 'Test'
console.log({townsObj, townsObjClone})