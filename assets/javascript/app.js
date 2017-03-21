$(document).ready(function(){

function timer(){
	var counter = 30;
	var count = count - 1;
	if(count <=0){
		clearInterval(counter);
		return;
	}
	document.getElementById("seconds").innerHTML=count + " secs";
};
timer();

	var questions = [{question: "What city in California did Saved By the Bell take place?", 
			choices: ["Palisades", "Sacramento", "Oakland", "Malibu"],
			correctAnswer: 0},
			{question: "What was the first hit by the band Zack Attack?", 
			choices: ["Love Me Now", "Friends Forever", "Lovesick", "Did We Ever Have a Chance"],
			correctAnswer: 3},
			{question: "In 'The Zack Tapes', who is the first person to put a heart necklace on Zack?", 
			choices: ["Kelly", "Lisa", "Jessie", "Slater"],
			correctAnswer: 1},
			{question: "Who is NOT a sibling of Kelly Kapowski?", 
			choices: ["Billy", "Nikki", "Kyle", "Mikey"],
			correctAnswer: 3}];
	
	 var currentQuestion = 0;
	 var correctAnswers = 0;


function setupOption(){
	 $("#question").html(parseInt(currentQuestion) + 1 + ". " + questions[currentQuestion].question);

	 var options = questions[currentQuestion].choices;
  	 var formHtml = '';
  	 for (var i = 0; i < options.length; i++) {
      formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      questions[currentQuestion].choices[i] + '</label></div><br/>';

      }
 

    $('#form').html(formHtml);
    $("#option").prop('checked', next);//need to check
  
 };


function nextQuestion(){
	$(document).click(".button");
	$(document).click(".button").show();

	var options = questions[currentQuestion].choices;
  	var formHtml = '';
  	 
}

function displayScore() {

    $(document).find("#result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find("#result").show();
}

setupOption();
nextQuestion();
displayScore();
 

});






