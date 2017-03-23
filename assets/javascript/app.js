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
var correct = 0;
var incorrect = 0;
var counter = 30;

function countDown(){
	counter = counter - 1;

	if(counter <=0){
		clearInterval(counter);
		$(".result").html("<h3>Game Over</h3>");
		return;
	}
	document.getElementById("start").innerHTML=counter + " secs";
};//end function countDown

	
	 var currentQuestion = 0;
	 var correctAnswers = 0;
	 var incorrectAnswers = 0;

	 var options = questions[currentQuestion].choices;
  	 var formHtml = '';
  	 

function start(){
	
		timer = setInterval(countDown, 1000);

	 	for (var i = 0; i < questions.length; i++){
	 	formHtml += $("#form").append(questions);
	 	$(".question").html(parseInt(currentQuestion) + 1 + ". " + questions[currentQuestion].question);
		formHtml += $("#form").append(questions[i].length);
	 	
	 	for (var j = 0; j < questions[i].choices.length; j++){
		$("#form").append("<input type='radio' name='question-" + i + "' value='"
			+ questions[i].choices[j] + "''>" + questions[i].choices[j]);
		}
 		
 		}
 
}; //end start function

//tried to tally answers

// var answers = {q1: "a", q2: "d", q3: "b", q4: "d"};
// $("#checkAns").click(function(e){
// 	$.each(questions, function(questions, answer){
// 		if($('input:radio[name="' + question + '"]:checked').val()=== answer)
// 				alert(question + ' : True');
// 		else
// 			alert(question + ' : False');
// 	});
// 	e.preventDefault();
// });
//end of attempt of tallying answers


//displaying the score by checking the answers

// function submitResult(){
	
// 	var submit = "done";
// 	if(counter === 1){
// 		$("#next").append(results);
// 	}
// }
// $.each($("input[name='question-0']:checked"), function(){
// 		if($(this).val()=== questions[0].correctAnswer){
// 			correct++;
// 		}
// 		else{
// 			incorrect++;
// 		}
// 	});

// 	$(document).find("#result").text("You scored: " + correctAnswers + " out of " + questions.length);
//     $(document).find("#result").show();


// }
//submit result function



$("#start").click(function(){
	start();
});

// $("#next").click(function(){
// 	submitResult();
// });


});




