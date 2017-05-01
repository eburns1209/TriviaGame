// $(document).ready(function(){

$("#start").on('click', function(){
    game.start();
})
$(document).on("click", "#end", function(){
  game.done();
})

var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];
  
//object for game
var game = {
  //properties
  correct: 0,
  incorrect: 0,
  counter: 120, //timer starts here
  countdown:function(){//method is a countdown
    game.counter --; //decrease counter by 1
    $("#counter").html(game.counter);
    if(game.counter <= 0){
      console.log("time is up");
      game.done();//another method to create later
    }
  },

  start:function(){
    timer = setInterval(game.countdown, 1000);
    $('#sub-wrapper').prepend('<h2>Time remaining: <span id="counter">120</span> Seconds</h2> ');
     $("#start").remove();
        console.log("you clicked me");
    //$("#sub-wrapper").remove(); //it removes the button, so questions can appear
      for(var i = 0; i < questions.length; i++){
        $("#sub-wrapper").append('<h2>' + questions[i].question + '</h2>');//questions
      for(var j = 0; j <questions[i].choices.length; j++){//looop for answers
        $("#sub-wrapper").append("<input type = 'radio' name='question- "+ i + " 'value=' " + questions[i].choices[j] + "''> " + questions[i].choices[j]);
      }
      }

      $("#sub-wrapper").append('<button id="end">DONE</button>');
  },

  done:function(){
    
    $.each($("input[name='question- 0 ']:checked"), function(){

      if($(this).val()==questions[0].choices[questions[0].correctAnswer]){
      game.correct++;
      }else{
      game.incorrect++;
      }
    });
    
    $.each($("input[name='question- 1 ']:checked"), function(){
       if($(this).val()==questions[1].choices[questions[1].correctAnswer]){
          game.correct++;
         }else{
          game.incorrect++;
         }
    });
       
    $.each($("input[name='question- 2 ']:checked"), function(){
       if($(this).val()==questions[2].choices[questions[2].correctAnswer]){
          game.correct++;
         }else{
          game.incorrect++;
         }
    });

    $.each($("input[name='question- 3 ']:checked"), function(){
       if($(this).val()==questions[3].choices[questions[3].correctAnswer]){
          game.correct++;
         }else{
          game.incorrect++;
         }
    });

    $.each($("input[name='question- 4 ']:checked"), function(){
       if($(this).val()==questions[4].choices[questions[4].correctAnswer]){
          game.correct++;
         }else{
          game.incorrect++;
         }
    });

    $.each($("input[name='question- 5 ']:checked"), function(){
       if($(this).val()==questions[5].choices[questions[5].correctAnswer]){
          game.correct++;
         }else{
          game.incorrect++;
         }
    });

  },
  
  result:function(){
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    $("#sub-wrapper").html("<h2> All Done</h2>");
    $("#sub-wrapper").append("<h3>Correct Answers: " + game.correct + "</h3>");
    $("#sub-wrapper").append("<h3>incorrect Answers: " + game.incorrect + "</h3>");
    $("#sub-wrapper").append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");

  }
 




}


//})
 