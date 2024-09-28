// JavaScript for the slider
let scrollPosition = 0;
const servicesContainer = document.querySelector('.services');
const serviceCards = document.querySelectorAll('.service-card');
const totalCards = serviceCards.length;
const cardWidth = serviceCards[0].offsetWidth + 20; // Width of a card plus gap

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
    scrollPosition += cardWidth; // Move right
    if (scrollPosition >= cardWidth * totalCards) {
        scrollPosition = 0; // Reset to the beginning
    }
    servicesContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
    scrollPosition -= cardWidth; // Move left
    if (scrollPosition < 0) {
        scrollPosition = cardWidth * (totalCards - 1); // Go to the last card
    }
    servicesContainer.style.transform = `translateX(-${scrollPosition}px)`;
});
