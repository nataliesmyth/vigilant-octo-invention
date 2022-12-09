// make card flip
// first, make a list of all memory card elements and store it in a constant variable:
const cards = document.querySelectorAll('.memory-card');
const reset = document.getElementById('reset');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip')

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        console.log(hasFlippedCard, firstCard)
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch()
    }
}
function checkForMatch () {
    if (firstCard.dataset.framework === secondCard.dataset.framework){ disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 900);
}

// prevent user from finding match by double clicking one card
// we have to set first card and second card to null after each round
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

function resetGame() {
    cards.forEach(card => card.classList.remove('flip'))
    console.log('reset');
    hasFlippedCard = false;
    lockBoard = false;
    console.log(lockBoard)
    console.log(hasFlippedCard)
    firstCard = null;
    secondCard = null;
}

// Adding the outer most parenthesis invokes the function immediately, so the cards are shuffled before the game starts
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
reset.addEventListener('click', resetGame);