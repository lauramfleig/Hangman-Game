
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"];

var remainingGuesses = 10;

var previousGuesses = '';

var beginningWins = 0;

var beginningLosses = 0;

var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)]; 

console.log(psychicGuess)

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

		previousGuesses = '';
		document.getElementById("so-far").innerHTML = 'Your Guesses so Far: ' + previousGuesses; 

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


 		//reset previous guesses to an empty string

 		previousGuesses = '';

 		//reset remaining guesses to 10

 		remainingGuesses = 10;
 		
	}

	//If the user gets 5 wins before the computer gets 5 wins
	
	if (beginningWins === 5 && beginningLosses < 5) {
		alert ('You Have Been Granted 3 Wishes!')

		//reset remaining guesses to 10

		remainingGuesses = 10;

		//show # of remaining guesses (10) in html

		document.getElementById("guess-left").innerHTML = 'Guesses Left: ' + remainingGuesses;

		//reset previous guesses to an empty string
		previousGuesses = '';

		//show empty string in html
		document.getElementById("so-far").innerHTML = 'Your Guesses So far: ' + previousGuesses ;

		//reset beinning wins to 0

		beginningWins = 0;

		//show score of 0 in html
		document.getElementById("wins").innerHTML = 'Wins: ' + beginningWins;

		//reset beginning losses to 0

		beginningLosses = 0;

		//show beginning loses as 0 in html
		document.getElementById("losses").innerHTML = 'Losses: ' + beginningLosses;
	}


	//If the user looses 5 times before winning 5 times 

	if (beginningLosses === 5 && beginningWins < 5) {
		alert ('Leave At Once! No Wishes for You!')

		//reset remaining guesses to 10 and show in html

		remainingGuesses = 10;
		document.getElementById("guess-left").innerHTML = 'Guesses Left: ' + remainingGuesses;

		//reset previous guesses to an empty string and show in html

		previousGuesses = '';
		document.getElementById("so-far").innerHTML = 'Your Guesses So far: ' + previousGuesses ;

		//reset beginning wins to 0 and show in html
		beginningWins = 0;
		document.getElementById("wins").innerHTML = 'Wins: ' + beginningWins;

		//reset beginning losses to 0 and show in html

		beginningLosses = 0
		document.getElementById("losses").innerHTML = 'Losses: ' + beginningLosses;

	}

 }








