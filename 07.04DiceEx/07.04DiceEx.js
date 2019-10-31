function randomInteger(from, to) {
    // Return randomizedNumber between 'from' and 'to'.
    var randomizedNumber = Math.floor(Math.random()*6 + 1);
    return randomizedNumber;
    
    
    
}

function rollTheDice() {
   
    var diceValue = randomInteger(1, 6);
    document.getElementById("dice").innerHTML = diceValue;
}


