function calculateSalary(hours, hourlySalary) {
		// calculate salary
        var grossSalary = hours * hourlySalary;
        return grossSalary;
		
    // return the gross salary with the return statement
		
}

function showGrossSalary() {
		// assign the input field value to the variable hours
        var hours = document.getElementById("hours").value;
        var hourlySalary = document.getElementById("hourlySalary").value;
        var salary = calculateSalary(hours, hourlySalary);
        document.getElementById("answer").innerHTML = "Gross salary is " + salary.toFixed(2) + " euros.";
		// assign the second input field value to the variable hourlySalary
		// call the calculateSalary function
		// write the answer on the html page

}

