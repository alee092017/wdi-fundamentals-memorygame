var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
			alert("Sorry, try again.");
	}	
}
var flipCard = function(cardID) {
console.log("User flipped " + cards[cardID]);
cardsInPlay.push(cards[cardID]);
if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};
flipCard(0);
flipCard(2);



/*
When assignment instructions say to delete 
the code you wrote in the last assignment:
From Assignment 8:
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);


*/

