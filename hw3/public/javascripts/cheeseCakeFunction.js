$(document).ready(function() {
    			$('#jan').click(function() {
        			$("#months").attr("value", "Jan");
    			})
				$('#feb').click(function() {
        			$("#months").attr("value", "Feb");
    			})
				$('#mar').click(function() {
        			$("#months").attr("value", "Mar");
    			})
				$('#apr').click(function() {
        			$("#months").attr("value", "Apr");
    			})
				$('#may').click(function() {
        			$("#months").attr("value", "May");
    			})
				$('#jun').click(function() {
        			$("#months").attr("value", "Jun");
    			})
				$('#jul').click(function() {
        			$("#months").attr("value", "Jul");
    			})
				$('#aug').click(function() {
        			$("#months").attr("value", "Aug");
    			})
				$('#sep').click(function() {
        			$("#months").attr("value", "Sep");
    			})
				$('#oct').click(function() {
        			$("#months").attr("value", "Oct");
    			})
				$('#nov').click(function() {
        			$("#months").attr("value", "Nov");
    			})
				$('#dec').click(function() {
        			$("#months").attr("value", "Dec");
    			})

    })


$('#orderButton').click(function() {
					/*Saving useful variables*/
        			var text_value = document.getElementById("text").value;
					var orderPlace = document.getElementById("orderSection");

					/*When the user enters the word "vegan" into their notes, site warns them.*/
					if(text_value.includes("vegan")){
						alert("Warning: Cheesecakes contain dairy");
					}
					
					/*When vegan wasn't detected in notes.*/
					else {/*Prints out the order details.*/
						if(document.getElementById("Plain").checked) { /*When they order plain cheesecake.*/
							document.getElementById("hiddenMessage").innerHTML = "Thank you, your order has been placed. You ordered " 
							+ document.getElementById("toppings").value + " Plain Cheesecake. Your notes to us were: " +
							document.getElementById("text").value;
						}
						else if(document.getElementById('Cherry').checked) {/*When they order cherry cheesecake.*/
							document.getElementById("hiddenMessage").innerHTML = "Thank you, your order has been placed. You ordered " 
							+ document.getElementById("toppings").value + " Cherry Cheesecake. Your notes to us were: " +
							document.getElementById("text").value;
						
						} 
						else{ /*When they order chocolate cheesecake.*/
							document.getElementById("hiddenMessage").innerHTML = "Thank you, your order has been placed. You ordered " 
							+ document.getElementById("toppings").value + " Chocolate Cheesecake. Your notes to us were: " +
							document.getElementById("text").value;
						}
						
						/* Hides the section with the order option/details.*/
						orderPlace.style.display = "none";
					}
    			})
