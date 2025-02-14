document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".Image-slider ol li");
    let currentIndex = 0;
    
    const titles = ["Speed Machine", "Elegant Ride", "Futuristic Beast", "Road Warrior"];
    const captions = [
        "Experience the thrill of speed.",
        "A ride designed for elegance and comfort.",
        "The future of motorcycles is here.",
        "Conquer the roads with unmatched power."
    ];

    const titleElement = document.getElementById("image-title");
    const captionElement = document.getElementById("image-caption");
    
    // Function to show the active slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    // Next Slide Function
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Previous Slide Function
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Auto Slide Every 4 Seconds
    setInterval(nextSlide, 4000);

    // Event Listeners for Buttons
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
    
    // Show first slide initially
    showSlide(currentIndex);
});

