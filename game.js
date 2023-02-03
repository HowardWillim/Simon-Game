var gamePattern=[];


var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour =buttonColours[nextSequence()];








function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber
}



gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

function playSound(colour){
    switch (colour) {
        case "red":
            var red=new Audio("sounds/red.mp3")
            red.play();
            break;
        case "blue":
            var blue=new Audio("sounds/blue.mp3")
            blue.play();
            break;
        case "green":
            var green=new Audio("sounds/green.mp3")
            green.play();
            break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3")
            yellow.play();
            break;
    
        default:
            break;
    }
}