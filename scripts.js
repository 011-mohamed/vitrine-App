document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
    
    carousels.forEach((carousel, index) => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll("img");
        
        // Create buttons
        const nextButton = document.createElement("button");
        nextButton.classList.add("carousel-button");
        nextButton.textContent = ">";
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        const prevButton = document.createElement("button");
        prevButton.classList.add("carousel-button");
        prevButton.textContent = "<";
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("carousel-buttons");
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);
        
        carousel.parentElement.appendChild(buttonContainer);
    });
});
