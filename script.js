// Duplicate the cards to create an infinite effect
const cardsWrapper = document.querySelector('.cards');
const cardItems = document.querySelectorAll('.card');

// Clone the card items and append them to the cards container
cardItems.forEach(card => {
    const clonedCard = card.cloneNode(true);
    cardsWrapper.appendChild(clonedCard);
});
