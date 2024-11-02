let currentPage = 1;
const totalPages = 3;

function showPage(page) {
    document.querySelectorAll('.page').forEach((pageElement) => {
        pageElement.classList.remove('active');
    });
    document.querySelector(`#page-${page}`).classList.add('active');

    document.querySelectorAll('.dot').forEach((dot) => {
        dot.classList.remove('active');
    });
    document.querySelector(`.dot[data-page="${page}"]`).classList.add('active');
}

function nextPage() {
    currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    showPage(currentPage);
}

// Initialize first page on load
showPage(currentPage);

// Handle dot click to navigate to specific page
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        const page = parseInt(e.target.getAttribute('data-page'));
        currentPage = page;
        showPage(page);
    });
});
