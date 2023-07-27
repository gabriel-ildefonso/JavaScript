const homes = []
let option = ""

do {
  option = prompt(
    "Welcome to the Property Registry.\nTotal properties: " + homes.length +
     "\n\nChoose an option:\n1. New property\n2. List properties\n3. Exit"
   )
  
  switch (option) {
    case "1":
      const property = {}

      property.owner = prompt("Enter the property owner's name:")
      property.bedrooms = parseFloat(prompt("How many rooms does the property have?"))
      property.restrooms = parseFloat(prompt("How many restrooms does the property have"))
      property.garage = prompt("Does the property have a garage? (Yes/No)")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nOwner: " + property.owner +
        "\nRooms: " + property.bedrooms +
        "\nRestrooms: " + property.restrooms +
        "\nDoes it have a garage? " + property.garage
      )

      if (confirma) {
        homes.push(property)
      }
      break

      case "2":
        for (let i = 0; i < homes.length; i++) {
          alert(
            "Property " + (i + 1) +
            "\nOwner: " + homes[i].owner +
            "\nRooms: " + homes[i].bedrooms +
            "\nRestrooms: " + homes[i].restrooms +
            "\nGarage? " + homes[i].garage
          )
        }
      break

      case "3":
          alert("Finishing...")
      break
       
      default:
          alert("Invalid entry!")
      break
      }
    } while (option !== "3");