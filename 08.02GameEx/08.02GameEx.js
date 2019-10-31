function calculateProfit() {

    var rounds = document.getElementById("rounds").value;
    var bet = 1;
    var pay1 = 1 * 1.25;
    var pay2 = 1 * 1.50;
    var totalPayment = 0;
    var pips = 0;
    
    for(i = 1; i<=rounds; i++){
        pips = Math.round( (Math.random( ) * 5) + 1 ); 
        if (pips === 2 || pips === 4){
            totalPayment = pay1 + totalPayment; 
        } else if (pips === 6){
            totalPayment = pay2 + totalPayment; 
        } else {
            totalPayment = totalPayment + 0;
        }
    }
    
    var profit = rounds - totalPayment;
    document.getElementById("answer").innerHTML = "Bets were altogether "+rounds+" euros<br/>Wins were "+totalPayment.toFixed(2)+ " euros<br/>Profit was "+profit.toFixed(2)+ " euros";


}