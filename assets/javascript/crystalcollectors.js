//Copyright 2017 Ahmed Akhtar
//Jquery Crystal Collector Game

// Specify a function to execute when the DOM is fully loaded.
$(document).ready(function() {



	  	// Audio for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/avemaria.mp3");

      	// Sound Effects for Crystal Buttons
      var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "Assets/lasersoundeffect.mp3");

      // Theme Music Play Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      // Theme Music Pause Button
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });

          // Crystal Buttons Sound Effect
      $("#buttonscrystals").on("click", function() {
        audioElement2.play();
      });

	
	//Total Losses to store Calculation
	var losses = 0;

	//Total Wins to store Calculation
	var wins = 0;

		//Total Score to store Calculation
	var total = 0;


	//Linking HTML Divs to Javascript Variables
	
	$('#losses').text(losses);
	$('#winnings').text(wins);

	//Inserting Image buttons through Javascript
	 buttonscrystals = ['assets/images/purplecrystal.jpg','assets/images/bluecrystal.jpg',
	'assets/images/greencrystal.jpg','assets/images/redcrystal.jpg'];


	// Call crystalreset to Reset the points assigned to the crystals
	crystalreset();

	// Call resetgame to reset the App and Score.
	resetgame();

	//Defining the random values of the crystals-------------------------------------
	function crystalreset () {
	var num = []
	while(num.length < 4){
	var randomgoal = Math.ceil(Math.random()*11+1)
	var matches = false;


	//Defining loop
	for (var i=0; i< num.length; i++){


	//If and Else Statement: Defining Values for Crystal Game Buttons
	if (num[i] == randomgoal){
	matches = true; break
		}
	}
	 if(!matches)num[num.length]=randomgoal;
	}
		console.log(num);		


	//Looping the crystals
		for (i = 0; i < num.length; i++) {
			var crystalbutton = $('<img>');
			crystalbutton.attr('data-num', num[i]);
			crystalbutton.attr('alt', 'buttonscrystals');
			crystalbutton.attr('src', buttonscrystals[i]);
			crystalbutton.addClass('imagecrystal')
			$('#buttonscrystals').append(crystalbutton);
		}
	}


	//Defining the function of a New Game.---------------------------------------
	function resetgame() {

	//Setting "total" or Total Score Calculation to 0
		total = 0;
		$('#currentscore').text(total);

	


	//Defining the function of matching total score with the number to win the game-------------------------------------------------
	function counterequalsguess(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = counterequalsguess(19,120);

		$('.totaltomatch').text(numberToGuess);


		$('.imagecrystal').on('click', function(){
		    total = total + parseInt($(this).data('num'));
		   
		    $('#currentscore').text(total);

	//Defining the conditions of winning the game!

		    if (total == numberToGuess){
		      $('#progress').text('YOU WIN!');
		      wins ++;

    //Logging Wins in the console

		      $('#winnings').text(wins);
		      console.log(wins)

	// Reseting the game and random crystal values when the game is won.
		      $('#buttonscrystals').empty();
		      crystalreset();
		      resetgame();

	//Defining the conditions of losing the game!
	
		    } else if ( total > numberToGuess){
		        $('#progress').text('YOU LOSE!')
		        losses ++;
		        $('#losses').text(losses);
		        console.log(losses)
		        $('#buttonscrystals').empty();

	// Reseting the game and random crystal values when the game is lost.
		        crystalreset();
		        resetgame();
		    }
		});
	}

});