var scoreTarget = 0;
var scoreTally = 0;

var numberOfGems = 4;
var assignedGemValue = [];
var gems = ["assets/images/gem-0.png", "assets/images/gem-1.png", "assets/images/gem-2.png", "assets/images/gem-3.png"];

var wins = 0;
var losses = 0;

var main = $("body");

$(document).ready(function () {

    resetGame();

    $(".points").click(function () {
        var currentGemValue = ($(this).attr("scoreTally-value"));
        console.log("clicked " + currentGemValue);

        currentGemValue = parseInt(currentGemValue);
        scoreTally += currentGemValue;
        console.log("current score: " + scoreTally);
        $("#progressToTarget").text("Your total score is: " + scoreTally);
        // W/L logic
        if (scoreTally === scoreTarget) {
            wins++;
            $("#gameWins").text("Wins: " + wins);
            resetGame();
        } else if (scoreTally >= scoreTarget) {
            losses++;
            $("#gameLosses").text("Losses: " + losses);
            resetGame();
        }
    });

});

function resetGame() {
    // regenerate targetNumber
    scoreTarget = Math.floor((Math.random() * 120) + 19)
    $("#targetNumber").text("Target: " + scoreTarget);
    console.log("scoreTarget: " + scoreTarget);
    // reset scoreTally
    scoreTally = 0;
    $("#progressToTarget").text("Your total score is: " + scoreTally);
    console.log("scoreTally: " + scoreTally);
    // reset gem images
    $("#gem-images").empty();
    var img = main.find("#gem-images");

    for (i = 0; i < gems.length; i++) {
        // create the point values for the gem images
        assignedGemValue[i] = Math.floor((Math.random() * 12) + 1);

        var gemImg = $("<img>");
        gemImg.addClass("col-3 points");
        gemImg.attr("src", gems[i]);
        gemImg.attr("scoreTally-value",assignedGemValue[i]);
        img.append(gemImg);
    }
    console.log("assignedGemValue: " + assignedGemValue)
}
