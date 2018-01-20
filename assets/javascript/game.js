

var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
	
	
	  
	var wins = 0;
	var losses = 0;
	var guessesLeft =9;
	var guessesSoFar = [];
	var userGuesses = null;
  
  var letterToBeGuessed = choices[Math.floor(Math.random() * choices.length)]



   document.onkeyup=function(event){
            console.log(event);
            var userGuesses = event.key.toLowerCase();
           if(guessesSoFar.indexOf(userGuesses)< 0 && choices.indexOf(userGuesses) >=0){
            guessesSoFar[guessesSoFar.length]=userGuesses;
            guessesLeft--;
				}


			if(letterToBeGuessed === userGuesses){
				wins++;
				guessesLeft = 9;
				guessesSoFar = [];
				letterToBeGuessed = choices [Math.floor(Math.random()*choices)];


			}	


			if(guessesLeft === 0){
				losses++;
				guessesLeft= 9;
				guessesSoFar= [];
				letterToBeGuessed = choices[Math.floor(Math.random()*choices)];

			}

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("guessesSoFar").innerHTML = guessesSoFar;



		}






