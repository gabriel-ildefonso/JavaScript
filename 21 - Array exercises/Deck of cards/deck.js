let deck = []

do {
    option = prompt(
        "Cards on deck: " + deck.length +
        "\n1. Add a card\n2. Pick a card\n3. Exit"
    )

    switch(option){
        case "1":
            let newCard = prompt("Wich card it is?")
            deck.push(newCard)
            break
        case "2":
            let cardPicked = deck.pop()
            if(!cardPicked){
                alert("There is no card on the deck")
            }else{alert("You picked the " + cardPicked)}
            break
        case "3":
            alert("Exiting...")
            break
        default:
            alert("Invalid entry")
    }
} while (option!=="3");
