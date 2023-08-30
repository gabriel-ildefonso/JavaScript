const form = document.getElementById("order-form");

form.addEventListener("submit", function (ev) {

  ev.preventDefault()
  // o método preventDefault evita o recarregamento  automático da página quando executamos a action do formulário

  const name = document.querySelector('input[name="name"]').value;
  const adress = document.querySelector('input[name="adress"]'.value);
  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector('textarea[name="observations"]').value

  //para selecionar todas as checkboxes marcadas, o procedimento é um pouco diferente, pois não buscamos apenas uma entrada, pode ser uma marcada, mais de uma ou nenhuma.
  //criamos inicialmente uma string para armazenar os itens marcados, então usamos querySelectorAll para buscar todos os itens com o name = 'salad', porém passamos uma propriedade 'checked', assim, serão trazidos à string apenas os itens de name 'salad' que foram marcados.
  // o querySelectorAll retorna uma nodeList, com isso podemos usar o método forEach para criar uma função que nos permitirá organizar o conteúdo 
  let salad = ''
  document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
    salad += ' - ' + item.value + '\n'
  })

  console.log({
    name,
    adress,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    alert(
      "Pedido Realizado!" +
      "\nNome do cliente: " + name +
      "\nEndereço de entrega: " + address +
      "\nTipo de pão: " + breadType +
      "\nRecheio: \n - " + main + "\n" + salad +
      "Observações: " + observations
    )

  )

});
