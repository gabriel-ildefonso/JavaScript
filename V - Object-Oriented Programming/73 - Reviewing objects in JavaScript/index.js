// const book = {
//   title: 'Eragon',
//   pages: 468,
//   published: true,
//   inStock: 20, 
//   tags: ['fantasy', 'adventure', 'medieval'],
//   author: {
//     name: 'Christopher Paolin', 
//   },
//   //Também é possível associar métodos a objetos, que são funções
//   addOnStock(quantity){
//     this.inStock += quantity
//   },
//   //ainda é possível criar funções anônimas no escopo de um objeto
//   save: function(){
//     //salva no banco de dados
//   },
//   //De igual forma é possivel criar uma propriedade recebendo diretamente uma função como valor
//   book.store = function(){
//     //
//   },

// }

// console.log(book)

// book.addOnStock(50)
// console.log(book.inStock)

//Conhecendo as funções construtoras: São funções que criam objetos, os parâmetros da função serão justamente os valores desejados para criar o objeto
//Sempre que trabalharmos com funções construtoras, utilizaremos o PascalCase, com cada palabra em letra maiúscula
function Book(title, pages, tags, author){
  //utilizamos o this para captar o contexto da função
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  //por padrão, vamos definir todos os livros como 'não-publicados'
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
  this.save = function(){
  }
}
const tags = ['fantasy', 'adventure', 'medieval']
  const author = {
    name: 'Christopher Paolin', 
  }

//O javascript tem um operador específico para trabalhar com funções construtoras, o 'new'
const eragon = new Book('Eragon', 468, tags, author)
console.log(eragon)

const eldest = new Book('Eldest', 644, tags, author)
console.log(eldest)

//A saída no terminal o JS demonstra o construtor utilizado para criar o objeto, no caso foi um contrutor 'Book', então é como se os livros fossem objetos do 'tipo Book'
