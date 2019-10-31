var pips1 = Math.round((Math.random() * 5) + 1)
var pips2 = Math.round((Math.random() * 5) + 1)

var randomTimes = 1;
	
while (pips1 != pips2) {
	var pips1 = Math.round((Math.random() * 5) + 1)
	var pips2 = Math.round((Math.random() * 5) + 1)
	randomTimes++;
} 
	
document.getElementById("answer").innerHTML = "Same dice pips: "+pips1+" and "+pips2+"<br/>There were " +randomTimes+ " randomization rounds until we got the same pips.";
			