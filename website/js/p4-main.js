var cards = ["2card.png", "3card.png", "4card.png", "5card.png", "6card.png", "7card.png", "8card.png", "9card.png", "10card.png", "jack.jpg", "queen.jpg", "king.jpg", "ace.png"];

var firstGuess = false;
var points = 1;
var currentCardNum = 0;
var nextCardNum = 0;

generateNextCard(0, 12)

document.getElementById("button").onclick = function () {
    var currentCard = cards[nextCardNum];

    if (firstGuess === false) {
        if (document.getElementById("higherGuess").checked) {
            document.getElementById("guessResult").innerHTML = "<p id='guessResult'>Guess: Correct!</p>";
            document.getElementById("points").innerHTML = "<p id='points'>Points: " + points++ + "</p>";
            firstGuess = true;
            document.getElementById("card").src = "images/" + currentCard;
            generateNextCard(0, 12);
        } else {
            document.getElementById("guessResult").innerHTML = "<p id='guessResult'>Guess: Incorrect!</p>";
            points = 0;
            firstGuess = false;
            currentCardNum = 0;
            document.getElementById("points").innerHTML = "<p id='points'>Points: " + points++ + "</p>";
            document.getElementById("card").src = "images/2card.png";
        }
    } else if (document.getElementById("higherGuess").checked && nextCardNum > currentCardNum) {
        document.getElementById("guessResult").innerHTML = "<p id='guessResult'>Guess: Correct!</p>";
        document.getElementById("points").innerHTML = "<p id='points'>Points: " + points++ + "</p>";
        document.getElementById("card").src = "images/" + currentCard;
        generateNextCard(0, 12);
    } else if (document.getElementById("lowerGuess").checked && nextCardNum < currentCardNum) {
        document.getElementById("guessResult").innerHTML = "<p id='guessResult'>Guess: Correct!</p>";
        document.getElementById("points").innerHTML = "<p id='points'>Points: " + points++ + "</p>";
        document.getElementById("card").src = "images/" + currentCard;
        generateNextCard(0, 12);
    } else {
        document.getElementById("guessResult").innerHTML = "<p id='guessResult'>Guess: Incorrect!</p>";
        points = 0;
        firstGuess = false;
        currentCardNum = 0;
        document.getElementById("points").innerHTML = "<p id='points'>Points: " + points++ + "</p>";
        document.getElementById("card").src = "images/2card.png";
    }
}

function generateNextCard(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (points === 1) {
        nextCardNum = randomNum;
    } else {
        currentCardNum = nextCardNum;
        randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        nextCardNum = randomNum;
    }
}
