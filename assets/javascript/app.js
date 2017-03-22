

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
	

$(document).ready(function(){

var timer;
var counter = 30;

function countDown(){
	counter = counter - 1;

	if(counter <=0){
		clearInterval(counter);
		return;
	}
	document.getElementById("start").innerHTML=counter + " secs";
};



	
	 var currentQuestion = 0;
	 var correctAnswers = 0;

	 var options = questions[currentQuestion].choices;
  	 var formHtml = '';
  	 var next;

function start(){
	$(".question").html(parseInt(currentQuestion) + 1 + ". " + questions[currentQuestion].question);

	timer = setInterval(countDown, 1000);

	 
  	 for (var i = 0; i < options.length; i++) {
      formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      questions[currentQuestion].choices[i] + '</label></div><br/>';

      }

    $('#form').html(formHtml);
    $("#next").prop('checked', true);//need to check
  	
 };
function nextQuestion(){
	
	// $(document).find("#next").click(function(){
	// 	alert("go");
	// });
}



//adding up the score
function done() {
	//add up the questions
    
}
//displaying the score by checking the answers
function result(){
	$(document).find("#result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find("#result").show();


}




$("#start").click(function(){
	start();
});

$("#next").click(function(){
	nextQuestion();
})


$("#done").click(function(){
	result();
});


});






