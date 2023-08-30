const button = document.getElementById("register-button");

button.addEventListener("click", register);

//Sempre que se trabalha com addEventListener, o 'event' ou 'ev', sempre ficará disponível, o ev é justamente o evento que foi disparado, e ele é passado para a função sempre que o evento é disparado.
function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não são iguais!");
  }
}

function removeListener() {
  button.removeEventListener("click", register);
  alert("event removed");
  //com isso a funcionalidade do botão registrar foi removida
}
