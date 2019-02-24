var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

// $(".crystal").attr('class');




var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
            'http://files.softicons.com/download/object-icons/desktop-crystal-icons-by-aha-soft/png/256x256/Swarovski%20crystal.png', 
			'http://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642', 
			'http://pluspng.com/img-png/png-crystal-crystal-png-500.png', 
			'https://www.zimpler.com/uploads/howto-product-image/crystals.png'];
		
	random_result = Math.floor(Math.random() * 69 ) + 30; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

    $("#previous").html("Total Score: " + previous);
    $("#lost").html("Wins: " + lost);
    $("#win").html("Loses: " + win);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("Loses: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("Wins: " + win);

		previous = 0;

		resetAndStart();

	}

});







//1st On click, instructions title fade out
//2nd nav's div on click expands
//3rd instruction paragraphs fade in
//4th on click instructions paragraph
//5th nav bar div, on click shrinks
//6th on click instructions fade in after some seconds 

// Speudo coding

// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystals
