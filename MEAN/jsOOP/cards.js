class Deck {
  constructor(){
    this.deck = [];
  }
  reset(){
    // initialize the deck
    this.deck = [];

    // initialize suits
    let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];

    // initialize specific cards in suits
    let cards = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];

    // loop through suits
    for (let suit in suits){
      // loop through specific cards
      for (let card in cards){
        this.deck.push(cards[card] + " of " + suits[suit]);
      }
    }
    return this;
  }

  shuffle(){
    let m = this.deck.length, t, i;
    while(m){
      i = Math.floor(Math.random() * m--)
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this;
  }

  deal(){
    return this.deck.pop();
  }
}

class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }

  draw(deck){
    this.hand.pop();
    return this;
  }
}

let new_deck = new Deck();
new_deck.reset().shuffle();
console.log(new_deck);

let new_player = new Player("Brice");
new_player.draw(new_deck).draw(new_deck);
console.log(new_player);
