const dayjs = require('dayjs')

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()   //dayjs() retorna o data completa em que o programa é executado

  //para calcular a idade de alguém podemos usar o método diff do dayjs que calcula a diferença entre duas datas, no caso a data de nascimento e a data de execução do programa; o retorno é dado na unidade desejada, por padrão é milissegundos.

  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias para completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias.`)
}

birthday('1993-10-22')