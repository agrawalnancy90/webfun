// Function to display the next page in the specified project card
function nextPage(cardId) {
    // Find the specific card by data-id
    const card = document.querySelector(`.project-card[data-id="${cardId}"]`);
    if (!card) return; // If the card isn't found, exit the function

    const pages = card.querySelectorAll(".page");
    const dots = card.querySelectorAll(".dot");

    // Identify the currently active page by checking for the active class
    let activeIndex = Array.from(pages).findIndex(page => page.classList.contains("active"));

    // Remove active class from current page and dot
    if (activeIndex >= 0) {
        pages[activeIndex].classList.remove("active");
        dots[activeIndex].classList.remove("active");
    }

    // Calculate the next page index, looping back to the first page if at the end
    activeIndex = (activeIndex + 1) % pages.length;

    // Show the next page and set the corresponding dot as active
    pages[activeIndex].classList.add("active");
    dots[activeIndex].classList.add("active");
}

// Initialize each project card to show the first page on load
function initializeCards() {
    document.querySelectorAll(".project-card").forEach((card, index) => {
        const pages = card.querySelectorAll(".page");
        const dots = card.querySelectorAll(".dot");

        // Ensure only the first page and dot are active
        pages.forEach((page, pageIndex) => {
            page.classList.toggle("active", pageIndex === 0);
        });
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === 0);
        });

        // Assign a unique ID to each card
        card.setAttribute("data-id", index + 1);

        // Set up chevron click event to call nextPage with the card's ID
        const chevron = card.querySelector(".chevron");
        if (chevron) {
            chevron.onclick = () => nextPage(index + 1);
        }
    });
}

// Event listener for pagination dots to navigate to the clicked page
document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", function() {
        const card = this.closest(".project-card");
        const targetPage = parseInt(this.getAttribute("data-page")) - 1;
        const pages = card.querySelectorAll(".page");
        const dots = card.querySelectorAll(".dot");

        // Hide all pages and reset dots, then show selected
        pages.forEach(page => page.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        pages[targetPage].classList.add("active");
        dots[targetPage].classList.add("active");
    });
});

// Call initializeCards on page load to set up each card's first page
initializeCards();
