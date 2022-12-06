// make card flip
// first, make a list of all memory card elements and store it in a constant variable:
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
function flipCard() {
    console.log('i was clicked')
    // in this context, the this keyword represents the element that fired the click event, <div class="memory-card"></div
    // console.log(this)
    // we want to access the class list of the memory cards and toggle the flip class
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

        // check if cards match
    }
}
// loop through the list of cards and attach an event listener to each one
// we want to listen to a click event, and every time that event happens we will execute a function called flipCard, declared above.
cards.forEach(card => card.addEventListener('click', flipCard))