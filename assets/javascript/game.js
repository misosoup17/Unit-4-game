//setting the variables that I will be using to maintain the score board
var randomResult;
var lost;
var win;

$(".soccerBall").attr('class');

randomResult = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + randomResult);

//For loop 
for(var i=0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);
    
    var soccerBall =$("<div>");
    soccerBall.attr({
    "class":'soccerBall',
    "dataRandom":random,
    });
    $(".soccerBalls").append(soccerBall);
}

$(".soccerBall").on('click', function () {
    console.log($(this));
});
// creating a game of choice with four balls
// you need to add up to a given amount by clicking each ball