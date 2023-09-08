import {name, label, input, br } from './functions.js'
//vscode não coloca o '.js' após o arquivo, mas é necessário

console.log(name)
console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())