// Randomly Create Number to get A) Number to match
$(document).ready(function() {

var computerGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(computerGuess);


$("#random").html('<h4>Number to Guess: </h4>' + computerGuess);

// Set wins and loses to zero at B) 
var wins = 0;
var losses = 0;

//connect variables to DOM manipulation
$("#wins").html('<h5>Wins: </h5>' + wins);
$('#losses').html('<h5>Losses: </h5>' + losses);

// Set total score to zero at C)

var totalScore = 0;


//connect totalScore to DOM
$('#totalScore').html(totalScore);

// create random numerical value for each crystal 
var turq = {
	'value' : (Math.floor(Math.random() * (12 - 1 + 1)) + 1)	
}

var red = {
	'value' : (Math.floor(Math.random() * (12 - 1 + 1)) + 1)
}

var green = {
	'value' : (Math.floor(Math.random() * (12 - 1 + 1)) + 1)
}

var yellow = {
	'value' : (Math.floor(Math.random() * (12 - 1 + 1)) + 1)
}


for (var i = 0; i < 120; i++) {
	// For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

	// Each imageCrystal will be given a data attribute called data-crystalValue.

	// This data attribute will be set equal to the array value.
	imageCrystal.attr("data-crystalvalue", turqValue[i]);

	// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
	$("#crystals").append(imageCrystal);
}



// When user clicks on a image-button, it will add the corresponding numerical value to "total score" at A)

$('#turq').on("click", function (){



});


$('#red').on("click", function(){
	



});

$('#green').on("click", function(){
		

});

$('#yellow').on("click", function(){
	

});


// Update the total score counter 
//print to document

	// //if player's total score C) === A) player wins | update wins++ counter
	// if (counter === targetNumber) {
 //      alert("You win!");
 //      wins++
 //    }
    
	// // if player's total score C) > A) player loses
	// else if (counter >= targetNumber) {
 //      alert("You lose!!");
 //      losses++
 //    }



	// Restart game if player wins or loses





});


