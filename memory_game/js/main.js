var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
			alert("Sorry, try again.");
	}	
}
var flipCard = function(cardID) {
console.log("User flipped " + cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};
flipCard(0);
flipCard(2);



/*
When assignment instructions say to delete 
the code you wrote in the last assignment:
From Assignment 10:
var cards = ["queen", "queen", "king", "king"];


From Assignment 8:
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);


*/

