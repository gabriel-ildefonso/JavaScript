let option = ""

do {
   option = prompt(
     "Welcome!\n" +
     "\nChoose one of the options below:" +
     "\n1 - Option One" +
     "\n2 - Option Two" +
     "\n3 - Option Three" +
     "\n4 - Option Four" +
     "\n5 - Exit"
   )

   switch(option){
     case "1":
       alert("You chose option 1.")
       break
     case "2":
       alert("You chose option 2.")
       break
     case "3":
       alert("You chose option 3.")
       break
     case "4":
       alert("You chose option 4.")
       break
     case "5":
       alert("Closing program...")
       break
     default:
       alert("Invalid input! Choose one of five options.")
   }
} while (option !== "5");