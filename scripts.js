// make card flip
// first, make a list of all memory card elements and store it in a constant variable:
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    console.log('i was clicked')
}
// loop through the list of cards and attach an event listener to each one
// we want to listen to a click event, and every time that event happens we will execute a function called flipCard, declared above.
cards.forEach(card => card.addEventListener('click', flipCard))