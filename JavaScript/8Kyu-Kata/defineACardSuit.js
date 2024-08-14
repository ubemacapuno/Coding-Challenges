// 8 kyu Define a card suit
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
//P: card
//R: suit of card in lowercase (string)
//E: See above
//Pseudocode:
// Use if-else statement for the card and suits, using the "includes" string method for each condition
//My solution:
function defineSuit(card) {
    if(card.includes('♣')){
        return 'clubs'
    }else if(card.includes('♦')){
        return 'diamonds'
    }else if(card.includes('♥')){
        return 'hearts'
    }else if(card.includes('♠')){
        return 'spades'
    }
  }
//Refactor - ternary:
function defineSuit(card) {
    return card.includes('♣') ? 'clubs'
          : card.includes('♦') ? 'diamonds'
          : card.includes('♥') ? 'hearts'
          : card.includes('♠') ? 'spades'
          : null
  }
//Test case:
console.log(defineSuit('3♣'))