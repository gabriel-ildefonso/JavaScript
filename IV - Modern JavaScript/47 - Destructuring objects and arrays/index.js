const person = {
  name: 'Luke',
  job: 'farmer',
  parents: ['Anakin', 'Padme']
}
//método comum:
const name = person.name

//usando a desestruturação (muito mais fácil):
const {job, parents} = person
// utilizando as chaves com a propriedade do objeto, o JS já entende que deve criar variáveis com os dados da propriedade informada.
console.log(name, job, parents)

//para os arrays, basta substituir as chaves por colchetes:

const [father, mother] = parents
//o JS entende que deve quebrar o array parents e criar variáveis com os dados do array, seguindo a ordem do array.
console.log(father, mother)

function createUser({name, job, parents}){
  const id = Math.floor(Math.random() * 9999)
  return{
    id, 
    name,
    job,
    parents
  }
}

const luke = createUser(person)
console.log(luke)