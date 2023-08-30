function addPlayer() {
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value
  const position = document.getElementById('position').value

  const confirmation = confirm("Add " + name + " as " + position + "?")

  if (confirmation){
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player- ' + number
    playerItem.innerText = name + " (" + number + '), ' + position 
    teamList.appendChild(playerItem)

    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
    document.getElementById('position').value = ''

  }
}

function removePlayer(){
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player- ' + number)

  const confirmation = confirm('Remove player ' + playerToRemove.innerText + '?')

  if (confirmation){
    document.getElementById('teamList').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}