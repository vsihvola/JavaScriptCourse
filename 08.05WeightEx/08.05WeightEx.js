
function showWeightGoals() { 
    
    var weight = document.getElementById("weight").value;
    var text =""; 
    var weeklyDrop = weight * 0.1 / 7;
    var weeklyWeight = weight;
    
    for (var i = 1; i<= 7; i++){        
        weeklyWeight = weeklyWeight - weeklyDrop;
        text = text + "After " + i + ". week " + weeklyWeight.toFixed(1) + "kg<br />";
    }
    
    document.getElementById("answer").innerHTML = text;
   
} 

    
