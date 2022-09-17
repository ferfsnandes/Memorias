document.addEventListener('DOMContentLoaded', () => {

//list of cards to choose from
const cardArray = [
  {
    name: 'armour',
    img: 'images/armour.png'
  },
  {
    name: 'armour',
    img: 'images/armour.png'
  },
  {
    name: 'emerald',
    img: 'images/emerald.png'
  },
  {
    name: 'emerald',
    img: 'images/emerald.png'
  },
    {
    name: 'gem',
    img: 'images/gem.png'
  },
  {
    name: 'gem',
    img: 'images/gem.png'
  },
  {
    name: 'necklace',
    img: 'images/necklace.png'
  },
  {
    name: 'necklace',
    img: 'images/necklace.png'
  },
    {
    name: 'orb',
    img: 'images/orb.png'
  },
  {
    name: 'orb',
    img: 'images/orb.png'
  },
  {
    name: 'potion',
    img: 'images/potion.png'
  },
  {
    name: 'potion',
    img: 'images/potion.png'
  },
    {
    name: 'sack',
    img: 'images/sack.png'
  },
  {
    name: 'sack',
    img: 'images/sack.png'
  },
  {
    name: 'spellbook',
    img: 'images/spellbook.png'
  },
  {
    name: 'spellbook',
    img: 'images/spellbook.png'
  }
]


//randomize the cards
cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const score = document.querySelector('#score')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

  
//creates board
function boardCreation() {
  for(let i=0; i<cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/BLANKchest.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}
//checks if match is correct
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const firstChosenId = cardsChosenId[0]
  const secondChosenId = cardsChosenId[1]
  if(cardsChosen[0] === cardsChosen[1]) {
    cards[firstChosenId].setAttribute('src', 'images/whiteimg.png')
    cards[secondChosenId].setAttribute('src', 'images/whiteimg.png')
    cardsWon.push(cardsChosen)
  }
  else {
    cards[firstChosenId].setAttribute('src', 'images/BLANKchest.png')
    cards[secondChosenId].setAttribute('src', 'images/BLANKchest.png')
  }
  cardsChosen = []
  cardsChosenId = []
  score.textContent = cardsWon.length
  if(cardsWon.length === cardArray.length/2) {
    score.textContent = 'Você venceu e coletou todo o tesouro!'
  }
}

  
//flips card
function flipCard() {
  if(cardsChosen.length < 2) {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2) {
    setTimeout(checkForMatch, 800)
  }
  }
}
boardCreation()

})


// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

