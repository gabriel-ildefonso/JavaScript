//document.body.style esse é o método que utilizamos para acessar propriedades css do documento, podemos acessá-las e modificá-las

function useLightTheme(){
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme(){
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

//muitos frameworks, como o bootstrap e bulma,  utilizam as classes para inserir os estilos. Por isso é importante aprendermos a manipular os estilos usando as classes, como veremos a seguir:

function switchTheme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)