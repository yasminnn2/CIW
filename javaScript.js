document.addEventListener("DOMContentLoaded", function () {
    // Slideshow functionality
    let currentIndex = 0;
    const slidesContainer = document.getElementById("slidesContainer");
    const dotContainer = document.getElementById("dotsContainer");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Create dots dynamically based on the number of slides
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlide(i));
        dotContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    // Show slide by index
    function showSlide(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    // Update active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === currentIndex) {
                dot.classList.add("active");
            }
        });
    }

    // Auto change slides every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3000);

    // Initially show the first slide
    showSlide(currentIndex);

    // Get the button and mission info
    const missionButton = document.getElementById("our-mission-button");
    const missionInfo = document.getElementById("mission-info");

    // Toggle the 'active' class to show/hide the mission information when the button is clicked
    if (missionButton && missionInfo) {
        missionButton.addEventListener("click", function () {
            missionInfo.classList.toggle("active");  // Toggle visibility with sliding effect
        });
    }

    // Map Modal functionality
    function openMapModal(event) {
        event.preventDefault(); // Prevents page from scrolling to top
        document.getElementById("mapModal").style.display = "block";
    }

    function closeMapModal() {
        document.getElementById("mapModal").style.display = "none";
    }

    // Counter animation (FIX: Removed duplicate `DOMContentLoaded` event)
    const counters = document.querySelectorAll('.count');
    const speed = 2000; // Time to complete the count animation (in milliseconds)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

}); // Properly closed `DOMContentLoaded` event

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename and decode any URL encoding (e.g., %20 -> space)
    let currentPage = decodeURIComponent(window.location.pathname.split("/").pop().toLowerCase()) || "community ingrained.html";

    console.log("Current page detected:", currentPage); // Debugging log

    // Get all navigation links
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        // Extract and decode the filename from href
        let linkHref = decodeURIComponent(link.getAttribute("href").split("/").pop().toLowerCase());
        console.log("Checking link:", linkHref); // Debugging log

        // Check if it matches the current page
        if (linkHref === currentPage) {
            console.log("Match found! Highlighting:", linkHref); // Debugging log
            link.classList.add("active-page"); // Add class to keep hover color
        }
    });
});




