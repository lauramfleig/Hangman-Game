
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"];

var remainingGuesses = 10;

var previousGuesses = '';

var beginningWins = 0;

var beginningLosses = 0;

var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)]; 

console.log(psychicGuess)


//Created a function to reset previous guesses to an empty string

function resetGuesses () {

	var previousGuesses = '';
	document.getElementById("so-far").innerHTML = 'Your Guesses So far: ' + previousGuesses;
}

//Created a function to reset "wins" to 0

function winsTozero () {

	var beginningWins = 0;

	document.getElementById("wins").innerHTML = 'Wins: ' + beginningWins;
}

//Created a function to reset "losses" to 0

function lossTozero () {

	var beginningLosses = 0;
	document.getElementById("losses").innerHTML = 'Losses: ' + beginningLosses;

}
//Created a function to reset "remaining guesses" to 0
function resetRemainingGuess () {
	var remainingGuesses = 10
	document.getElementById("guess-left").innerHTML = 'Guesses Left: ' + remainingGuesses;

}

document.onkeyup = function(event) {

	var userGuess = event.key;

	//If the user guesses correctly//

 	if (userGuess === psychicGuess) {

 		psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
 		console.log(psychicGuess);

 		beginningWins = beginningWins + 1;
		document.getElementById("wins").innerHTML = 'Wins: ' + beginningWins;

		remainingGuesses = 10;
		document.getElementById("guess-left").innerHTML = 'Guesses Left: ' + remainingGuesses;

		//calling function to reset previous guesses to empty string
		resetGuesses(previousGuesses);
		
	//If the user guesses incorrectly

	} else if (userGuess != psychicGuess) {
	
		// add this current gues to previousGuesses

		previousGuesses = previousGuesses + userGuess

		// show this new string on the page
 		document.getElementById("so-far").innerHTML = 'Your Guesses So far: ' + previousGuesses ;

 		// take one guess away

 		remainingGuesses = remainingGuesses - 1;

 		//show this new string on the page
 		document.getElementById("guess-left").innerHTML = 'Guesses Left: ' + remainingGuesses;

 	} 

 	//When the user runs out of guesses

 	if (remainingGuesses === 0) {

 		//Add 1 to the beginnngLosses

 		beginningLosses = beginningLosses + 1;

 		//show this string on the page

 		document.getElementById("losses").innerHTML = 'Losses: ' + beginningLosses;

		//calling function to reset previous guesses to empty string
 		previousGuesses = ''
 		resetGuesses(previousGuesses);

 		//calling function to reset previous guesses to 10...would not work unless i included the variable
 		remainingGuesses = 10
 		resetRemainingGuess(remainingGuesses)
 		
	}

	//If the user gets 5 wins before the computer gets 5 wins
	
	if (beginningWins === 5 && beginningLosses < 5) {
		alert ('You Have Been Granted 3 Wishes!')

		//calling function to reset remaining guesses to 10
		remainingGuesses = 10
		resetRemainingGuess(remainingGuesses);

		//calling function to reset previous guesses to empty string
		resetGuesses(previousGuesses);

		//calling funcion to reset beginning wins to 0
		beginningWins = 0;
		winsTozero(beginningWins)

		//calling function to reset beginning losses to 0
		lossTozero(beginningLosses)

	}


	//If the user looses 5 times before winning 5 times 

	if (beginningLosses === 5 && beginningWins < 5) {
		alert ('Leave At Once! No Wishes for You!')

		//calling function to reset remaining guesses at 10
		remainingGuesses = 10;
		resetRemainingGuess(remainingGuesses);

		// call function to reset beginning wins to an empty string
		resetGuesses(previousGuesses);
	
		// call funtion to reset beginning wins to 0 and show in html

		winsTozero(beginningWins);

		// call function to reset beginning losses to 0..would not work unless i set beginning losses to 0)

		beginningLosses = 0
		lossTozero(beginningLosses)

	}

 }








