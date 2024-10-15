document.querySelectorAll('.timeline-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.career-details').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.career-details').style.opacity = '0';
    });
});
