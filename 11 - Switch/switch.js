const lenght = parseFloat(prompt("Enter a legth in meters:"))
const unit = prompt(
   "What unit of measurement do you want to convert to?" +
   "\n1 - millimeters (mm)" +
   "\n2 - centimeters (cm)" +
   "\n3 - decimeters (dm)" +
   "\n4 - dekameters (dam)" +
   "\n5 - hectometer (hm)" +
   "\n6 - kilometer (km)"
)

switch(unit) {
   case "1":
     alert("Result: " + lenght + "m = " + lenght * 1000 + "mm")
     break
   case "2":
     alert("Result: " + lenght + "m = " + lenght * 100 + "cm")
     break
   case "3":
     alert("Result: " + lenght + "m = " + lenght * 10 + "dm")
     break
    case "4":
     alert("Result: " + lenght + "m = " + lenght / 10 + "dam")
     break
   case "5":
     alert("Result: " + lenght + "m = " + lenght / 100 + "hm")
     break
   case "6":
     alert("Result: " + lenght + "m = " + lenght / 1000 + "km")
     break
   default:
     alert("Invalid option!")
     break
}