export function inline(){
  console.log('Export nomeado inline')
  //é chamado de export nomeado pois é necessário utilizar seu nome exato para que funcione
}

export default function defaultInline(){
  console.log('Export default inline')
  //permite que seja definido um export padrão para um arquivo, com isso o nome na importação é flexível, pode-se dar qualquer nome que se desejar.
}