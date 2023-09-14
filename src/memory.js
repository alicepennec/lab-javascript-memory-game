class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === 0) {
      return undefined
    } else {
      for (let i = this.cards.length -1; i>= 0; i --) {
        i=Math.floor(Math.random)
      }
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.cards.length/2 === this.pairsGuessed ) {
      return true;
    } else {
      return false;
    }
  }
}
