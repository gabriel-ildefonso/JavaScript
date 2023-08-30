function addInput(){
  //creating the node that will recieve the element
  const ul = document.getElementById('inputs')

  //creating the element
  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'New input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  //Putting the new elements inside one another, to perform correctly in html format
  newLi.appendChild(newInput)
  ul.appendChild(newLi)
} 

