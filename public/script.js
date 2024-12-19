function createStars(container, numberOfStars) {
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position
        const randomX = Math.random() * 100; // Random percentage for X position
        const randomY = Math.random() * 100; // Random percentage for Y position
        star.style.left = `${randomX}vw`; // Use viewport width for positioning
        star.style.top = `${randomY}vh`; // Use viewport height for positioning

        // Randomize size
        const randomSize = Math.random() * (7 - 3) + 5; // Size between 5px and 8px
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;

        // Randomize animation delay
        const randomDelay = Math.random() * 1.5; // Delay between 0s and 1.5s
        star.style.animationDelay = `${randomDelay}s`;

        // Add subtle movement
        star.style.animation += `, move ${Math.random() * 3 + 2}s infinite alternate`; // Random duration for movement

        container.appendChild(star);
    }
}

// Create stars for the navbar
const navbarStarsContainer = document.querySelector('.navbar .stars-container');
createStars(navbarStarsContainer, 100); // Adjust the number of stars for the navbar

// Create stars for the hero section
const heroStarsContainer = document.querySelector('.hero-section .stars-container');
createStars(heroStarsContainer, 150); // Adjust the number of stars for the hero section