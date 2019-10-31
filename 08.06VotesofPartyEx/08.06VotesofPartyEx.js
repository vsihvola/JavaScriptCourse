function showComparisonScores() {
		var votes = document.getElementById("votes").value;
        var candidates = document.getElementById("candidates").value;
        var text="";
        var popularity = votes;
    
        for (i = 1; i <= candidates; i++){
            popularity = votes / i;
            text = text + i + ". candidate: " + popularity.toFixed(0)+ "<br/>";
        }

	document.getElementById("answer").innerHTML = text;		
		
		
}