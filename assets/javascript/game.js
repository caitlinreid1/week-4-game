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
var turqValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(turqValue);
var redValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var greenValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var yellowValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// When user clicks on a image-button, it will add the corresponding numerical value to "total score" at A)

$('#turq').on("click", function (){
	var updateCounter = "";


	console.log(turqValue);
	// var i;
	// var x = $(turqValue).toArray(totalScore);

	// for (i = 0; i < x.length; i++) {
	// 	$('#totalScore').html(totalScore);
	// }


});


$('#red').on("click", function(){
	
	totalScore.push(redValue);

	console.log(redValue);

});

$('#green').on("click", function(){
	
	console.log(greenValue);	

});

$('#yellow').on("click", function(){
	
	console.log(yellowValue);

});


// Update the total score counter 
//print to document

	//if player's total score C) === A) player wins | update wins++ counter
	if (counter === targetNumber) {
      alert("You win!");
      wins++
    }
    
	// if player's total score C) > A) player loses
	else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++
    }



	// Restart game if player wins or loses





});


