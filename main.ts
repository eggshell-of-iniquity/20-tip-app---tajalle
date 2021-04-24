let userPrice = game.askForNumber("How much are you paying?")
let tipPrice = userPrice * 0.2
let totalPrice = tipPrice + userPrice
game.splash("You originally paid $" + userPrice + ", you're tipping $" + tipPrice + "\", and you're paying $" + totalPrice + " in total.")
